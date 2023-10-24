import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import like from "../../assets/images/Like.svg";
import profile from "../../assets/images/Profile.svg";
import group from "../../assets/images/Group.svg";
import SearchBar from "../SearchBar/SearchBar";

const Header = () => {
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
            <Link to="/vacancies" className={styles.link}>
              Вакансии
            </Link>
          </li>
          <li>
            <SearchBar />
          </li>
          <div className={styles.iconsWrapper}>
            <li>
              <Link to="/profile">
                <img src={like} alt="Лайк" className={styles.img} />
              </Link>
            </li>
            <li>
              <Link to="/profile">
                <img src={group} alt="Сообщения" className={styles.img} />
              </Link>
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
