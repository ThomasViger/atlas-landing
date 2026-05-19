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
