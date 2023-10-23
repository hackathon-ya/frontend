import BarVacancies from "../../components/BarVacancies/BarVacancies";
import styles from "./Vacancies.module.scss";
import ActiveVacancies from "../ActiveVacansies/ActiveVacancies";
import { vacanciesSelectors } from "../../store/vacancies/vacanciesSelectors";
import { useSelector } from "react-redux";
import DraftVacancies from "../DraftComponents/DraftComponents";
import ArchiveVacancies from "../ArchiveVacancies/ArchiveVacancies";

const Vacancies = () => {
  const view = useSelector(vacanciesSelectors.getView);
  return (
    <section className={styles.vacancies}>
      <BarVacancies />
      <div className={styles.wrapper}>
        <h3 className={styles.header}>Активные вакансии</h3>
        {view === "active" && <ActiveVacancies />}
        {view === "archive" && <ArchiveVacancies />}
        {view === "draft" && <DraftVacancies />}
      </div>
    </section>
  );
};

export default Vacancies;
