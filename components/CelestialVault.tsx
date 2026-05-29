// components/CelestialVault.tsx
import styles from './CelestialVault.module.css'

export default function CelestialVault() {
  return (
    <section className={styles.section}>
      <div className={`${styles.glow} ${styles.glowTop}`} />
      <div className={`${styles.glow} ${styles.glowBottom}`} />

      <svg
        className={styles.svg}
        viewBox="0 0 1440 540"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        {/* Constellation lines */}
        <line x1="180" y1="100" x2="260" y2="155" stroke="#8A6A32" strokeWidth="0.7" opacity="0.4"/>
        <line x1="260" y1="155" x2="330" y2="120" stroke="#8A6A32" strokeWidth="0.7" opacity="0.4"/>
        <line x1="330" y1="120" x2="390" y2="190" stroke="#8A6A32" strokeWidth="0.7" opacity="0.4"/>
        <line x1="390" y1="190" x2="450" y2="150" stroke="#8A6A32" strokeWidth="0.7" opacity="0.35"/>
        <line x1="560" y1="80"  x2="620" y2="140" stroke="#8A6A32" strokeWidth="0.7" opacity="0.4"/>
        <line x1="620" y1="140" x2="700" y2="100" stroke="#8A6A32" strokeWidth="0.7" opacity="0.4"/>
        <line x1="700" y1="100" x2="760" y2="170" stroke="#8A6A32" strokeWidth="0.7" opacity="0.35"/>
        <line x1="760" y1="170" x2="830" y2="120" stroke="#8A6A32" strokeWidth="0.7" opacity="0.35"/>
        <line x1="960" y1="60"  x2="1030" y2="130" stroke="#8A6A32" strokeWidth="0.7" opacity="0.4"/>
        <line x1="1030" y1="130" x2="1100" y2="85" stroke="#8A6A32" strokeWidth="0.7" opacity="0.4"/>
        <line x1="1100" y1="85" x2="1180" y2="155" stroke="#8A6A32" strokeWidth="0.7" opacity="0.4"/>
        <line x1="1180" y1="155" x2="1260" y2="100" stroke="#8A6A32" strokeWidth="0.7" opacity="0.35"/>
        <line x1="150" y1="380" x2="250" y2="420" stroke="#8A6A32" strokeWidth="0.7" opacity="0.25"/>
        <line x1="250" y1="420" x2="350" y2="390" stroke="#8A6A32" strokeWidth="0.7" opacity="0.25"/>
        <line x1="900" y1="360" x2="980" y2="410" stroke="#8A6A32" strokeWidth="0.7" opacity="0.25"/>
        <line x1="980" y1="410" x2="1060" y2="375" stroke="#8A6A32" strokeWidth="0.7" opacity="0.25"/>
        <line x1="1200" y1="340" x2="1280" y2="395" stroke="#8A6A32" strokeWidth="0.7" opacity="0.25"/>
        <line x1="1280" y1="395" x2="1360" y2="355" stroke="#8A6A32" strokeWidth="0.7" opacity="0.25"/>
        {/* Stars */}
        <circle cx="180" cy="100" r="2" fill="#B08A52" opacity="0.7"/>
        <circle cx="260" cy="155" r="2.5" fill="#B08A52" opacity="0.8"/>
        <circle cx="330" cy="120" r="1.8" fill="#B08A52" opacity="0.65"/>
        <circle cx="390" cy="190" r="1.5" fill="#B08A52" opacity="0.55"/>
        <circle cx="450" cy="150" r="1.2" fill="#B08A52" opacity="0.45"/>
        <circle cx="560" cy="80"  r="2" fill="#B08A52" opacity="0.7"/>
        <circle cx="620" cy="140" r="3" fill="#B08A52" opacity="0.9"/>
        <circle cx="700" cy="100" r="1.8" fill="#B08A52" opacity="0.65"/>
        <circle cx="760" cy="170" r="2.2" fill="#B08A52" opacity="0.7"/>
        <circle cx="830" cy="120" r="1.5" fill="#B08A52" opacity="0.55"/>
        <circle cx="960" cy="60"  r="2" fill="#B08A52" opacity="0.7"/>
        <circle cx="1030" cy="130" r="1.8" fill="#B08A52" opacity="0.65"/>
        <circle cx="1100" cy="85" r="2.5" fill="#B08A52" opacity="0.8"/>
        <circle cx="1180" cy="155" r="2" fill="#B08A52" opacity="0.7"/>
        <circle cx="1260" cy="100" r="1.5" fill="#B08A52" opacity="0.55"/>
        <circle cx="150" cy="380" r="1.2" fill="#B08A52" opacity="0.35"/>
        <circle cx="250" cy="420" r="1.5" fill="#B08A52" opacity="0.4"/>
        <circle cx="350" cy="390" r="1.2" fill="#B08A52" opacity="0.35"/>
        <circle cx="900" cy="360" r="1.5" fill="#B08A52" opacity="0.4"/>
        <circle cx="980" cy="410" r="1.8" fill="#B08A52" opacity="0.45"/>
        <circle cx="1060" cy="375" r="1.2" fill="#B08A52" opacity="0.35"/>
        <circle cx="1200" cy="340" r="1.5" fill="#B08A52" opacity="0.4"/>
        <circle cx="1280" cy="395" r="1.2" fill="#B08A52" opacity="0.35"/>
        <circle cx="1360" cy="355" r="2" fill="#B08A52" opacity="0.45"/>
        {/* Ambient */}
        <circle cx="80"   cy="240" r="1" fill="#8A6A32" opacity="0.25"/>
        <circle cx="480"  cy="300" r="1" fill="#8A6A32" opacity="0.2"/>
        <circle cx="740"  cy="270" r="1" fill="#8A6A32" opacity="0.25"/>
        <circle cx="1140" cy="250" r="1" fill="#8A6A32" opacity="0.2"/>
        <circle cx="1400" cy="200" r="1.2" fill="#8A6A32" opacity="0.3"/>
      </svg>

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
