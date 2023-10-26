import styles from "./BarVacancies.module.scss";
import {
  handleActive,
  handleArchive,
  handleDraft,
} from "../../store/vacancies/vacanciesSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const BarVacancies = () => {
  const dispatch = useDispatch();
  return (
    <ul className={styles.list}>
      <li className={styles.item} onClick={() => dispatch(handleActive())}>
        <Link to="/vacancies">Активные</Link>
      </li>
      <li className={styles.item} onClick={() => dispatch(handleArchive())}>
        <Link to="/vacancies/draft">Черновики</Link>
      </li>
      <li className={styles.item} onClick={() => dispatch(handleDraft())}>
        <Link to="/vacancies/archive">Архив</Link>
      </li>
    </ul>
  );
};

export default BarVacancies;
