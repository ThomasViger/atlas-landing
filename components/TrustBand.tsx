// components/TrustBand.tsx
import styles from './TrustBand.module.css'

const signals = [
  {
    tag: 'Hébergement',
    text: 'Serveurs OVHcloud — données qui ne quittent pas le territoire français',
  },
  {
    tag: 'Conformité',
    text: 'RGPD par défaut — pas une case à cocher, une fondation',
  },
  {
    tag: 'Indépendance',
    text: 'Développeur français indépendant, pas un éditeur de logiciel',
  },
  {
    tag: 'Validation',
    text: 'Construit avec des avocats du Barreau de Rouen',
  },
  {
    tag: 'Support',
    text: 'Par email, en français, depuis la France',
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
