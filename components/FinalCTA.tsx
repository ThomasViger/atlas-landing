// components/FinalCTA.tsx
import styles from './FinalCTA.module.css'
import ContactForm from './ContactForm'

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
        <ContactForm />
        <p className={styles.note}>
          Liste d'attente ouverte · Priorité aux cabinets du Barreau de Rouen pour l'Alpha
        </p>
      </div>
    </section>
  )
}
