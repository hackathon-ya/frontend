import BarVacancies from '../../components/BarVacancies/BarVacancies';
import styles from '../DraftVacancies/DraftVacancies.module.scss';
const ArchiveVacancies = () => {
  return(
    <section className={styles.vacancies}>
      <BarVacancies />
      <div className={styles.wrapper}>
      </div>
    </section>
  );
};

export default ArchiveVacancies;
