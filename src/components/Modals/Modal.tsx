import styles from "./Modal.module.scss";
import { createPortal } from "react-dom";
interface Props {
  show: boolean;
  title: string;
  subtitle: string;
}
function Modal({ show, title, subtitle }: Props) {
  if (!show) return null;
  return (
    <>
      {createPortal(
        <section className={styles.modal}>
          <div className={styles.overlay}> </div>
          <div className={styles.container}>
            <button className={styles.close} type="button"></button>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.subtitle}>{subtitle}</p>
          </div>
        </section>,
        document.getElementById("root")!
      )}
    </>
  );
}

export default Modal;
