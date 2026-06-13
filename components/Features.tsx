// components/Features.tsx
import styles from './Features.module.css'

const modules = [
  {
    num: '01 — Dossiers & clients',
    title: 'Chaque affaire,\nà portée de main.',
    desc: 'Échéances, parties, clients, documents — au même endroit.',
    label: 'Screenshot — Dossiers',
    reverse: false,
  },
  {
    num: '02 — Agenda & alertes',
    title: 'Les délais\nne se reportent pas.',
    desc: 'Atlas surveille les délais procéduraux et vous alerte avant qu\'il ne soit trop tard.',
    label: 'Screenshot — Agenda',
    reverse: true,
  },
  {
    num: '03 — Facturation',
    title: 'Facturer,\nsans la paperasse.',
    desc: 'Atlas prépare vos factures, suit les règlements et les classe dans le bon dossier. La facturation électronique 2026 est déjà prête — sans rien changer à vos habitudes.',
    label: 'Screenshot — Facturation',
    reverse: false,
  },
  {
    num: '04 — Documents',
    title: 'Retrouvables\nen quelques secondes.',
    desc: 'Actes, courriers, pièces — rangés par dossier et retrouvés en quelques secondes.',
    label: 'Screenshot — Documents',
    reverse: true,
  },
]

// Rend les occurrences de « Atlas » en gras + majuscules dans la prose.
function renderDesc(text: string) {
  return text.split(/(Atlas)/).map((part, i) =>
    part === 'Atlas' ? <strong key={i}>ATLAS</strong> : part
  )
}

export default function Features() {
  return (
    <section className={styles.section} id="modules">
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">
            <span className="section-label-dot" />
            Les modules
          </span>
          <h2 className={styles.headerTitle} data-animate>
            Quatre modules.
            <br />
            Tout le cabinet.
          </h2>
        </div>

        {modules.map((mod) => (
          <div
            key={mod.num}
            className={`${styles.block} ${mod.reverse ? styles.blockReverse : ''}`}
          >
            <span className={styles.ghost} aria-hidden="true">
              {mod.num.slice(0, 2)}
            </span>
            <div className={styles.text} data-animate>
              <span className={styles.num}>{mod.num}</span>
              <h2 className={styles.title}>
                {mod.title.split('\n').map((line, i) => (
                  <span key={i}>{line}{i === 0 && <br />}</span>
                ))}
              </h2>
              <p className={styles.desc}>{renderDesc(mod.desc)}</p>
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
