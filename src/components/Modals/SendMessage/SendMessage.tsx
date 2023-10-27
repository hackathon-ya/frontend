import { useDispatch } from 'react-redux';
import { handleCloseModal } from '../../../store/vacancies/vacanciesSlice';
import styles from '../Modal.module.scss';
import thisStyles from './SendMessage.module.scss';
import { createPortal } from 'react-dom';
import { Button } from '@mui/material';

function SendMessage() {
  const dispatch = useDispatch();
  // if (!show) return null;
  return (
    <>
      {createPortal(
        <section className={styles.modal}>
          <div className={styles.overlay}> </div>
          <div className={thisStyles.container_message}>
            <button
              className={styles.close}
              type="button"
              onClick={() => dispatch(handleCloseModal())}
            ></button>
            <h3 className={thisStyles.title}>Сообщение соискателю</h3>
            <textarea className={thisStyles.area}></textarea>
            <div className={styles.wrapperButton}>
              <Button
                variant="outlined"
                type="button"
                className={styles.modal__cancell}
                onClick={() => dispatch(handleCloseModal())}
                sx={{ mr: '16px', width: '174px' }}
              >
                Отменить
              </Button>
              <Button
                variant="contained"
                className={styles.modal__action}
                sx={{ width: '174px' }}
                type="button"
              >
                Отправить
              </Button>
            </div>
          </div>
        </section>,
        document.getElementById('root')!
      )}
    </>
  );
}

export default SendMessage;
