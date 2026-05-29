// components/Features.tsx
import styles from './Features.module.css'

const modules = [
  {
    num: '01 — Dossiers & clients',
    title: 'Chaque affaire,\nà portée de main.',
    desc: 'Échéances, parties, clients, documents — au même endroit. La détection des conflits d\'intérêts est intégrée, vérifiée à l\'ouverture du dossier.',
    label: 'Screenshot — Dossiers',
    reverse: false,
  },
  {
    num: '02 — Agenda & alertes',
    title: 'Les délais\nne se reportent pas.',
    desc: 'Atlas surveille les délais procéduraux et vous alerte avant qu\'il soit trop tard.',
    label: 'Screenshot — Agenda',
    reverse: true,
  },
  {
    num: '03 — Facturation',
    title: 'Prête pour la facture\nélectronique 2026.',
    desc: 'Factures conformes, Factur-X, TVA, acomptes, avoirs — archivées dans le dossier. La réforme 2026, déjà intégrée.',
    label: 'Screenshot — Facturation',
    reverse: false,
  },
  {
    num: '04 — Documents',
    title: 'Retrouvables\nen quelques secondes.',
    desc: 'Actes, courriers, pièces — classés par dossier. Plus besoin de nommer des fichiers "version_finale_2_ok_def".',
    label: 'Screenshot — Documents',
    reverse: true,
  },
]

export default function Features() {
  return (
    <section className={styles.section} id="modules">
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">
            <span className="section-label-dot" />
            Les modules
          </span>
        </div>

        {modules.map((mod) => (
          <div
            key={mod.num}
            className={`${styles.block} ${mod.reverse ? styles.blockReverse : ''}`}
          >
            <div className={styles.text} data-animate>
              <span className={styles.num}>{mod.num}</span>
              <h2 className={styles.title}>
                {mod.title.split('\n').map((line, i) => (
                  <span key={i}>{line}{i === 0 && <br />}</span>
                ))}
              </h2>
              <p className={styles.desc}>{mod.desc}</p>
            </div>
            <div className={styles.img} data-animate="fade">
              <span className={styles.imgLabel}>{mod.label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
