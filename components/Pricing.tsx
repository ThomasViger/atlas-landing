// components/Pricing.tsx
import styles from './Pricing.module.css'

const includes = [
  'Tous les modules : dossiers, clients, agenda, facturation, documents, temps',
  'Détection des conflits d\'intérêts',
  'Facturation électronique 2026 (Factur-X)',
  'Alertes automatiques sur les délais procéduraux',
  'Hébergement France, base isolée par cabinet',
  'Aucune version « Pro » cachée, aucun module à débloquer',
]

export default function Pricing() {
  return (
    <section className={styles.section} id="tarifs">
      <span className={`section-label ${styles.label}`}>
        <span className="section-label-dot" />
        L'engagement
      </span>
      <h2 className={styles.title}>Un seul prix. Tout sera dedans.</h2>

      <div className={styles.card} data-animate>
        <p className={styles.lede}>
          Atlas n'aura pas de paliers à déchiffrer, pas de fonction réservée à une offre
          supérieure. Un prix, clair, pour l'avocat seul. C'est tout.
        </p>

        <ul className={styles.list}>
          {includes.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <div className={styles.cta}>
          <a
            href="#acces"
            className="btn btn-bronze btn-lg"
          >
            Être prévenu à l'ouverture
          </a>
          <p className={styles.note}>
            Atlas est jeune. Les premiers cabinets à nous rejoindre garderont leur tarif, à vie.
          </p>
        </div>
      </div>
    </section>
  )
}
