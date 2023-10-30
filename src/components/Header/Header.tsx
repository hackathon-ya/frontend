import { NavLink } from 'react-router-dom';
import React from 'react';
import styles from './Header.module.scss';
import profile from '../../assets/images/Profile.svg';
import group from '../../assets/images/Group.svg';
import SearchBar from '../SearchBar/SearchBar';
import { handleActive } from '../../store/vacancies/vacanciesSlice';
import { useDispatch } from 'react-redux';

const Header = () => {
  const [isFavorite, setisFavorite] = React.useState(false);
  const dispatch = useDispatch();
  const onClick = () => {
    setisFavorite(!isFavorite);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li>
            <NavLink
              to='/'
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
            <li
              className={isFavorite ? styles.like__active : styles.like}
              onClick={onClick}
            >
              <NavLink to='/favorites'>
                {({ isActive }) => (
                  <div
                    className={isActive ? styles.like__active : styles.like}
                  ></div>
                )}
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
