// components/Navbar.tsx
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <span className={styles.logo}>Atlas</span>
        <div className={styles.links}>
          <a href="#modules" className={styles.link}>Produit</a>
          <a href="#tarifs" className={styles.link}>Tarifs</a>
        </div>
        <a href="#acces" className="btn btn-bronze">Demander un accès</a>
      </div>
    </nav>
  )
}
