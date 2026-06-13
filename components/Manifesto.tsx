// components/Manifesto.tsx
import styles from './Manifesto.module.css'

export default function Manifesto() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.hook} data-animate>
          Vous n'avez pas choisi le métier d'avocat pour passer vos soirées à gérer votre cabinet.
        </p>
        <p className={styles.body} data-animate>
          <strong>ATLAS</strong> allège la gestion de votre cabinet — dossiers, délais,
          facturation au même endroit, sans formation ni compromis.
          <br /><br />
          Facile, rapide et limpide. Un logiciel construit en France avec des avocats, qui
          fait ce qu'il dit. La gestion d'abord, solide et fiable.
        </p>
      </div>
    </section>
  )
}
