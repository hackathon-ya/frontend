import CardVacancies from '../CardVacansies/CardVacancies'
import styles from './MainVacancies.module.scss'

const MainVacancies = () => {
  return (
    <section>
      <div className={styles.wrapper}>
        <h3 className={styles.header}>Активные вакансии</h3>
      </div>
      <CardVacancies/>
    </section>
  );
};

export default MainVacancies;
