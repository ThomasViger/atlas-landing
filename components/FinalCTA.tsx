// components/FinalCTA.tsx
import styles from './FinalCTA.module.css'

export default function FinalCTA() {
  return (
    <section className={styles.section} id="acces" aria-label="Être prévenu à l'ouverture">
      <div className={styles.inner}>
        <h2 className={styles.title} data-animate>
          Il est temps de porter
          <br />
          votre cabinet{' '}
          <span className="accent">autrement.</span>
        </h2>
        <a
          href="mailto:contact@thomasviger.com?subject=Liste%20d'attente%20Atlas"
          className="btn btn-bronze btn-xl"
        >
          Être prévenu à l'ouverture
        </a>
        <p className={styles.note}>
          Liste d'attente ouverte · Priorité aux cabinets du Barreau de Rouen pour l'Alpha
        </p>
      </div>
    </section>
  )
}
