// components/Pricing.tsx
import styles from './Pricing.module.css'

const includes = [
  'Les 4 modules : dossiers, agenda, facturation, documents',
  'Alertes automatiques sur les délais procéduraux',
  'Facturation PDF légalement conforme',
  'Hébergement France, sauvegardes incluses',
  'Support email en français',
  'Mises à jour incluses — pas de version "Pro" cachée',
]

export default function Pricing() {
  return (
    <section className={styles.section} id="tarifs">
      <span className={`section-label ${styles.label}`}>
        <span className="section-label-dot" />
        Tarifs
      </span>
      <h2 className={styles.title}>Simple. Tout inclus.</h2>

      <div className={styles.card} data-animate>
        <div className={styles.prices}>
          <div>
            <div className={styles.priceAmount}>
              49 €<span className={styles.pricePeriod}>/mois</span>
            </div>
            <div className={styles.priceLabel}>Avocat solo</div>
          </div>
          <div>
            <div className={styles.priceAmount}>
              99 €<span className={styles.pricePeriod}>/mois</span>
            </div>
            <div className={styles.priceLabel}>Par collaborateur · Cabinet 2–10</div>
          </div>
        </div>

        <ul className={styles.list}>
          {includes.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <div className={styles.cta}>
          <a
            href="#acces"
            className="btn btn-bronze"
            style={{ padding: '13px 32px', fontSize: '15px' }}
          >
            Demander un accès
          </a>
          <p className={styles.note}>
            30 jours d'essai gratuit · Aucune carte bancaire requise
          </p>
        </div>
      </div>
    </section>
  )
}
