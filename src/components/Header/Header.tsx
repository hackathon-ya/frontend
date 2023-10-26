import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import profile from '../../assets/images/profile.svg';
import group from '../../assets/images/group.svg';
import SearchBar from '../SearchBar/SearchBar';
import like from '../../assets/images/Like.svg'
import { handleActive } from '../../store/vacancies/vacanciesSlice';
import { useDispatch } from 'react-redux';

const Header = () => {
  const dispatch = useDispatch();
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li>
            <Link to="/applicant" className={styles.link}>
              Кандидаты
            </Link>
          </li>
          <li>
            <Link to="/vacancies" onClick={() => dispatch(handleActive())}>
              Вакансии
            </Link>
          </li>
          <li>
            <SearchBar />
          </li>
          <div className={styles.iconsWrapper}>
            <li>
              <img src={group} alt="Сообщения" className={styles.img} />
            </li>
            <li>
              <Link to="/applicant/favorites">
                <img src={like} alt="Избранные" className={styles.img} />
              </Link>
            </li>
            <li>
              <div className={styles.profileWrapper}>
                <img src={profile} alt="Профиль" className={styles.img} />
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
