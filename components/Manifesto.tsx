// components/Manifesto.tsx
import styles from './Manifesto.module.css'

export default function Manifesto() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.hook} data-animate>
          Vous n'avez pas choisi le métier d'avocat pour passer vos soirées dans Excel.
        </p>
        <p className={styles.body} data-animate>
          Pourtant, les outils qui existent vous y obligent — ou vous découragent de les
          utiliser.
          <br /><br />
          Atlas est né du constat que la gestion d'un cabinet ne devrait pas demander de
          formation, ni de compromis.{' '}
          <strong>Un logiciel qui fait ce qu'il dit, sans bruit</strong>, construit en
          France avec des avocats. La gestion d'abord, solide et fiable. Le reste, quand
          vous en avez besoin.
        </p>
      </div>
    </section>
  )
}
