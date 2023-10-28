import styles from './Applicant.module.scss';
import Candidates from '../Candidates/Candidates';
import FormFind from '../../components/FormFind/FormFind';
import BarCheckbox from '../../components/BarCheckbox/BarCheckbox';

const Applicant = () => {
  return (
    <section className={styles.applicant}>
      <BarCheckbox />
      <div className={styles.applicant_header}>
        <div className={styles.headerWrapper}>
          <h3 className={styles.header__title}>Найдено 533 кандидата</h3>
          <FormFind />
        </div>
        <Candidates />
      </div>
    </section>
  );
};

export default Applicant;
