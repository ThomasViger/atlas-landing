// components/CelestialVault.tsx
import styles from './CelestialVault.module.css'
import CelestialSky from './CelestialSky'

export default function CelestialVault() {
  return (
    <section className={styles.section}>
      <CelestialSky className={styles.sky} />

      <div className={styles.inner}>
        <span className={styles.label}>— iv —</span>
        <blockquote className={styles.quote} data-animate>
          « Chaque dossier est une étoile.
          <br />
          <em>Atlas porte la voûte.</em> »
        </blockquote>
      </div>
    </section>
  )
}
