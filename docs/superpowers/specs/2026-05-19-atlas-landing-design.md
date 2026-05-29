# Atlas Landing — Spec Design v1

**Date :** 2026-05-19
**Branche :** feat/design-v3-compass
**Statut :** Approuvé pour implémentation

---

## Contexte

Refonte complète de la landing page Atlas. L'existant (dark theme, EB Garamond, Inter, amber) est abandonné intégralement. On repart de zéro sur la même base Next.js 15.

**Positionnement** : SaaS de gestion pour avocats solos et cabinets 1–5 collaborateurs. Fait en France. Gestion d'abord, sans usine à gaz.

---

## Direction visuelle

**Direction B — "Cabinet premium"** : ce que Linear a fait avec noir/blanc, on le fait avec ivoire/navy/bronze. Architecture modulaire stricte, beaucoup d'air, typographie bold et éditoriale, depth via textures et radial glows — pas de glassmorphism.

Références : Linear (rigueur), Hermès digital (palette premium), presse éditoriale française (hiérarchie typographique).

---

## Design tokens

```css
--ivory:       #F8F7F4   /* 60% — fond dominant */
--ivory-2:     #F0EDE6   /* surfaces secondaires */
--navy:        #1A1F3A   /* 30% — texte, structure */
--navy-70:     rgba(26,31,58,0.70)
--navy-40:     rgba(26,31,58,0.40)
--navy-12:     rgba(26,31,58,0.12)
--navy-06:     rgba(26,31,58,0.06)
--bronze:      #8A6A32   /* 10% — CTA, accents */
--bronze-light:#B08A52
--bronze-20:   rgba(138,106,50,0.20)
--bronze-08:   rgba(138,106,50,0.08)
```

---

## Typographie

| Usage | Police | Style | Taille |
|---|---|---|---|
| Titres hero, sections, citations | Cormorant | italic | clamp(44px–124px) |
| Corps, labels, CTA, UI | Geist Sans | regular/medium | 13–18px |
| Eyebrows, numéros, metadata | Geist Mono | regular | 10.5–12px |

**Polices chargées via `next/font/google` (Cormorant) et `next/font/local` (Geist — déjà dans Next.js).**

Gradient text bronze (`linear-gradient(135deg, #8A6A32, #B08A52)`) sur les mots-clés des titres hero et CTA final uniquement.

---

## Stack

- Next.js 15 App Router
- CSS custom properties + Tailwind pour la grille uniquement
- GSAP + ScrollTrigger (scroll reveals, stroke-dashoffset constellations)
- Lenis (smooth scroll)
- `prefers-reduced-motion` obligatoire sur toutes les animations
- Formulaire : statique pour l'instant (champ email + bouton, pas de Brevo)
- Images : placeholders `<div>` avec texte, remplacés par assets Midjourney plus tard

---

## Architecture composants

```
app/
  page.tsx           — composition des sections
  layout.tsx         — fonts + metadata
  globals.css        — tokens + base styles
components/
  Navbar.tsx
  Hero.tsx
  Manifesto.tsx
  Features.tsx
  CelestialVault.tsx
  TrustBand.tsx
  Pricing.tsx
  Founder.tsx
  FinalCTA.tsx
  Footer.tsx
```

---

## Sections — spec détaillée

### Navbar
- Position : `fixed`, fond ivoire `rgba(248,247,244,0.90)`, `backdrop-filter: blur(12px)`
- Hauteur : 60px
- Bordure bottom : `0.5px solid navy-12`
- Logo : "Atlas" Cormorant italic 21px navy
- Centre : liens "Produit" et "Tarifs" (Geist Sans 13.5px, navy-70)
- Droite : CTA "Demander un accès" btn-bronze
- Mobile : logo + CTA uniquement

### Hero
- Min-height : 100vh, padding-top 140px
- Fond : ivoire avec deux radial glows (bronze-08 en haut droite, navy-04 en bas gauche)
- Eyebrow : pastille Geist Mono uppercase, bordure bronze-20, fond bronze-08, dot animé (pulse 2.5s)
- Titre : Cormorant italic, clamp(60px, 9vw, 124px), line-height 0.95, gradient text sur "cabinet"
- Sous-titre : Geist Sans 18px, navy-70
- CTA : btn-bronze + note Geist Mono 12px
- Photo : placeholder 21:9, bordure bronze 1.5px, corner accents bronze, radial glow intérieur, dot grid texture
- Reveal au scroll : GSAP fade + translateY, ease-out expo

