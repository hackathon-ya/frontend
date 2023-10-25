import { Link } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import back from '../../assets/images/back-left.svg';
import done from '../../assets/images/check_mini.svg';
import styles from './NewVacancy.module.scss';
import InputMUI from '../InputMUI/InputMUI';
import InputSelectMUI from '../InputSelectMUI/InputSelectMUI';
import InputMultilineMUI from '../InputMultilineMUI/InputMultilineMUI.tsx';
import constants from '../../constants/constants.ts';
import { useDispatch } from 'react-redux';
import { handleActive } from '../../store/vacancies/vacanciesSlice';

interface Vacancy {
  name: string;
  company: string;
  city: string;
  cash: number;
  skills: string;
  textVacancy: string;
  experience: string;
  work: string;
  formatWork: string;
}

const NewVacancy = () => {
  const { handleSubmit } = useForm<Vacancy>();
  const dispatch = useDispatch();

  const onSubmit: SubmitHandler<Vacancy> = (data) => {
    alert(data);
  };

  return (
    <section className={styles.addVacancy}>
      <Link to='/vacancies' onClick={() => dispatch(handleActive())}>
        <button className={styles.addVacancy__button_back}>
          <img className={styles.addVacancy__image} src={back} />
          <p className={styles.addVacancy__link}>Назад</p>
        </button>
      </Link>
      <form
        className={styles.addVacancy__form}
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className={styles.addVacancy__title}>Новая вакансия</h2>
        <h3 className={styles.addVacancy__subtitle}>информация о вакансии</h3>
        <div className={styles.addVacancy__inputs}>
          <h4 className={styles.addVacancy__input_title}>Название вакансии</h4>
          <InputMUI
            variant='outlined'
            id='input-vacancy-name'
            className='addVacancy__input'
            placeholder=''
          />
        </div>
        <div className={styles.addVacancy__inputs}>
          <h4 className={styles.addVacancy__input_title}>Компания</h4>
          <InputMUI
            variant='outlined'
            id='input-vacancy-name'
            className='addVacancy__input'
            placeholder=''
          />
        </div>
        <div className={styles.addVacancy__inputs}>
          <h4 className={styles.addVacancy__input_title}>Город</h4>
          <InputSelectMUI
            id='input-vacancy-name'
            className='addVacancy__input_select'
            currencies={constants.City}
            defaultValue='Москва'
          />
        </div>
        <div className={styles.addVacancy__inputs}>
          <h4 className={styles.addVacancy__input_title}>Зарплата</h4>
          <div className={styles.addVacancy__input_moneys}>
            <InputMUI
              variant='outlined'
              id='input-vacancy-cash-from'
              className='addVacancy__input_money'
              placeholder='От'
            />
            <InputMUI
              variant='outlined'
              id='input-vacancy-cash-before'
              className='addVacancy__input_money'
              placeholder='До'
            />
          </div>
        </div>
        <div className={styles.addVacancy__inputs}>
          <h4 className={styles.addVacancy__input_title}>Ключевые навыки</h4>
          <div className={styles.addVacancy__input_box}>
            <InputMUI
              variant='outlined'
              id='input-vacancy-name'
              className='addVacancy__input_skills'
              placeholder='Навыки'
            />
            <img className={styles.addVacancy__image_done} src={done} />
          </div>
          <div className={styles.addVacancy__skills}>
            <div className={styles.addVacancy__skill}>
              навык 1
              <button className={styles.addVacancy__skill_button}></button>
            </div>
            <div className={styles.addVacancy__skill}>
              навык 1
              <button className={styles.addVacancy__skill_button}></button>
            </div>
            <div className={styles.addVacancy__skill}>
              навык 1
              <button className={styles.addVacancy__skill_button}></button>
            </div>
            <div className={styles.addVacancy__skill}>
              навык 1
              <button className={styles.addVacancy__skill_button}></button>
            </div>
          </div>
        </div>
        <div className={styles.addVacancy__inputs}>
          <h4 className={styles.addVacancy__input_title}>Описание вакансии</h4>
          <InputMultilineMUI
            id='filled-multiline-static'
            className='addVacancy__input_about'
          />
        </div>

        {/*  */}

        <h3 className={styles.addVacancy__wishes}>Пожелания к соискателю</h3>
        <div className={styles.addVacancy__inputs}>
          <h4 className={styles.addVacancy__input_title}>Опыт работы</h4>
          <InputSelectMUI
            id='input-vacancy-expiriens'
            className='addVacancy__input_select'
            currencies={constants.Expiriens}
            defaultValue='Не важен'
          />
        </div>
        <div className={styles.addVacancy__inputs}>
          <h4 className={styles.addVacancy__input_title}>Занятость</h4>
          <InputSelectMUI
            id='input-vacancy-busyness'
            className='addVacancy__input_select'
            currencies={constants.Busyness}
            defaultValue='Полная'
          />
        </div>
        <div className={styles.addVacancy__inputs}>
          <h4 className={styles.addVacancy__input_title}>Формат работы</h4>
          <InputSelectMUI
            id='input-vacancy-formatWork'
            className='addVacancy__input_select'
            currencies={constants.FormatWork}
            defaultValue='Не важен'
          />
        </div>
        <div className={styles.addVacancy__buttons}>
          {/* <ButtonMUI
              variant="outlined"
              text="Сохранить и опубликовать"
              className="vacancy__button_published"
            /> */}
          <button className={styles.addVacancy__button_published}>
            Сохранить и опубликовать
          </button>
          {/* <ButtonMUI
              variant="contained"
              text="Сохранить черновик"
              className="vacancy__button_save"
            /> */}
          <button className={styles.addVacancy__button_save}>
            Сохранить черновик
          </button>
        </div>
      </form>
    </section>
  );
};

export default NewVacancy;
