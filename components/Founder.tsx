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
