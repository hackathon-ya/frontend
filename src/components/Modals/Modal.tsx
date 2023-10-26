import { useDispatch, useSelector } from "react-redux";
import { handleCloseModal } from "../../store/vacancies/vacanciesSlice";
import ButtonMUI from "../ButtonMUI/ButtonMUI";
import styles from "./Modal.module.scss";
import { createPortal } from "react-dom";
import { vacanciesSelectors } from "../../store/vacancies/vacanciesSelectors";

interface ModalProps {
  title: string;
  subtitle: string;
}
function Modal({ title, subtitle }: ModalProps) {
  const show = useSelector(vacanciesSelectors.getShow)
  const dispatch = useDispatch();
  if (!show) return null;
  return (
    <>
      {createPortal(
        <section className={styles.modal}>
          <div className={styles.overlay}> </div>
          <div className={styles.container}>
            <button
              className={styles.close}
              type="button"
              onClick={() => dispatch(handleCloseModal())}
            ></button>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.subtitle}>{subtitle}</p>
            <div className={styles.wrapperButton}>
              <ButtonMUI variant={"outlined"} text={"Отменить"} />
              <ButtonMUI variant={"contained"} text={"Сохранить"} />
            </div>
          </div>
        </section>,
        document.getElementById("root")!
      )}
    </>
  );
}

export default Modal;
