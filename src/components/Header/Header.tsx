import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

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
            <Link to="/profile" className={styles.link}>
              Профиль
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
