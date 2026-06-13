// components/TrustBand.tsx
import styles from './TrustBand.module.css'

const signals = [
  {
    tag: 'Hébergement',
    text: 'Hébergé en France.',
  },
  {
    tag: 'Conformité',
    text: 'Respecte le RGPD.',
  },
  {
    tag: 'Validation',
    text: 'Construit avec des avocats du Barreau de Rouen',
  },
]

export default function TrustBand() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {signals.map((s) => (
          <div key={s.tag} className={styles.item} data-animate>
            <span className={styles.tag}>{s.tag}</span>
            <p className={styles.text}>{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
