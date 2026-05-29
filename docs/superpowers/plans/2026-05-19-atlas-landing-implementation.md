# Atlas Landing — Plan d'implémentation

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Refonte complète de la landing page Atlas — 10 composants, design ivoire/navy/bronze, Cormorant + Geist, GSAP + Lenis.

**Architecture:** Composants serveur Next.js 16 App Router. CSS Modules par composant + tokens globaux en CSS custom properties. Deux composants client dédiés pour Lenis (smooth scroll) et GSAP (scroll animations) ciblant des `data-animate` attributes.

**Tech Stack:** Next.js 16 App Router, React 19, Tailwind v4, CSS Modules, GSAP 3, Lenis

---

## Fichiers créés / modifiés

| Fichier | Statut | Rôle |
|---|---|---|
| `app/globals.css` | Modifier | Tokens CSS, styles de base |
| `app/layout.tsx` | Modifier | Fonts Cormorant + Geist, metadata |
| `app/page.tsx` | Modifier | Composition des sections |
| `components/Navbar.tsx` | Remplacer | Navigation fixe |
| `components/Hero.tsx` | Remplacer | Section héro plein écran |
| `components/Manifesto.tsx` | Créer (renomme Problem) | Texte manifeste |
| `components/Features.tsx` | Remplacer | 4 modules alternés |
| `components/CelestialVault.tsx` | Créer | Section navy + SVG constellations |
| `components/TrustBand.tsx` | Créer (renomme WhyAtlas) | 5 signaux de confiance |
| `components/Pricing.tsx` | Créer | Carte tarifs unique |
| `components/Founder.tsx` | Remplacer | Présentation Thomas |
| `components/FinalCTA.tsx` | Créer (renomme WaitlistCTA) | CTA final plein écran |
| `components/Footer.tsx` | Remplacer | Pied de page éditorial |
| `components/SmoothScroll.tsx` | Créer | Client — Lenis smooth scroll |
| `components/ScrollAnimations.tsx` | Créer | Client — GSAP scroll reveals |

---

## Task 1 : Dépendances + nettoyage

**Files:**
- Modify: `package.json`
- Delete: `components/Problem.tsx`, `components/WhyAtlas.tsx`, `components/WaitlistCTA.tsx`

- [ ] **Step 1 : Installer GSAP et Lenis**

```bash
npm install gsap lenis
npm install --save-dev @types/gsap
```

Résultat attendu : `added X packages` sans erreur.

- [ ] **Step 2 : Supprimer les anciens composants obsolètes**

```bash
rm components/Problem.tsx components/WhyAtlas.tsx components/WaitlistCTA.tsx
```

- [ ] **Step 3 : Vérifier le dev server démarre sans erreur**

```bash
npm run dev
```

Résultat attendu : serveur sur `http://localhost:3000`, pas d'erreur de compilation (des erreurs d'import dans page.tsx sont normales à ce stade).

- [ ] **Step 4 : Commit**

```bash
git add package.json package-lock.json
git rm components/Problem.tsx components/WhyAtlas.tsx components/WaitlistCTA.tsx
git commit -m "chore: install gsap+lenis, supprimer anciens composants"
```

---

## Task 2 : Design system — globals.css + layout.tsx

**Files:**
- Modify: `app/globals.css`
- Modify: `app/layout.tsx`

- [ ] **Step 1 : Écrire globals.css**

Remplacer intégralement le contenu de `app/globals.css` :

```css
@import 'tailwindcss';

/* ── TOKENS ─────────────────────────────── */
:root {
  --ivory:        #F8F7F4;
  --ivory-2:      #F0EDE6;
  --navy:         #1A1F3A;
  --navy-70:      rgba(26, 31, 58, 0.70);
  --navy-40:      rgba(26, 31, 58, 0.40);
  --navy-12:      rgba(26, 31, 58, 0.12);
  --navy-06:      rgba(26, 31, 58, 0.06);
  --bronze:       #8A6A32;
  --bronze-light: #B08A52;
  --bronze-20:    rgba(138, 106, 50, 0.20);
  --bronze-08:    rgba(138, 106, 50, 0.08);
  --serif:        var(--font-cormorant), Georgia, serif;
  --sans:         var(--font-geist), system-ui, sans-serif;
  --mono:         var(--font-geist-mono), monospace;
}

/* ── BASE ────────────────────────────────── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

html { scroll-behavior: smooth; }

body {
  background: var(--ivory);
  color: var(--navy);
  font-family: var(--sans);
  font-size: 16px;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
}

a { color: inherit; text-decoration: none; }
button { font-family: inherit; cursor: pointer; border: none; }

/* ── SHARED UTILITIES ────────────────────── */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
}

.section-divider {
  width: 100%;
  height: 0.5px;
  background: var(--navy-12);
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 22px;
  border-radius: 6px;
  font-family: var(--sans);
  font-size: 14px;
  font-weight: 500;
  transition: all 0.25s ease;
  cursor: pointer;
  border: none;
  text-decoration: none;
}

.btn-bronze {
  background: var(--bronze);
  color: #F8F7F4;
  box-shadow: 0 1px 3px rgba(138, 106, 50, 0.30),
              0 8px 20px -8px rgba(138, 106, 50, 0.40);
}

.btn-bronze:hover {
  background: #7A5C28;
  box-shadow: 0 1px 3px rgba(138, 106, 50, 0.35),
              0 12px 28px -8px rgba(138, 106, 50, 0.50);
  transform: translateY(-1px);
}

.gradient-text {
  background: linear-gradient(135deg, var(--bronze) 0%, var(--bronze-light) 50%, var(--bronze) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.section-label {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--mono);
  font-size: 10.5px;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: var(--bronze);
}

.section-label-dot {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--bronze);
  flex-shrink: 0;
}

/* ── ANIMATIONS ──────────────────────────── */
@keyframes pulse-dot {
  0%, 100% { opacity: 1; transform: scale(1); }
  50%       { opacity: 0.5; transform: scale(0.7); }
}

/* Scroll reveal — état initial */
[data-animate] {
  opacity: 0;
  transform: translateY(28px);
}

[data-animate="fade"] {
  opacity: 0;
  transform: none;
}

@media (prefers-reduced-motion: reduce) {
  [data-animate] {
    opacity: 1 !important;
    transform: none !important;
    transition: none !important;
  }
}
```

