import FormFind from "../../components/FormFind/FormFind";
import styles from './Favorites.module.scss';

const Favorites = () => {
  return(
    <div className={styles.headerWrapper}>
      <h3 className={styles.header__title}>Избранные резюме</h3>
      <FormFind />
    </div>)
};

export default Favorites;
