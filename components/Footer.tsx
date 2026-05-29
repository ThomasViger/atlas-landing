// components/Footer.tsx
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span className={styles.logo}>Atlas</span>
        <nav className={styles.links}>
          <a href="#modules">Produit</a>
          <a href="/mentions-legales">Mentions légales</a>
          <a href="/confidentialite">Politique de confidentialité</a>
          <a href="mailto:contact@thomasviger.com">Contact</a>
        </nav>
        <span className={styles.sig}>Atlas, fait en France en MMXXVI</span>
      </div>
    </footer>
  )
}
