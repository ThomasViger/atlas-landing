// components/FinalCTA.tsx
import styles from './FinalCTA.module.css'

export default function FinalCTA() {
  return (
    <section className={styles.section} id="acces" aria-label="Demander un accès">
      <div className={styles.inner}>
        <h2 className={styles.title} data-animate>
          Il est temps de porter
          <br />
          votre cabinet{' '}
          <span className="gradient-text">autrement.</span>
        </h2>
        <a
          href="mailto:contact@thomasviger.com"
          className="btn btn-bronze btn-xl"
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
