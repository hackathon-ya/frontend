import ButtonMUI from "../ButtonMUI/ButtonMUI";
import styles from "./Modal.module.scss";
import { createPortal } from "react-dom";

interface ModalProps {
  show: boolean;
  title: string;
  subtitle: string;
  closeModal: Function;
}
function Modal({ show, title, subtitle, closeModal }: ModalProps) {
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
              onClick={() => closeModal()}
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
