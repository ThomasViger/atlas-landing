// components/CelestialSky.tsx
'use client'

import { useEffect, useRef } from 'react'

// PRNG déterministe — le ciel est identique à chaque visite.
function mulberry32(seed: number) {
  return () => {
    seed |= 0
    seed = (seed + 0x6d2b79f5) | 0
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

// Constellations (coordonnées normalisées 0-1) — reprises de l'ancien SVG.
const CONSTELLATIONS: [number, number][][] = [
  [[0.125, 0.18], [0.18, 0.29], [0.23, 0.22], [0.27, 0.35], [0.31, 0.28]],
  [[0.39, 0.15], [0.43, 0.26], [0.49, 0.18], [0.53, 0.31], [0.58, 0.22]],
  [[0.67, 0.11], [0.71, 0.24], [0.76, 0.16], [0.82, 0.29], [0.875, 0.18]],
  [[0.10, 0.70], [0.17, 0.78], [0.24, 0.72]],
  [[0.62, 0.67], [0.68, 0.76], [0.74, 0.69]],
  [[0.83, 0.63], [0.89, 0.73], [0.94, 0.66]],
]

type Star = {
  x: number
  y: number
  r: number
  a: number
  warm: number // 0 = blanc, 1 = doré
  tw: number // vitesse de scintillement
  ph: number // phase
  hero: boolean
}

export default function CelestialSky({ className }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let raf = 0
    let stars: Star[] = []
    let W = 0
    let H = 0

    const parent = canvas.parentElement
    if (!parent) return

    const build = () => {
      // Taille prise sur le parent (la section) — jamais sur le canvas
      // lui-même : on modifie ses attributs ici, l'observer bouclerait.
      const rect = parent.getBoundingClientRect()
      if (rect.width === W && rect.height === H) return
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      W = rect.width
      H = rect.height
      canvas.width = Math.round(W * dpr)
      canvas.height = Math.round(H * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const rnd = mulberry32(20260612)
      stars = []

      // Poussière d'étoiles (plafonnée — garde-fou)
      const n = Math.min(600, Math.round((W * H) / 4200))
      for (let i = 0; i < n; i++) {
        stars.push({
          x: rnd() * W,
          y: rnd() * H,
          r: 0.4 + rnd() * 0.9,
          a: 0.12 + rnd() * 0.5,
          warm: rnd() * 0.5,
          tw: 0.3 + rnd() * 1.2,
          ph: rnd() * Math.PI * 2,
          hero: false,
        })
      }

      // Voie lactée — bande diagonale diffuse de micro-étoiles
      const m = Math.round(n * 0.9)
      for (let i = 0; i < m; i++) {
        const t = rnd()
        const spread = (rnd() + rnd() + rnd() - 1.5) / 1.5 // ~gaussien
        const x = t * W
        const y = H * (0.62 - 0.38 * t) + spread * H * 0.16
        if (y < 0 || y > H) continue
        stars.push({
          x,
          y,
          r: 0.3 + rnd() * 0.6,
          a: 0.06 + rnd() * 0.28,
          warm: rnd() * 0.6,
          tw: 0.2 + rnd() * 0.8,
          ph: rnd() * Math.PI * 2,
          hero: false,
        })
      }

      // Étoiles des constellations (moyennes) + héroïques
      CONSTELLATIONS.forEach((group) => {
        group.forEach(([gx, gy], i) => {
          stars.push({
            x: gx * W,
            y: gy * H,
            r: 1.3 + rnd() * 1.1,
            a: 0.65 + rnd() * 0.3,
            warm: 0.5 + rnd() * 0.5,
            tw: 0.4 + rnd() * 0.7,
            ph: rnd() * Math.PI * 2,
            hero: i === 1 && rnd() > 0.4,
          })
        })
      })
    }

    const drawStar = (s: Star, t: number) => {
      const twinkle = reduced ? 1 : 0.76 + 0.24 * Math.sin(t * 0.001 * s.tw + s.ph)
      const alpha = s.a * twinkle
      const cr = 248
      const cg = Math.round(247 - s.warm * 46)
      const cb = Math.round(244 - s.warm * 110)
      const col = (a: number) => `rgba(${cr}, ${cg}, ${cb}, ${a})`

      if (s.hero) {
        // Halo
        const R = s.r * 9
        const g = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, R)
        g.addColorStop(0, col(alpha * 0.55))
        g.addColorStop(0.35, col(alpha * 0.12))
        g.addColorStop(1, col(0))
        ctx.fillStyle = g
        ctx.fillRect(s.x - R, s.y - R, R * 2, R * 2)

        // Éclat en croix (diffraction)
        const L = s.r * 14 * (0.85 + 0.15 * twinkle)
        for (const [dx, dy] of [[1, 0], [0, 1]] as const) {
          const lg = ctx.createLinearGradient(
            s.x - dx * L, s.y - dy * L,
            s.x + dx * L, s.y + dy * L
          )
          lg.addColorStop(0, col(0))
          lg.addColorStop(0.5, col(alpha * 0.8))
          lg.addColorStop(1, col(0))
          ctx.strokeStyle = lg
          ctx.lineWidth = 0.8
          ctx.beginPath()
          ctx.moveTo(s.x - dx * L, s.y - dy * L)
          ctx.lineTo(s.x + dx * L, s.y + dy * L)
          ctx.stroke()
        }
      } else if (s.r > 1.1) {
        // Petit halo doux pour les étoiles moyennes
        const R = s.r * 4
        const g = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, R)
        g.addColorStop(0, col(alpha * 0.4))
        g.addColorStop(1, col(0))
        ctx.fillStyle = g
        ctx.fillRect(s.x - R, s.y - R, R * 2, R * 2)
      }

      // Cœur de l'étoile
      ctx.fillStyle = col(Math.min(1, alpha * 1.4))
      ctx.beginPath()
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
      ctx.fill()
    }

    const draw = (t: number) => {
      ctx.clearRect(0, 0, W, H)

      // Lignes de constellations — très discrètes
      ctx.strokeStyle = 'rgba(176, 138, 82, 0.16)'
      ctx.lineWidth = 0.6
      CONSTELLATIONS.forEach((group) => {
        ctx.beginPath()
        group.forEach(([gx, gy], i) => {
          if (i === 0) ctx.moveTo(gx * W, gy * H)
          else ctx.lineTo(gx * W, gy * H)
        })
        ctx.stroke()
      })

      // Étoiles en mode additif — la superposition devient lumineuse
      ctx.globalCompositeOperation = 'lighter'
      stars.forEach((s) => drawStar(s, t))
      ctx.globalCompositeOperation = 'source-over'
    }

    const loop = (t: number) => {
      draw(t)
      raf = requestAnimationFrame(loop)
    }

    build()
    draw(0)

    const ro = new ResizeObserver(() => {
      build()
      draw(0)
    })
    ro.observe(parent)

    // Anime uniquement quand la section est visible
    let visible = false
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
      if (visible && !reduced && !raf) {
        raf = requestAnimationFrame(loop)
      } else if (!visible && raf) {
        cancelAnimationFrame(raf)
        raf = 0
      }
    })
    io.observe(canvas)

    return () => {
      if (raf) cancelAnimationFrame(raf)
      ro.disconnect()
      io.disconnect()
    }
  }, [])

  return <canvas ref={ref} className={className} aria-hidden="true" />
}