- [ ] **Step 2 : Écrire layout.tsx avec les fonts**

```tsx
// app/layout.tsx
import type { Metadata } from 'next'
import { Cormorant, Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
  display: 'swap',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Atlas — Portez votre cabinet. Sans porter le poids.',
  description:
    'Le logiciel de gestion pour avocats solos et cabinets 1 à 5 collaborateurs. Fait en France. Dossiers, délais, facturation, documents.',
  openGraph: {
    title: 'Atlas — On porte votre cabinet, vous plaidez.',
    description:
      'Le logiciel de gestion pour avocats solos et cabinets 1 à 5 collaborateurs. Fait en France.',
    type: 'website',
    locale: 'fr_FR',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="fr"
      className={`${cormorant.variable} ${geist.variable} ${geistMono.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
```

- [ ] **Step 3 : Vérifier les fonts en dev**

```bash
npm run dev
```

Ouvrir `http://localhost:3000`. Vérifier dans les DevTools → Network que Cormorant et Geist sont chargées (ou servies depuis `/_next/static/media/`).

- [ ] **Step 4 : Commit**

```bash
git add app/globals.css app/layout.tsx
git commit -m "feat: design tokens + fonts Cormorant/Geist"
```

---

## Task 3 : Navbar

**Files:**
- Modify: `components/Navbar.tsx`
- Create: `components/Navbar.module.css`

- [ ] **Step 1 : Créer Navbar.module.css**

```css
/* components/Navbar.module.css */
.nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 40px;
  background: rgba(248, 247, 244, 0.90);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 0.5px solid var(--navy-12);
  transition: background 0.3s ease;
}

.inner {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  font-family: var(--serif);
  font-style: italic;
  font-size: 21px;
  color: var(--navy);
  letter-spacing: -0.01em;
}

.links {
  display: flex;
  gap: 32px;
}

.link {
  font-family: var(--sans);
  font-size: 13.5px;
  color: var(--navy-70);
  text-decoration: none;
  transition: color 0.2s;
}

.link:hover { color: var(--navy); }

@media (max-width: 640px) {
  .links { display: none; }
}
```

- [ ] **Step 2 : Écrire Navbar.tsx**

```tsx
// components/Navbar.tsx
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <span className={styles.logo}>Atlas</span>
        <div className={styles.links}>
          <a href="#modules" className={styles.link}>Produit</a>
          <a href="#tarifs" className={styles.link}>Tarifs</a>
        </div>
        <a href="#acces" className="btn btn-bronze">Demander un accès</a>
      </div>
    </nav>
  )
}
```

- [ ] **Step 3 : Commit**

```bash
git add components/Navbar.tsx components/Navbar.module.css
git commit -m "feat: composant Navbar"
```

---

## Task 4 : Hero

**Files:**
- Modify: `components/Hero.tsx`
- Create: `components/Hero.module.css`

- [ ] **Step 1 : Créer Hero.module.css**

```css
/* components/Hero.module.css */
.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 140px 40px 100px;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: -100px; right: -200px;
  width: 800px; height: 800px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(138, 106, 50, 0.08) 0%, transparent 65%);
  pointer-events: none;
}

.hero::after {
  content: '';
  position: absolute;
  bottom: -150px; left: -150px;
  width: 600px; height: 600px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(26, 31, 58, 0.04) 0%, transparent 65%);
  pointer-events: none;
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: var(--mono);
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: var(--bronze);
  margin-bottom: 36px;
  padding: 6px 16px;
  border: 0.5px solid var(--bronze-20);
  border-radius: 100px;
  background: var(--bronze-08);
  position: relative;
  z-index: 1;
}

.eyebrowDot {
  width: 5px; height: 5px;
  border-radius: 50%;
  background: var(--bronze);
  flex-shrink: 0;
  animation: pulse-dot 2.5s ease-in-out infinite;
}

.title {
  font-family: var(--serif);
  font-style: italic;
  font-size: clamp(60px, 9vw, 124px);
  line-height: 0.95;
  color: var(--navy);
  letter-spacing: -0.025em;
  max-width: 960px;
  margin-bottom: 32px;
  position: relative;
  z-index: 1;
}

.sub {
  font-family: var(--sans);
  font-size: 18px;
  color: var(--navy-70);
  max-width: 520px;
  line-height: 1.55;
  margin-bottom: 44px;
  position: relative;
  z-index: 1;
}

.ctaRow {
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 80px;
  position: relative;
  z-index: 1;
}

.ctaNote {
  font-family: var(--mono);
  font-size: 12px;
  color: var(--navy-40);
  letter-spacing: 0.08em;
}

.visual {
  width: 100%;
  max-width: 1100px;
  position: relative;
  z-index: 1;
}

.frame {
  width: 100%;
  aspect-ratio: 21 / 9;
  background: linear-gradient(145deg, var(--ivory-2) 0%, rgba(138, 106, 50, 0.06) 100%);
  border: 1.5px solid var(--bronze);
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.frame::before {
  content: '';
  position: absolute; inset: 0;
  background:
    radial-gradient(ellipse at 30% 60%, rgba(138, 106, 50, 0.06) 0%, transparent 50%),
    radial-gradient(ellipse at 80% 20%, rgba(26, 31, 58, 0.04) 0%, transparent 50%);
}

.frameLabel {
  font-family: var(--mono);
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: var(--navy-40);
  position: relative;
}

.corner {
  position: absolute;
  width: 20px; height: 20px;
  border-color: var(--bronze);
  border-style: solid;
  opacity: 0.6;
}
.cornerTL { top: -1px; left: -1px; border-width: 2px 0 0 2px; border-radius: 2px 0 0 0; }
.cornerTR { top: -1px; right: -1px; border-width: 2px 2px 0 0; border-radius: 0 2px 0 0; }
.cornerBL { bottom: -1px; left: -1px; border-width: 0 0 2px 2px; border-radius: 0 0 0 2px; }
.cornerBR { bottom: -1px; right: -1px; border-width: 0 2px 2px 0; border-radius: 0 0 2px 0; }

@media (max-width: 640px) {
  .title { font-size: clamp(44px, 12vw, 72px); }
  .sub { font-size: 16px; }
  .ctaRow { flex-direction: column; }
}
```

- [ ] **Step 2 : Écrire Hero.tsx**

```tsx
// components/Hero.tsx
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.eyebrow}>
        <span className={styles.eyebrowDot} />
        Fait en France · Pour les avocats
      </div>

      <h1 className={styles.title} data-animate>
        Portez votre{' '}
        <span className="gradient-text">cabinet.</span>
        <br />
        Sans porter le poids.
      </h1>

      <p className={styles.sub} data-animate>
        Le logiciel de gestion pour avocats solos et cabinets 1 à 5 collaborateurs.
      </p>

      <div className={styles.ctaRow}>
        <a
          href="#acces"
          className="btn btn-bronze"
          style={{ padding: '13px 28px', fontSize: '15px' }}
        >
          Demander un accès
        </a>
        <span className={styles.ctaNote}>
          30 jours d'essai gratuit · Aucune carte requise
        </span>
      </div>

      <div className={styles.visual} data-animate="fade">
        <div className={styles.frame}>
          <span className={`${styles.corner} ${styles.cornerTL}`} />
          <span className={`${styles.corner} ${styles.cornerTR}`} />
          <span className={`${styles.corner} ${styles.cornerBL}`} />
          <span className={`${styles.corner} ${styles.cornerBR}`} />
          <span className={styles.frameLabel}>
            Photo — Cabinet haussmannien, fin d'après-midi
          </span>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 3 : Commit**

```bash
git add components/Hero.tsx components/Hero.module.css
git commit -m "feat: composant Hero"
```

---

## Task 5 : Manifesto

**Files:**
- Create: `components/Manifesto.tsx`
- Create: `components/Manifesto.module.css`

- [ ] **Step 1 : Créer Manifesto.module.css**

```css
/* components/Manifesto.module.css */
.section {
  padding: 120px 40px;
  text-align: center;
}

.inner {
  max-width: 680px;
  margin: 0 auto;
}

.hook {
  font-family: var(--serif);
  font-style: italic;
  font-size: clamp(26px, 3.2vw, 40px);
  line-height: 1.2;
  color: var(--navy);
  letter-spacing: -0.015em;
  margin-bottom: 28px;
}

.body {
  font-family: var(--sans);
  font-size: 17px;
  color: var(--navy-70);
  line-height: 1.8;
}

.body strong {
  color: var(--navy);
  font-weight: 500;
}
```

- [ ] **Step 2 : Écrire Manifesto.tsx**

```tsx
// components/Manifesto.tsx
import styles from './Manifesto.module.css'

export default function Manifesto() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.hook} data-animate>
          Vous n'avez pas choisi le métier d'avocat pour passer vos soirées dans Excel.
        </p>
        <p className={styles.body} data-animate>
          Pourtant, les outils qui existent vous y obligent — ou vous découragent de les
          utiliser.
          <br /><br />
          Atlas est né du constat que la gestion d'un cabinet ne devrait pas demander de
          formation, ni de compromis.{' '}
          <strong>Un logiciel qui fait ce qu'il dit, sans bruit</strong>, construit en
          France avec des avocats. La gestion d'abord, solide et fiable. Le reste, quand
          vous en avez besoin.
        </p>
      </div>
    </section>
  )
}
```

- [ ] **Step 3 : Commit**

```bash
git add components/Manifesto.tsx components/Manifesto.module.css
git commit -m "feat: composant Manifesto"
```

---

## Task 6 : Features

**Files:**
- Modify: `components/Features.tsx`
- Create: `components/Features.module.css`

- [ ] **Step 1 : Créer Features.module.css**

```css
/* components/Features.module.css */
.section {
  padding: 120px 40px 0;
}