### Manifesto
- Texte seul, centré, max-width 680px
- Accroche : Cormorant italic clamp(28px, 3.2vw, 40px)
- Corps : Geist Sans 17px, navy-70, line-height 1.8
- Reveal : lignes par ligne, fade + translateY 20px

### Features (4 modules affichés)
- **RGPD retiré de l'affichage** — implicite, pas un argument marketing
- **4 modules visibles** : Dossiers, Agenda & alertes, Facturation, Documents
- Layout : 2 colonnes 1fr/1fr, alternance texte gauche/droite
- Numéro : Geist Mono 10.5px bronze
- Titre module : Cormorant italic clamp(40px, 4.5vw, 58px)
- Description : Geist Sans 16.5px, navy-70
- Screenshot : fond ivory-2, bordure bronze 1.5px, dot grid texture, radial glow
- Séparateurs : navy-12 0.5px entre chaque module

### CelestialVault
- Fond : navy `#1A1F3A`
- SVG constellations : trait bronze 0.7px, étoiles bronze, dessin progressif au scroll (stroke-dashoffset)
- Deux radial glows bronze en coins
- Citation : Cormorant italic clamp(32px, 4vw, 52px), blanc, "Atlas porte la voûte" en gradient bronze
- Transition haut/bas : fondu 80px vers ivoire

### TrustBand
- Grid 5 colonnes, bordures navy-12 entre items
- Tag : Geist Mono 10px bronze uppercase
- Texte : Geist Sans 13.5px navy
- Pas d'icônes — typographie seule

### Pricing
- Titre : Cormorant italic clamp(42px, 5vw, 64px)
- Une seule carte, max-width 540px, fond blanc, bordure navy-12 0.5px
- Accent : ligne bronze 2px en haut de carte (gradient bronze)
- Box-shadow : `0 4px 6px navy-04, 0 20px 40px -20px navy-08`
- Prix en Cormorant 44px
- Liste inclus : tiret bronze, Geist Sans 14.5px
- Note bas : Geist Mono 12.5px

### Founder
- Grid 5fr/7fr, gap 80px
- Photo : placeholder carré, bordure bronze 1.5px, dot grid texture
- Intro : Geist Sans 18px navy (première phrase plus visible)
- Corps : Geist Sans 16.5px navy-70
- Signature : Cormorant italic 28px bronze, bordure top bronze-20

### FinalCTA
- Min-height 72vh, centré
- Radial glow central bronze-06
- Titre : Cormorant italic clamp(44px, 6.5vw, 88px), gradient text sur "autrement"
- CTA bronze, note Geist Mono

### Footer
- Bordure top navy-12 0.5px
- Logo Cormorant italic | liens Geist Sans 13px | signature Cormorant italic bronze
- Minimal — pas de sitemap

---

## Animations

| Élément | Animation | Durée | Easing |
|---|---|---|---|
| Eyebrow dot | pulse scale+opacity | 2.5s infini | ease-in-out |
| Sections au scroll | fade + translateY 28px | 600ms | expo out |
| Features titres | stagger 100ms | 500ms | expo out |
| Constellations SVG | stroke-dashoffset reveal | 1.2s | expo out |
| Boutons hover | translateY -1px + shadow | 250ms | ease |

Toutes désactivées si `prefers-reduced-motion: reduce`.

---

## Contenu

Le texte final sera revu séparément. Les copies actuelles dans la maquette sont des placeholders de travail. **Le RGPD n'apparaît pas comme module visible** — il est implicite dans la promesse produit.

---

## Hors scope

- Formulaire Brevo (statique pour l'instant)
- Photos réelles (Midjourney, à intégrer après)
- Pages internes (mentions légales, politique de confidentialité)
- Analytics (Plausible/Umami — post-lancement)
- Version mobile poussée (responsive de base, optimisation mobile = phase 2)
