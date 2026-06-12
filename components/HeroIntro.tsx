// components/HeroIntro.tsx
'use client'

import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Chorégraphie d'intro du hero (au chargement, pas au scroll) :
// statue, puis mot ATLAS (tracking qui se resserre), puis tagline/CTA.
// Les états initiaux (opacity: 0) sont posés en CSS via [data-hero],
// avec l'override prefers-reduced-motion dans globals.css.
export default function HeroIntro() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const root = document.querySelector('[data-hero-root]')
    if (!root) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'expo.out' } })

      tl.fromTo(
        '[data-hero="statue"]',
        { opacity: 0, scale: 1.04 },
        { opacity: 1, scale: 1, duration: 1.2 }
      )
        .fromTo(
          '[data-hero="word"]',
          { opacity: 0, letterSpacing: '0.16em', textIndent: '0.16em' },
          {
            opacity: 1,
            letterSpacing: '0.08em',
            textIndent: '0.08em',
            duration: 1.1,
          },
          0.15
        )
        .fromTo(
          '[data-hero="fade-up"]',
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.7, stagger: 0.12 },
          0.7
        )

      // Parallax léger de la statue pendant que le hero défile
      gsap.to('[data-hero="statue"]', {
        yPercent: -6,
        ease: 'none',
        scrollTrigger: {
          trigger: root,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })
    }, root as HTMLElement)

    return () => ctx.revert()
  }, [])

  return null
}
