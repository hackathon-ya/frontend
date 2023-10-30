import Modal from '../../components/Modals/Modal';
import styles from './ActiveVacansies.module.scss';
import ButtonIcon from '../../components/ButtonIcon/ButtonIcon';
import Vacancy from '../../components/Vacancy/Vacancy';
import strelkaUP from '../../assets/images/strelka_up.svg';
import {
  handleOpenModal,
  handleOpenEditForm,
} from '../../store/vacancies/vacanciesSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

interface ActiveVacanciesProps {
  vacancy: any;
  min_salary: number;
  max_salary: number;
  company_name: string;
  city: any;
  job_title: string;
}

const ActiveVacancies = (vacancy: ActiveVacanciesProps) => {
  const { min_salary, max_salary, company_name, city, job_title } =
    vacancy.vacancy;
  const [open, setOpen] = useState(true);
  const dispatch = useDispatch<any>();
  const onClick = () => {
    setOpen(!open);
  };

  return (
    <div>
      {open ? (
        <>
          <div className={styles.card} id='card'>
            <div className={styles.vacancie}>
              <div className={styles.vacancieWrapper}>
                <h3 className={styles.vacancy}>{job_title}</h3>
                <h4
                  className={styles.pay}
                >{`${min_salary} - ${max_salary}`}</h4>
                <p className={styles.company}>{company_name}</p>
                <p className={styles.sity}>{city.name}</p>
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
                // onClick={() => dispatch(deleteVacancies(vacancy.id))}
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
        <Vacancy onClick={onClick} vacancy={vacancy}/>
      )}
    </div>
  );
};

export default ActiveVacancies;
