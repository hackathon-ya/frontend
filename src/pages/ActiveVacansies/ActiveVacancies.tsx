import Modal from "../../components/Modals/Modal";
import styles from "./ActiveVacansies.module.scss";
import { useEffect, useState } from "react";
import ButtonIcon from "../../components/ButtonIcon/ButtonIcon";
import ButtonMUI from "../../components/ButtonMUI/ButtonMUI";
import { useDispatch } from "react-redux";
import { getVacancies } from "../../store/vacancies/vacanciesSlice";

const ActiveVacancies = () => {
  const dispatch = useDispatch<any>();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    dispatch(getVacancies());
  }, [dispatch]);

  return (
    <div className={styles.card}>
      <div className={styles.vacancie}>
        <div className={styles.vacancieWrapper}>
          <h3 className={styles.header}>Интернет-маркетолог</h3>
          <h4 className={styles.pay}>80 000 - 120 000 ₽</h4>
          <p className={styles.company}>ООО название компании</p>
          <p className={styles.sity}>Москва</p>
          <p className={styles.experience}>Опыт от 1 года до 3 лет</p>
        </div>
        <div>
          <ButtonIcon type="button" className={styles.edit} />
          <ButtonIcon
            type="button"
            className={styles.close}
            openModal={() => setShowModal(true)}
          />
        </div>
      </div>
      <div className={styles.buttonWrapper}>
        <div>
          <ButtonMUI variant="outlined" text="+5 новых откликов" />
          <ButtonMUI variant="outlined" text="Показать 420 кандидатов" />
        </div>
        <ButtonMUI variant="contained" text="Закрыть вакансию" />
      </div>
      <Modal
        show={showModal}
        title={"Удалить вакансию?"}
        subtitle={"Вы действительно хотите удалить вакансию?"}
        closeModal={() => setShowModal(false)}
      />
    </div>
  );
};

export default ActiveVacancies;
