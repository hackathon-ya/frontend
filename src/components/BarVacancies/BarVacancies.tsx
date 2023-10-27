import styles from './BarVacancies.module.scss';
import {
  handleActive,
  handleArchive,
  handleDraft,
} from '../../store/vacancies/vacanciesSlice';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

const BarVacancies = () => {
  const dispatch = useDispatch();
  return (
    <ul className={styles.list}>
      <li className={styles.item} onClick={() => dispatch(handleActive())}>
        <NavLink
          to="/vacancies/active"
          className={({ isActive }) => (isActive ? styles.active : undefined)}
        >
          Активные
        </NavLink>
      </li>
      <li className={styles.item} onClick={() => dispatch(handleArchive())}>
        <NavLink
          to="/vacancies/draft"
          className={({ isActive }) => (isActive ? styles.active : undefined)}
        >
          Черновики
        </NavLink>
      </li>
      <li className={styles.item} onClick={() => dispatch(handleDraft())}>
        <NavLink
          to="/vacancies/archive"
          className={({ isActive }) => (isActive ? styles.active : undefined)}
        >
          Архив
        </NavLink>
      </li>
    </ul>
  );
};

export default BarVacancies;
