// components/Founder.tsx
import styles from './Founder.module.css'

export default function Founder() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        <div className={styles.visual} data-animate="fade">
          <span className={styles.visualLabel} aria-hidden="true">Photo — Plan de travail</span>
        </div>

        <div data-animate>
          <span className={`section-label ${styles.label}`}>
            <span className="section-label-dot" />
            L'artisan derrière Atlas
          </span>
          <p className={styles.intro}>
            Je m'appelle Thomas Viger. Je suis ingénieur recherche et développement, pas avocat.
          </p>
          <div className={styles.body}>
            <p>
              J'ai construit <strong>ATLAS</strong> après avoir observé que les outils
              disponibles étaient soit trop chers, soit trop lourds, soit les deux. Avec une
              avocate, j'ai construit l'outil que j'aurais voulu avoir si j'avais été à sa
              place : un logiciel qui fait ce qu'on lui demande, sans surprises.
            </p>
          </div>
          <div className={styles.sig}>Thomas Viger</div>
        </div>
      </div>
    </section>
  )
}
