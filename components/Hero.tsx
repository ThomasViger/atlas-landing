// components/Hero.tsx
import Image from 'next/image'
import styles from './Hero.module.css'
import HeroIntro from './HeroIntro'

// Chemin de l'image statue détourée (PNG/WebP alpha) dans public/.
// Si remis à null : le hero rend une lueur bronze à la place et
// n'affiche pas le calque de texte avant.
const STATUE_SRC: string | null = '/statue-atlas.webp'

export default function Hero() {
  return (
    <section className={styles.hero} data-hero-root>
      <HeroIntro />

      <div className={styles.stage}>
        <h1 className={styles.srHeading}>
          Atlas — Portez votre cabinet, sans en porter le poids.
        </h1>

        {/* Le mot ATLAS est rendu en SVG <text> : vectoriel, donc net à toute
            taille — l'ancien duplicata clippé en CSS rastérisait le calque avant
            et crénelait les obliques du « A ». Le clip du calque avant est ici un
            <clipPath> SVG (mêmes fractions que l'ancien polygon CSS). */}
        <WordMark className={`${styles.word} ${styles.wordBack}`} />

        {STATUE_SRC ? (
          <>
            <div className={styles.statue} data-hero="statue">
              {/* unoptimized : le WebP alpha est déjà compressé à la main (246 Ko) ;
                  l'optimiseur Next peut renvoyer du JPEG (sans alpha) selon le
                  header Accept, ce qui casserait la transparence. */}
              <Image
                src={STATUE_SRC}
                alt=""
                priority
                unoptimized
                width={1086}
                height={1448}
              />
            </div>
            <WordMark className={`${styles.word} ${styles.wordFront}`} clipped />
          </>
        ) : (
          <div
            className={styles.statueGlow}
            data-hero="statue"
            aria-hidden="true"
          />
        )}
      </div>

      <p className={styles.tagline} data-hero="fade-up">
        Portez votre cabinet,{' '}
        <span className="accent">sans en porter le poids.</span>
      </p>
    </section>
  )
}

// Mot ATLAS vectoriel. `clipped` = calque avant (haut des lettres + colonne du L
// repassent devant la statue), via un <clipPath> en coordonnées objectBoundingBox
// (mêmes fractions que l'ancien polygon CSS : haut 45 %, L entre 41 % et 59 %).
function WordMark({ className, clipped = false }: { className: string; clipped?: boolean }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1240 320"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
      focusable="false"
    >
      {clipped && (
        <defs>
          <clipPath id="atlasFrontClip" clipPathUnits="objectBoundingBox">
            <polygon points="0,0 1,0 1,0.45 0.59,0.45 0.59,1 0.41,1 0.41,0.45 0,0.45" />
          </clipPath>
        </defs>
      )}
      <text
        className={styles.wordText}
        data-hero="word"
        x="620"
        y="258"
        textAnchor="middle"
        fontSize="300"
        clipPath={clipped ? 'url(#atlasFrontClip)' : undefined}
      >
        ATLAS
      </text>
    </svg>
  )
}
