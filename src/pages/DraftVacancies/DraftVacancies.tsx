import BarVacancies from '../../components/BarVacancies/BarVacancies';
import styles from './DraftVacancies.module.scss';
const DraftVacancies = () => {
  return(
    <section className={styles.vacancies}>
      <BarVacancies />
      <div className={styles.wrapper}>
      </div>
    </section>
  );
};

export default DraftVacancies;
