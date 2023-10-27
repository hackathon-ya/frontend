import { useDispatch } from 'react-redux';
import { handleCloseModal } from '../../../store/vacancies/vacanciesSlice';
import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import styles from '../Modal.module.scss';
import thisStyles from './SendMessage.module.scss';
import { createPortal } from 'react-dom';
import { Button } from '@mui/material';

interface Message {
  text: string;
}
function SendMessage() {
  const { handleSubmit, control } = useForm<Message>();
  const dispatch = useDispatch();
  // if (!show) return null;
  const onSubmit: SubmitHandler<Message> = (data) => {
    console.log(data);
  };
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
            <form onSubmit={handleSubmit(onSubmit)}>
              <Controller
                render={({ field: { onChange } }) => (
                  <textarea
                    className={thisStyles.area}
                    onChange={onChange}
                  ></textarea>
                )}
                control={control}
                name="text"
              />

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
                  type="submit"
                >
                  Отправить
                </Button>
              </div>
            </form>
          </div>
        </section>,
        document.getElementById('root')!
      )}
    </>
  );
}

export default SendMessage;
