import { useDispatch, useSelector } from 'react-redux';
import { handleCloseModal } from '../../store/vacancies/vacanciesSlice';
import styles from './Modal.module.scss';
import { createPortal } from 'react-dom';
import { vacanciesSelectors } from '../../store/vacancies/vacanciesSelectors';
import { Button } from '@mui/material';

interface ModalProps {
  title: string;
  subtitle: string;
}
function Modal({ title, subtitle }: ModalProps) {
  const show = useSelector(vacanciesSelectors.getShow);
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
              <Button
                variant="outlined"
                type="button"
                className={styles.modal__cancell}
                onClick={() => dispatch(handleCloseModal())}
                sx={{mr:'12px'}}
              >
                Отменить
              </Button>
              <Button
                variant="contained"
                className={styles.modal__action}
                type="button"
              >
                Текст
              </Button>
            </div>
          </div>
        </section>,
        document.getElementById('root')!
      )}
    </>
  );
}

export default Modal;
