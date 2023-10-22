import styles from './BarVacancies.module.scss'
import { handleActive } from "../../store/vacancies/vacanciesSlice";

const BarVacancies = () => {
  return (
    <ul className={styles.list}>
      <li>Активные</li>
      <li>Черновики</li>
      <li>Архив</li>
    </ul>
  );
};

export default BarVacancies;
