import styles from "./BarVacancies.module.scss";
import {
  handleActive,
  handleArchive,
  handleDraft,
} from "../../store/vacancies/vacanciesSlice";
import { useDispatch } from "react-redux";

const BarVacancies = () => {
  const dispatch = useDispatch();
  return (
    <ul className={styles.list}>
      <li className={styles.item} onClick={() => dispatch(handleActive())}>Активные</li>
      <li className={styles.item} onClick={() => dispatch(handleArchive())}>Черновики</li>
      <li className={styles.item} onClick={() => dispatch(handleDraft())}>Архив</li>
    </ul>
  );
};

export default BarVacancies;
