import BarVacancies from "../../components/BarVacancies/BarVacancies";
import MainVacancies from "../../components/MainVacancies/MainVacancies";
import styles from './Vacancies.module.scss'
import { vacanciesSelectors } from "../../store/vacancies/vacanciesSelectors";
import { useSelector } from "react-redux/es/hooks/useSelector";
import ArchiveVacancies from "../../components/ArchiveVacancies/ArchiveVacancies";
import DraftVacancies from "../../components/DraftComponents/DraftComponents";
const Vacancies = () => {
  const view = useSelector(vacanciesSelectors.getView);

  return (
    <section className={styles.vacancies}>
      <BarVacancies />
      {view === "active" && <MainVacancies />}
      {view === "archive" && <ArchiveVacancies />}
      {view === "draft" && <DraftVacancies />}
    </section>
  );
};

export default Vacancies;
