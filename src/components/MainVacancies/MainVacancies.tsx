import CardVacancies from '../CardVacansies/CardVacancies'
import styles from './MainVacancies.module.scss'

const MainVacancies = () => {
  return (
    <section>
      <div className={styles.wrapper}>
        <h3>Активные</h3>
        <button></button>
      </div>
      <CardVacancies/>
    </section>
  );
};

export default MainVacancies;
