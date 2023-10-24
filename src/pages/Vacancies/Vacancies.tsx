import BarVacancies from "../../components/BarVacancies/BarVacancies";
import styles from "./Vacancies.module.scss";
import ActiveVacancies from "../ActiveVacansies/ActiveVacancies";
import { vacanciesSelectors } from "../../store/vacancies/vacanciesSelectors";
import { useSelector } from "react-redux";
import DraftVacancies from "../DraftComponents/DraftComponents";
import ArchiveVacancies from "../ArchiveVacancies/ArchiveVacancies";
import FormFind from "../../components/FormFind/FormFind";
import ButtonMUI from "../../components/ButtonMUI/ButtonMUI";

const Vacancies = () => {
  const view = useSelector(vacanciesSelectors.getView);
  return (
    <section className={styles.vacancies}>
      <BarVacancies />
      <div className={styles.wrapper}>
        <div className={styles.headerWrapper}>
          <div>
            <h3 className={styles.header}>Активные вакансии</h3>
            <FormFind />
          </div>
          <ButtonMUI variant="outlined" text="+ Создать новую" />
        </div>
        {view === "active" && <ActiveVacancies />}
        {view === "archive" && <ArchiveVacancies />}
        {view === "draft" && <DraftVacancies />}
      </div>
    </section>
  );
};

export default Vacancies;
