import FormFind from '../../components/FormFind/FormFind';
import Candidates from '../Candidates/Candidates';
import styles from './Favorites.module.scss';
import BarCheckbox from '../../components/BarCheckbox/BarCheckbox';

const Favorites = () => {
  return (
    <section className={styles.applicant}>
      <BarCheckbox />
      <div className={styles.applicant_header}>
        <div className={styles.headerWrapper}>
          <h3 className={styles.header__title}>Избранные резюме</h3>
          <FormFind />
        </div>
        <Candidates />
      </div>
    </section>
  );
};

export default Favorites;
