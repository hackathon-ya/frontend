import Modal from '../../components/Modals/Modal';
import styles from './ActiveVacansies.module.scss';
import ButtonIcon from '../../components/ButtonIcon/ButtonIcon';
import Vacancy from '../../components/Vacancy/Vacancy';
import strelkaUP from '../../assets/images/strelka_up.svg';
import {
  handleOpenForm,
  handleOpenModal,
  handleOpenEditForm,
} from '../../store/vacancies/vacanciesSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Button } from '@mui/material';

const ActiveVacancies = () => {
  const [open, setOpen] = useState(true);
  const dispatch = useDispatch();
  const onClick = () => {
    setOpen(!open);
  };

  return (
    <div>
      <div className={styles.headerWrapper}>
        <h3 className={styles.header__block}>Активные вакансии</h3>
        <Button
          type='button'
          variant='outlined'
          className={styles.header__button}
          onClick={() => dispatch(handleOpenForm())}
        >
          + Создать новую
        </Button>
      </div>
      {open ? (
        <>
          <div className={styles.card} id='card'>
            <div className={styles.vacancie}>
              <div className={styles.vacancieWrapper}>
                <h3 className={styles.vacancy}>Интернет-маркетолог</h3>
                <h4 className={styles.pay}>80 000 - 120 000 ₽</h4>
                <p className={styles.company}>ООО название компании</p>
                <p className={styles.sity}>Москва</p>
                <p className={styles.experience}>Опыт от 1 года до 3 лет</p>
              </div>
              <div>
                <ButtonIcon
                  type='button'
                  className={styles.edit}
                  openModal={() => dispatch(handleOpenEditForm())}
                />

                <ButtonIcon
                  type='button'
                  className={styles.close}
                  openModal={() => dispatch(handleOpenModal())}
                />
              </div>
            </div>
            <div className={styles.buttonWrapper}>
              <div>
                <Link to='/'>
                  <Button
                    type='button'
                    variant='contained'
                    className={styles.button_contained}
                  >
                    Показать 420 кандидатов
                  </Button>
                </Link>
                <Button
                  type='button'
                  variant='outlined'
                  className={styles.button_outlined}
                >
                  +5 новых откликов
                </Button>
              </div>
              <Button
                type='button'
                variant='outlined'
                className={styles.button_outlined}
              >
                Закрыть вакансию
              </Button>
            </div>
            <button
              className={styles.close__info}
              type='button'
              onClick={onClick}
            >
              <img className={styles.close_image} src={strelkaUP} />
            </button>
            <Modal
              title={'Удалить вакансию?'}
              subtitle={'Вы действительно хотите удалить вакансию?'}
            />
          </div>
        </>
      ) : (
        <Vacancy onClick={onClick} />
      )}
    </div>
  );
};

export default ActiveVacancies;
