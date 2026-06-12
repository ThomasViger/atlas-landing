// components/Hero.tsx
import Image from 'next/image'
import styles from './Hero.module.css'
import HeroIntro from './HeroIntro'

// Chemin de l'image statue détourée (PNG/WebP alpha) dans public/.
// Tant que l'image n'est pas livrée, laisser à null : le hero rend une
// lueur bronze à la place et n'affiche pas le calque de texte avant.
const STATUE_SRC: string | null = null

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
              <Image
                src={STATUE_SRC}
                alt=""
                priority
                width={1024}
                height={1280}
                sizes="(max-width: 640px) 80vw, (max-width: 1280px) 50vw, 640px"
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

      <p className={styles.sub} data-hero="fade-up">
        Le logiciel de gestion fait en France, pour l'avocat seul comme pour les
        cabinets de 1 à 5.
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
