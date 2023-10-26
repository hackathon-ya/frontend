import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import like from '../../assets/images/like.svg';
import profile from '../../assets/images/profile.svg';
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
            <Link to="/applicant" className={styles.link}>
              Кандидаты
            </Link>
          </li>
          <li>
            <Link
              to="/vacancies"
              onClick={() => dispatch(handleActive())}
              className={styles.link}
            >
              Вакансии
            </Link>
          </li>
          <li>
            <SearchBar />
          </li>
          <div className={styles.iconsWrapper}>
            <li>
              <Link to="/applicant/favorites">
                <img src={like} alt="Лайк" className={styles.img} />
              </Link>
            </li>
            <li>
              <img src={group} alt="Сообщения" className={styles.img} />
            </li>
            <li>
              <Link to="/">
                <div className={styles.profileWrapper}>
                  <img src={profile} alt="Профиль" className={styles.img} />
                  <p>Евгения</p>
                </div>
              </Link>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
