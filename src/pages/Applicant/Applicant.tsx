import styles from './Applicant.module.scss';
import Candidates from '../Candidates/Candidates';

const Applicant = () => {
  return (
    <section className={styles.applicant}>
      <Candidates />
    </section>
  );
};

export default Applicant;
