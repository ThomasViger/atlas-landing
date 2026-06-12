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
        <h1 className={`${styles.word} ${styles.wordBack}`} data-hero="word">
          Atlas
          <span className="sr-only">
            {' '}
            — Portez votre cabinet. Sans en porter le poids.
          </span>
        </h1>

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
            <span
              className={`${styles.word} ${styles.wordFront}`}
              data-hero="word"
              aria-hidden="true"
            >
              Atlas
            </span>
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
        Portez votre cabinet.{' '}
        <span className="accent">Sans en porter le poids.</span>
      </p>

      <div className={styles.ctaRow} data-hero="fade-up">
        <a href="#acces" className="btn btn-bronze btn-lg">
          Être prévenu à l'ouverture
        </a>
        <span className={styles.ctaNote}>
          Les premiers cabinets à nous rejoindre garderont leur tarif, à vie.
        </span>
      </div>
    </section>
  )
}