.header {
  text-align: center;
  margin-bottom: 96px;
}

.block {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
  padding: 72px 0;
  border-top: 0.5px solid var(--navy-12);
}

.block:last-child {
  border-bottom: 0.5px solid var(--navy-12);
}

.blockReverse .text { order: 2; }
.blockReverse .img  { order: 1; }

.num {
  font-family: var(--mono);
  font-size: 10.5px;
  letter-spacing: 0.18em;
  color: var(--bronze);
  margin-bottom: 18px;
  display: block;
}

.title {
  font-family: var(--serif);
  font-style: italic;
  font-size: clamp(38px, 4.5vw, 56px);
  line-height: 1.0;
  color: var(--navy);
  letter-spacing: -0.02em;
  margin-bottom: 20px;
}

.desc {
  font-family: var(--sans);
  font-size: 16.5px;
  color: var(--navy-70);
  line-height: 1.7;
  max-width: 400px;
}

.img {
  aspect-ratio: 4 / 3;
  background: var(--ivory-2);
  border: 1.5px solid var(--bronze);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.img::before {
  content: '';
  position: absolute; inset: 0;
  background: radial-gradient(
    ellipse at 60% 40%,
    rgba(138, 106, 50, 0.07) 0%,
    transparent 60%
  );
}

.img::after {
  content: '';
  position: absolute; inset: 0;
  background-image: radial-gradient(circle, rgba(26, 31, 58, 0.08) 1px, transparent 1px);
  background-size: 24px 24px;
}

.imgLabel {
  font-family: var(--mono);
  font-size: 10.5px;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: var(--navy-40);
  position: relative;
  z-index: 1;
}

@media (max-width: 768px) {
  .block {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .blockReverse .text { order: 1; }
  .blockReverse .img  { order: 2; }
}
```

- [ ] **Step 2 : Écrire Features.tsx**

```tsx
// components/Features.tsx
import styles from './Features.module.css'

const modules = [
  {
    num: '01 — Dossiers',
    title: 'Chaque affaire,\nà portée de main.',
    desc: 'Échéances, parties, documents — tout au même endroit, jamais à chercher.',
    label: 'Screenshot — Dossiers',
    reverse: false,
  },
  {
    num: '02 — Agenda & alertes',
    title: 'Les délais\nne se reportent pas.',
    desc: 'Atlas surveille les délais procéduraux et vous alerte avant qu'il soit trop tard.',
    label: 'Screenshot — Agenda',
    reverse: true,
  },
  {
    num: '03 — Facturation',
    title: 'Factures conformes\nen deux minutes.',
    desc: 'PDF légalement conformes, TVA, acomptes, avoirs. Archivées automatiquement dans le dossier.',
    label: 'Screenshot — Facturation',
    reverse: false,
  },
  {
    num: '04 — Documents',
    title: 'Retrouvables\nen quelques secondes.',
    desc: 'Actes, courriers, pièces — classés par dossier. Plus besoin de nommer des fichiers "version_finale_2_ok_def".',
    label: 'Screenshot — Documents',
    reverse: true,
  },
]

export default function Features() {
  return (
    <section className={styles.section} id="modules">
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">
            <span className="section-label-dot" />
            Les modules
          </span>
        </div>

        {modules.map((mod) => (
          <div
            key={mod.num}
            className={`${styles.block} ${mod.reverse ? styles.blockReverse : ''}`}
          >
            <div className={styles.text} data-animate>
              <span className={styles.num}>{mod.num}</span>
              <h2 className={styles.title}>
                {mod.title.split('\n').map((line, i) => (
                  <span key={i}>{line}{i === 0 && <br />}</span>
                ))}
              </h2>
              <p className={styles.desc}>{mod.desc}</p>
            </div>
            <div className={styles.img} data-animate="fade">
              <span className={styles.imgLabel}>{mod.label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
```

- [ ] **Step 3 : Commit**

```bash
git add components/Features.tsx components/Features.module.css
git commit -m "feat: composant Features — 4 modules alternés"
```

---

## Task 7 : CelestialVault

**Files:**
- Create: `components/CelestialVault.tsx`
- Create: `components/CelestialVault.module.css`

- [ ] **Step 1 : Créer CelestialVault.module.css**

```css
/* components/CelestialVault.module.css */
.section {
  background: var(--navy);
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.glow {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}

.glowTop {
  top: -200px; right: -200px;
  width: 700px; height: 700px;
  background: radial-gradient(circle, rgba(138, 106, 50, 0.10) 0%, transparent 60%);
}

.glowBottom {
  bottom: -200px; left: -200px;
  width: 600px; height: 600px;
  background: radial-gradient(circle, rgba(138, 106, 50, 0.07) 0%, transparent 60%);
}

.svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.inner {
  position: relative;
  z-index: 2;
  padding: 120px 40px;
}

.label {
  font-family: var(--mono);
  font-size: 10.5px;
  text-transform: uppercase;
  letter-spacing: 0.22em;
  color: rgba(138, 106, 50, 0.7);
  margin-bottom: 32px;
  display: block;
}

.quote {
  font-family: var(--serif);
  font-style: italic;
  font-size: clamp(30px, 4vw, 50px);
  color: #F8F7F4;
  line-height: 1.2;
  max-width: 680px;
  letter-spacing: -0.015em;
  margin: 0 auto;
}

.quote em {
  font-style: normal;
  background: linear-gradient(135deg, var(--bronze) 0%, var(--bronze-light) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
```

- [ ] **Step 2 : Écrire CelestialVault.tsx**

```tsx
// components/CelestialVault.tsx
import styles from './CelestialVault.module.css'

export default function CelestialVault() {
  return (
    <section className={styles.section}>
      <div className={`${styles.glow} ${styles.glowTop}`} />
      <div className={`${styles.glow} ${styles.glowBottom}`} />

      <svg
        className={styles.svg}
        viewBox="0 0 1440 540"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        {/* Constellation lines */}
        <line x1="180" y1="100" x2="260" y2="155" stroke="#8A6A32" strokeWidth="0.7" opacity="0.4"/>
        <line x1="260" y1="155" x2="330" y2="120" stroke="#8A6A32" strokeWidth="0.7" opacity="0.4"/>
        <line x1="330" y1="120" x2="390" y2="190" stroke="#8A6A32" strokeWidth="0.7" opacity="0.4"/>
        <line x1="390" y1="190" x2="450" y2="150" stroke="#8A6A32" strokeWidth="0.7" opacity="0.35"/>
        <line x1="560" y1="80"  x2="620" y2="140" stroke="#8A6A32" strokeWidth="0.7" opacity="0.4"/>
        <line x1="620" y1="140" x2="700" y2="100" stroke="#8A6A32" strokeWidth="0.7" opacity="0.4"/>
        <line x1="700" y1="100" x2="760" y2="170" stroke="#8A6A32" strokeWidth="0.7" opacity="0.35"/>
        <line x1="760" y1="170" x2="830" y2="120" stroke="#8A6A32" strokeWidth="0.7" opacity="0.35"/>
        <line x1="960" y1="60"  x2="1030" y2="130" stroke="#8A6A32" strokeWidth="0.7" opacity="0.4"/>
        <line x1="1030" y1="130" x2="1100" y2="85" stroke="#8A6A32" strokeWidth="0.7" opacity="0.4"/>
        <line x1="1100" y1="85" x2="1180" y2="155" stroke="#8A6A32" strokeWidth="0.7" opacity="0.4"/>
        <line x1="1180" y1="155" x2="1260" y2="100" stroke="#8A6A32" strokeWidth="0.7" opacity="0.35"/>
        <line x1="150" y1="380" x2="250" y2="420" stroke="#8A6A32" strokeWidth="0.7" opacity="0.25"/>
        <line x1="250" y1="420" x2="350" y2="390" stroke="#8A6A32" strokeWidth="0.7" opacity="0.25"/>
        <line x1="900" y1="360" x2="980" y2="410" stroke="#8A6A32" strokeWidth="0.7" opacity="0.25"/>
        <line x1="980" y1="410" x2="1060" y2="375" stroke="#8A6A32" strokeWidth="0.7" opacity="0.25"/>
        <line x1="1200" y1="340" x2="1280" y2="395" stroke="#8A6A32" strokeWidth="0.7" opacity="0.25"/>
        <line x1="1280" y1="395" x2="1360" y2="355" stroke="#8A6A32" strokeWidth="0.7" opacity="0.25"/>
        {/* Stars */}
        <circle cx="180" cy="100" r="2" fill="#B08A52" opacity="0.7"/>
        <circle cx="260" cy="155" r="2.5" fill="#B08A52" opacity="0.8"/>
        <circle cx="330" cy="120" r="1.8" fill="#B08A52" opacity="0.65"/>
        <circle cx="390" cy="190" r="1.5" fill="#B08A52" opacity="0.55"/>
        <circle cx="450" cy="150" r="1.2" fill="#B08A52" opacity="0.45"/>
        <circle cx="560" cy="80"  r="2" fill="#B08A52" opacity="0.7"/>
        <circle cx="620" cy="140" r="3" fill="#B08A52" opacity="0.9"/>
        <circle cx="700" cy="100" r="1.8" fill="#B08A52" opacity="0.65"/>
        <circle cx="760" cy="170" r="2.2" fill="#B08A52" opacity="0.7"/>
        <circle cx="830" cy="120" r="1.5" fill="#B08A52" opacity="0.55"/>
        <circle cx="960" cy="60"  r="2" fill="#B08A52" opacity="0.7"/>
        <circle cx="1030" cy="130" r="1.8" fill="#B08A52" opacity="0.65"/>
        <circle cx="1100" cy="85" r="2.5" fill="#B08A52" opacity="0.8"/>
        <circle cx="1180" cy="155" r="2" fill="#B08A52" opacity="0.7"/>
        <circle cx="1260" cy="100" r="1.5" fill="#B08A52" opacity="0.55"/>
        <circle cx="150" cy="380" r="1.2" fill="#B08A52" opacity="0.35"/>
        <circle cx="250" cy="420" r="1.5" fill="#B08A52" opacity="0.4"/>
        <circle cx="350" cy="390" r="1.2" fill="#B08A52" opacity="0.35"/>
        <circle cx="900" cy="360" r="1.5" fill="#B08A52" opacity="0.4"/>
        <circle cx="980" cy="410" r="1.8" fill="#B08A52" opacity="0.45"/>
        <circle cx="1060" cy="375" r="1.2" fill="#B08A52" opacity="0.35"/>
        <circle cx="1200" cy="340" r="1.5" fill="#B08A52" opacity="0.4"/>
        <circle cx="1280" cy="395" r="1.2" fill="#B08A52" opacity="0.35"/>
        <circle cx="1360" cy="355" r="2" fill="#B08A52" opacity="0.45"/>
        {/* Ambient */}
        <circle cx="80"   cy="240" r="1" fill="#8A6A32" opacity="0.25"/>
        <circle cx="480"  cy="300" r="1" fill="#8A6A32" opacity="0.2"/>
        <circle cx="740"  cy="270" r="1" fill="#8A6A32" opacity="0.25"/>
        <circle cx="1140" cy="250" r="1" fill="#8A6A32" opacity="0.2"/>
        <circle cx="1400" cy="200" r="1.2" fill="#8A6A32" opacity="0.3"/>
      </svg>

      <div className={styles.inner}>
        <span className={styles.label}>— iv —</span>
        <blockquote className={styles.quote} data-animate>
          « Chaque dossier est une étoile.
          <br />
          <em>Atlas porte la voûte.</em> »
        </blockquote>
      </div>
    </section>
  )
}
```

- [ ] **Step 3 : Commit**

```bash
git add components/CelestialVault.tsx components/CelestialVault.module.css
git commit -m "feat: composant CelestialVault — section navy + constellations SVG"
```

---

## Task 8 : TrustBand

**Files:**
- Create: `components/TrustBand.tsx`
- Create: `components/TrustBand.module.css`

- [ ] **Step 1 : Créer TrustBand.module.css**

```css
/* components/TrustBand.module.css */
.section {
  padding: 0;
}

.grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  border-top: 0.5px solid var(--navy-12);
  border-bottom: 0.5px solid var(--navy-12);
}

.item {
  padding: 48px 32px;
  border-right: 0.5px solid var(--navy-12);
}

.item:first-child {
  border-left: 0.5px solid var(--navy-12);
}

.tag {
  font-family: var(--mono);
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: var(--bronze);
  margin-bottom: 12px;
  display: block;
}

.text {
  font-family: var(--sans);
  font-size: 13.5px;
  color: var(--navy);
  line-height: 1.55;
}

@media (max-width: 768px) {
  .grid { grid-template-columns: 1fr 1fr; }
  .item { border-left: 0.5px solid var(--navy-12); }
}

@media (max-width: 480px) {
  .grid { grid-template-columns: 1fr; }
}
```

- [ ] **Step 2 : Écrire TrustBand.tsx**

```tsx
// components/TrustBand.tsx
import styles from './TrustBand.module.css'

const signals = [
  {
    tag: 'Hébergement',
    text: 'Serveurs OVHcloud — données qui ne quittent pas le territoire français',
  },
  {
    tag: 'Conformité',
    text: 'RGPD par défaut — pas une case à cocher, une fondation',
  },
  {
    tag: 'Indépendance',
    text: 'Développeur français indépendant, pas un éditeur de logiciel',
  },
  {
    tag: 'Validation',
    text: 'Construit avec des avocats du Barreau de Rouen',
  },
  {
    tag: 'Support',
    text: 'Par email, en français, depuis la France',
  },
]

export default function TrustBand() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {signals.map((s) => (
          <div key={s.tag} className={styles.item} data-animate>
            <span className={styles.tag}>{s.tag}</span>
            <p className={styles.text}>{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
```

- [ ] **Step 3 : Commit**

```bash
git add components/TrustBand.tsx components/TrustBand.module.css
git commit -m "feat: composant TrustBand — 5 signaux de confiance"
```

---

## Task 9 : Pricing

**Files:**
- Create: `components/Pricing.tsx`
- Create: `components/Pricing.module.css`

- [ ] **Step 1 : Créer Pricing.module.css**

```css
/* components/Pricing.module.css */
.section {
  padding: 120px 40px;
  text-align: center;
}

.label {
  margin-bottom: 24px;
}

.title {
  font-family: var(--serif);
  font-style: italic;
  font-size: clamp(40px, 5vw, 64px);
  color: var(--navy);
  letter-spacing: -0.025em;
  margin-bottom: 64px;
}

.card {
  max-width: 540px;
  margin: 0 auto;
  border: 0.5px solid var(--navy-12);
  border-radius: 8px;
  padding: 52px;
  text-align: left;
  background: #FFFFFF;
  box-shadow: 0 4px 6px rgba(26, 31, 58, 0.04),
              0 20px 40px -20px rgba(26, 31, 58, 0.08);
  position: relative;
  overflow: hidden;
}

.card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--bronze) 0%, var(--bronze-light) 50%, var(--bronze) 100%);
}

.prices {
  display: flex;
  gap: 48px;
  padding-bottom: 36px;
  margin-bottom: 36px;
  border-bottom: 0.5px solid var(--navy-12);
}

.priceAmount {
  font-family: var(--serif);
  font-size: 44px;
  color: var(--navy);
  line-height: 1;
  letter-spacing: -0.025em;
}

.pricePeriod {
  font-family: var(--sans);
  font-size: 16px;
  font-weight: 300;
}

.priceLabel {
  font-family: var(--sans);
  font-size: 13px;
  color: var(--navy-70);
  margin-top: 6px;
}

.list {
  list-style: none;
  margin-bottom: 40px;
}

.list li {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  font-family: var(--sans);
  font-size: 14.5px;
  color: var(--navy);
  padding: 11px 0;
  border-bottom: 0.5px solid var(--navy-06);
}

.list li:last-child { border-bottom: none; }

.list li::before {
  content: '—';
  color: var(--bronze);
  flex-shrink: 0;
  font-weight: 300;
  margin-top: 1px;
}

.cta { text-align: center; }

.note {
  font-family: var(--mono);
  font-size: 12.5px;
  color: var(--navy-40);
  letter-spacing: 0.04em;
  margin-top: 18px;
}
```

- [ ] **Step 2 : Écrire Pricing.tsx**

```tsx
// components/Pricing.tsx
import styles from './Pricing.module.css'

const includes = [
  'Les 4 modules : dossiers, agenda, facturation, documents',
  'Alertes automatiques sur les délais procéduraux',
  'Facturation PDF légalement conforme',
  'Hébergement France, sauvegardes incluses',
  'Support email en français',
  'Mises à jour incluses — pas de version "Pro" cachée',
]

export default function Pricing() {
  return (
    <section className={styles.section} id="tarifs">
      <span className={`section-label ${styles.label}`}>
        <span className="section-label-dot" />
        Tarifs
      </span>
      <h2 className={styles.title}>Simple. Tout inclus.</h2>

      <div className={styles.card} data-animate>
        <div className={styles.prices}>
          <div>
            <div className={styles.priceAmount}>
              49 €<span className={styles.pricePeriod}>/mois</span>
            </div>
            <div className={styles.priceLabel}>Avocat solo</div>
          </div>
          <div>
            <div className={styles.priceAmount}>
              99 €<span className={styles.pricePeriod}>/mois</span>
            </div>
            <div className={styles.priceLabel}>Par collaborateur · Cabinet 2–10</div>
          </div>
        </div>

        <ul className={styles.list}>
          {includes.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <div className={styles.cta}>
          <a
            href="#acces"
            className="btn btn-bronze"
            style={{ padding: '13px 32px', fontSize: '15px' }}
          >
            Demander un accès
          </a>
          <p className={styles.note}>
            30 jours d'essai gratuit · Aucune carte bancaire requise
          </p>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 3 : Commit**

```bash
git add components/Pricing.tsx components/Pricing.module.css
git commit -m "feat: composant Pricing"
```

---

## Task 10 : Founder

**Files:**
- Modify: `components/Founder.tsx`
- Create: `components/Founder.module.css`

- [ ] **Step 1 : Créer Founder.module.css**

```css
/* components/Founder.module.css */
.section {
  padding: 120px 40px;
}

.grid {
  display: grid;
  grid-template-columns: 5fr 7fr;
  gap: 80px;
  align-items: start;
  max-width: 1000px;
  margin: 0 auto;
}

.visual {
  aspect-ratio: 1;
  background: var(--ivory-2);
  border: 1.5px solid var(--bronze);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.visual::before {
  content: '';
  position: absolute; inset: 0;
  background-image: radial-gradient(circle, rgba(26, 31, 58, 0.06) 1px, transparent 1px);
  background-size: 20px 20px;
}

.visualLabel {
  font-family: var(--mono);
  font-size: 10.5px;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: var(--navy-40);
  position: relative;
  z-index: 1;
}

.label {
  display: inline-flex;
  margin-bottom: 28px;
}

.intro {
  font-family: var(--sans);
  font-size: 18px;
  color: var(--navy);
  line-height: 1.6;
  margin-bottom: 20px;
}

.body {
  font-family: var(--sans);
  font-size: 16.5px;
  color: var(--navy-70);
  line-height: 1.75;
}

.body p { margin-bottom: 16px; }
.body p:last-child { margin-bottom: 0; }

.sig {
  font-family: var(--serif);
  font-style: italic;
  font-size: 28px;
  color: var(--bronze);
  letter-spacing: -0.01em;
  margin-top: 36px;
  padding-top: 28px;
  border-top: 0.5px solid var(--bronze-20);
}

@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .visual { aspect-ratio: 4 / 3; }
}
```

- [ ] **Step 2 : Écrire Founder.tsx**

```tsx
// components/Founder.tsx
import styles from './Founder.module.css'

export default function Founder() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        <div className={styles.visual} data-animate="fade">
          <span className={styles.visualLabel}>Photo — Plan de travail</span>
        </div>

        <div data-animate>
          <span className={`section-label ${styles.label}`}>
            <span className="section-label-dot" />
            L'artisan derrière Atlas
          </span>
          <p className={styles.intro}>
            Je m'appelle Thomas Viger. Je suis développeur indépendant, pas avocat.
          </p>
          <div className={styles.body}>
            <p>
              J'ai construit Atlas après avoir observé que les outils disponibles étaient
              soit trop chers, soit trop lourds, soit les deux. Avec des avocats du Barreau
              de Rouen, j'ai construit quelque chose que j'aurais voulu trouver si j'avais
              été à leur place : un logiciel qui fait ce qu'on lui demande, sans surprises.
            </p>
            <p>
              Atlas est hébergé en France. Son code est maintenu par une seule personne —
              ce qui oblige à faire simple, et à tenir sur la durée.
            </p>
          </div>
          <div className={styles.sig}>Thomas Viger</div>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 3 : Commit**

```bash
git add components/Founder.tsx components/Founder.module.css
git commit -m "feat: composant Founder"
```

---

## Task 11 : FinalCTA + Footer

**Files:**
- Create: `components/FinalCTA.tsx`
- Create: `components/FinalCTA.module.css`
- Modify: `components/Footer.tsx`
- Create: `components/Footer.module.css`

- [ ] **Step 1 : Créer FinalCTA.module.css**

```css
/* components/FinalCTA.module.css */
.section {
  min-height: 72vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 120px 40px;
  position: relative;
  overflow: hidden;
}

.section::before {
  content: '';
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  width: 900px; height: 900px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(138, 106, 50, 0.06) 0%, transparent 60%);
  pointer-events: none;
}

.inner {
  max-width: 840px;
  position: relative;
}

.title {
  font-family: var(--serif);
  font-style: italic;
  font-size: clamp(44px, 6.5vw, 88px);
  color: var(--navy);
  line-height: 1.0;
  letter-spacing: -0.025em;
  margin-bottom: 52px;
}

.note {
  margin-top: 20px;
  font-family: var(--mono);
  font-size: 12.5px;
  color: var(--navy-40);
  letter-spacing: 0.06em;
}
```

- [ ] **Step 2 : Écrire FinalCTA.tsx**

```tsx
// components/FinalCTA.tsx
import styles from './FinalCTA.module.css'

export default function FinalCTA() {
  return (
    <section className={styles.section} id="acces">
      <div className={styles.inner}>
        <h2 className={styles.title} data-animate>
          Il est temps de porter
          <br />
          votre cabinet{' '}
          <span className="gradient-text">autrement.</span>
        </h2>
        <a
          href="mailto:contact@thomasviger.com"
          className="btn btn-bronze"
          style={{ padding: '14px 36px', fontSize: '15.5px' }}
        >
          Demander un accès
        </a>
        <p className={styles.note}>
          Liste d'attente ouverte · Priorité aux cabinets du Barreau de Rouen pour l'Alpha
        </p>
      </div>
    </section>
  )
}
```

- [ ] **Step 3 : Créer Footer.module.css**

```css
/* components/Footer.module.css */
.footer {
  border-top: 0.5px solid var(--navy-12);
  padding: 36px 40px;
}

.inner {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
}

.logo {
  font-family: var(--serif);
  font-style: italic;
  font-size: 20px;
  color: var(--navy);
}

.links {
  display: flex;
  gap: 28px;
  flex-wrap: wrap;
}

.links a {
  font-family: var(--sans);
  font-size: 13px;
  color: var(--navy-40);
  text-decoration: none;
  transition: color 0.2s;
}

.links a:hover { color: var(--navy); }

.sig {
  font-family: var(--serif);
  font-style: italic;
  font-size: 14px;
  color: var(--bronze);
  opacity: 0.7;
}
```

- [ ] **Step 4 : Écrire Footer.tsx**

```tsx
// components/Footer.tsx
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span className={styles.logo}>Atlas</span>
        <nav className={styles.links}>
          <a href="#modules">Produit</a>
          <a href="/mentions-legales">Mentions légales</a>
          <a href="/confidentialite">Politique de confidentialité</a>
          <a href="mailto:contact@thomasviger.com">Contact</a>
        </nav>
        <span className={styles.sig}>Atlas, fait en France en MMXXVI</span>
      </div>
    </footer>
  )
}
```

- [ ] **Step 5 : Commit**

```bash
git add components/FinalCTA.tsx components/FinalCTA.module.css components/Footer.tsx components/Footer.module.css
git commit -m "feat: composants FinalCTA + Footer"
```

---

## Task 12 : page.tsx — assemblage

**Files:**
- Modify: `app/page.tsx`

- [ ] **Step 1 : Écrire page.tsx**

```tsx
// app/page.tsx
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Manifesto from '@/components/Manifesto'
import Features from '@/components/Features'
import CelestialVault from '@/components/CelestialVault'
import TrustBand from '@/components/TrustBand'
import Pricing from '@/components/Pricing'
import Founder from '@/components/Founder'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'
import SmoothScroll from '@/components/SmoothScroll'
import ScrollAnimations from '@/components/ScrollAnimations'

export default function Home() {
  return (
    <SmoothScroll>
      <ScrollAnimations />
      <Navbar />
      <main>
        <Hero />
        <div className="section-divider" />
        <Manifesto />
        <div className="section-divider" />
        <Features />
        <CelestialVault />
        <TrustBand />
        <div className="section-divider" />
        <Pricing />
        <div className="section-divider" />
        <Founder />
        <div className="section-divider" />
        <FinalCTA />
      </main>
      <Footer />
    </SmoothScroll>
  )
}
```

- [ ] **Step 2 : Commit**

```bash
git add app/page.tsx
git commit -m "feat: assemblage page.tsx"
```

---

## Task 13 : SmoothScroll (Lenis)

**Files:**
- Create: `components/SmoothScroll.tsx`

- [ ] **Step 1 : Écrire SmoothScroll.tsx**

```tsx
// components/SmoothScroll.tsx
'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 1.5,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    const rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}
```

- [ ] **Step 2 : Vérifier le smooth scroll en dev**

```bash
npm run dev
```

Ouvrir `http://localhost:3000` et scroller. Le scroll doit être lissé. Si erreur TypeScript sur `Lenis`, ajouter `// @ts-expect-error` ou vérifier que la version de lenis inclut ses propres types (`package.json` de lenis doit avoir `types`).

- [ ] **Step 3 : Commit**

```bash
git add components/SmoothScroll.tsx
git commit -m "feat: Lenis smooth scroll"
```

---

## Task 14 : ScrollAnimations (GSAP)

**Files:**
- Create: `components/ScrollAnimations.tsx`

- [ ] **Step 1 : Écrire ScrollAnimations.tsx**

```tsx
// components/ScrollAnimations.tsx
'use client'

import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ScrollAnimations() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = gsap.context(() => {
      // Éléments avec translateY (fade-up)
      gsap.utils.toArray<HTMLElement>('[data-animate]:not([data-animate="fade"])').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              toggleActions: 'play none none none',
            },
          }
        )
      })

      // Éléments avec fade uniquement (pas de translateY)
      gsap.utils.toArray<HTMLElement>('[data-animate="fade"]').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.9,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 90%',
              toggleActions: 'play none none none',
            },
          }
        )
      })

      // Stagger sur les feature blocks
      gsap.utils.toArray<HTMLElement>('.feature-stagger').forEach((container) => {
        const children = container.querySelectorAll('[data-animate]')
        gsap.fromTo(
          children,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'expo.out',
            stagger: 0.12,
            scrollTrigger: {
              trigger: container,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        )
      })
    })

    return () => ctx.revert()
  }, [])

  return null
}
```

- [ ] **Step 2 : Vérifier les animations en dev**

```bash
npm run dev
```

Ouvrir `http://localhost:3000`. Scroller lentement. Vérifier que :
- Les titres hero font un fade-up à l'arrivée dans le viewport
- La photo hero fait un fade (sans translateY)
- Les blocs features se révèlent en scrollant
- La citation CelestialVault se révèle
- La carte Pricing se révèle

Si GSAP logue des warnings sur SSR, c'est normal — `'use client'` + `useEffect` s'exécutent uniquement côté browser.

- [ ] **Step 3 : Commit**

```bash
git add components/ScrollAnimations.tsx
git commit -m "feat: GSAP ScrollTrigger — scroll animations"
```

---

## Task 15 : Build final + vérification

- [ ] **Step 1 : Build de production**

```bash
npm run build
```

Résultat attendu : `✓ Compiled successfully`. Zéro erreur TypeScript. Des warnings sur les images manquantes (alt text) sont acceptables.

- [ ] **Step 2 : Vérifier le build**

```bash
npm run start
```

Ouvrir `http://localhost:3000`. Vérifier :
- [ ] Navbar fixe, fond semi-transparent au scroll
- [ ] Hero : eyebrow avec dot pulsant, titre Cormorant italic massif, CTA bronze, cadre photo avec corners
- [ ] Gradient bronze sur "cabinet" dans le hero et "autrement" dans le CTA final
- [ ] Manifesto : texte centré, accroche Cormorant italic
- [ ] Features : 4 modules, alternance gauche/droite, numéros bronze, séparateurs fins
- [ ] CelestialVault : fond navy, SVG constellations, citation avec gradient sur "Atlas porte la voûte"
- [ ] TrustBand : 5 colonnes avec bordures
- [ ] Pricing : carte blanche avec ligne bronze en haut
- [ ] Founder : grille 2 colonnes, signature bronze
- [ ] FinalCTA : titre massif, gradient sur "autrement"
- [ ] Footer : logo · liens · signature bronze
- [ ] Scroll fluide Lenis
- [ ] Animations GSAP scroll-triggered

- [ ] **Step 3 : Commit final**

```bash
git add -A
git commit -m "feat: landing page Atlas v3 — refonte complète cabinet premium"
```
