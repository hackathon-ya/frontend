import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';
import profile from '../../assets/images/Profile.svg';
import group from '../../assets/images/group.svg';
import SearchBar from '../SearchBar/SearchBar';
import { handleActive } from '../../store/vacancies/vacanciesSlice';
import { useDispatch } from 'react-redux';

const Header = () => {
  const dispatch = useDispatch();
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li>
            <NavLink
              to='/applicant'
              className={({ isActive }) =>
                isActive ? styles.active_rigth : styles.link
              }
            >
              Кандидаты
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/vacancies/active'
              className={({ isActive }) => (isActive ? styles.active : '')}
              onClick={() => dispatch(handleActive())}
            >
              Вакансии
            </NavLink>
          </li>
          <li>
            <SearchBar />
          </li>
          <div className={styles.iconsWrapper}>
            <li>
              <img src={group} alt='Сообщения' className={styles.img} />
            </li>
            <li className={styles.like}>
              <NavLink to='/favorites'>
                <div className={styles.like}></div>
              </NavLink>
            </li>
            <li>
              <div className={styles.profileWrapper}>
                <img src={profile} alt='Профиль' className={styles.img} />
                <p className={styles.text}>Евгения</p>
              </div>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
