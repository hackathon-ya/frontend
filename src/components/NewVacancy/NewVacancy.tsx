import { Link } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import back from '../../assets/images/arrow_left.svg';
import styles from './NewVacancy.module.scss';
import InputMUI from '../InputMUI/InputMUI';
import InputSelectMUI from '../InputSelectMUI/InputSelectMUI';
import InputMultilineMUI from '../InputMultilineMUI/InputMultilineMUI.tsx';
import constants from '../../constants/constants.ts';
import { useDispatch, useSelector } from 'react-redux';
import {
  handleActive,
  handleOpenModal,
} from '../../store/vacancies/vacanciesSlice';
import { vacanciesSelectors } from '../../store/vacancies/vacanciesSelectors';
import Modal from '../Modals/Modal.tsx';
import { Button } from '@mui/material';
import { useState } from 'react';

interface Vacancy {
  job_title: string;
  company_name: string;
  city: string;
  min_salary: number;
  max_salary: number;
  skills: Array<string> | string;
  description: string;
  experience: string;
  form_of_employment: string;
  work_arrangement: string;
  inputValue: string;
  formData: object;
}

const NewVacancy = ({ text }: { text: string }) => {
  const { handleSubmit, control, getValues, reset, setValue } =
    useForm<Vacancy>({
      defaultValues: {
        city: 'Москва',
        form_of_employment: 'Полная',
        experience: 'Полная',
        work_arrangement: 'Не важен',
      },
    });

  const dispatch = useDispatch<any>();

  const view = useSelector(vacanciesSelectors.getView);
  const [skills, setSkills] = useState<string[]>([]);
  
  const handleAdd = () => {
    const formData = getValues('skills') as string;
    if (formData) {
      setSkills([...skills, formData]);
      reset();
    }
  };

  const onSubmit = () => {
    const skillsValue = getValues('skills') as string;
    if (skillsValue === undefined) {
      setSkills([...skills]);
      setValue('skills', skills)
    }
    // const formData = getValues(); вывод данных
  };

  return (
    <section className={styles.addVacancy}>
      <Link to="/vacancies/active" onClick={() => dispatch(handleActive())}>
        <button className={styles.addVacancy__button_back}>
          <img className={styles.addVacancy__image} src={back} />
          <p className={styles.addVacancy__link}>Назад</p>
        </button>
      </Link>
      <form
        className={styles.addVacancy__form}
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className={styles.addVacancy__title}>{text}</h2>
        <h3 className={styles.addVacancy__subtitle}>Информация о вакансии</h3>
        <div className={styles.addVacancy__inputs}>
          <h4 className={styles.addVacancy__input_title}>Название вакансии</h4>
          <Controller
            render={({ field: { onChange } }) => (
              <InputMUI
                variant="outlined"
                id="input-vacancy-name"
                className="addVacancy__input"
                onChange={onChange}
              />
            )}
            control={control}
            name="job_title"
          />
        </div>
        <div className={styles.addVacancy__inputs}>
          <h4 className={styles.addVacancy__input_title}>Компания</h4>
          <Controller
            render={({ field: { onChange } }) => (
              <InputMUI
                variant="outlined"
                id="input-vacancy-name"
                className="addVacancy__input"
                onChange={onChange}
              />
            )}
            control={control}
            name="company_name"
          />
        </div>
        <div className={styles.addVacancy__inputs}>
          <h4 className={styles.addVacancy__input_title}>Город</h4>
          <Controller
            render={({ field: { onChange } }) => (
              <InputSelectMUI
                id="input-vacancy-name"
                className="addVacancy__input_select"
                currencies={constants.City}
                defaultValue="Москва"
                onChange={onChange}
              />
            )}
            control={control}
            name="city"
          />
        </div>
        <div className={styles.addVacancy__inputs}>
          <h4 className={styles.addVacancy__input_title}>Зарплата</h4>
          <div className={styles.addVacancy__input_moneys}>
            <Controller
              render={({ field: { onChange } }) => (
                <InputMUI
                  variant="outlined"
                  id="input-vacancy-cash-from"
                  className="addVacancy__input_money"
                  placeholder="От"
                  onChange={onChange}
                />
              )}
              control={control}
              name="min_salary"
            />
            <Controller
              render={({ field: { onChange } }) => (
                <InputMUI
                  variant="outlined"
                  id="input-vacancy-cash-before"
                  className="addVacancy__input_money"
                  placeholder="До"
                  onChange={onChange}
                />
              )}
              control={control}
              name="max_salary"
            />
          </div>
        </div>
        <div className={styles.addVacancy__inputs}>
          <h4 className={styles.addVacancy__input_title}>Ключевые навыки</h4>
          <div className={styles.addVacancy__input_box}>
            <Controller
              render={({ field }) => (
                <InputMUI
                  {...field}
                  variant="outlined"
                  id="input-vacancy-name"
                  className="addVacancy__input_skills"
                  placeholder="Навыки"
                />
              )}
              control={control}
              name="skills"
            />
            <button
              type="button"
              className={styles.addVacancy__image_done}
              onClick={() => {
                handleAdd();
              }}
            />
          </div>
          <div className={styles.addVacancy__skills}>
            {skills.map((skill) => (
              <div key={skill} className={styles.addVacancy__skill}>
                {skill}
                <button className={styles.addVacancy__skill_button}></button>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.addVacancy__inputs}>
          <h4 className={styles.addVacancy__input_title}>Описание вакансии</h4>
          <Controller
            render={({ field: { onChange } }) => (
              <InputMultilineMUI
                id="filled-multiline-static"
                className="addVacancy__input_about"
                onChange={onChange}
              />
            )}
            control={control}
            name="description"
          />
        </div>
        <h3 className={styles.addVacancy__wishes}>Пожелания к соискателю</h3>
        <div className={styles.addVacancy__inputs}>
          <h4 className={styles.addVacancy__input_title}>Опыт работы</h4>
          <Controller
            render={({ field: { onChange } }) => (
              <InputSelectMUI
                id="input-vacancy-expiriens"
                className="addVacancy__input_select"
                currencies={constants.Expiriens}
                defaultValue="Не важен"
                onChange={onChange}
              />
            )}
            control={control}
            name="experience"
          />
        </div>
        <div className={styles.addVacancy__inputs}>
          <h4 className={styles.addVacancy__input_title}>Занятость</h4>
          <Controller
            render={({ field: { onChange } }) => (
              <InputSelectMUI
                id="input-vacancy-busyness"
                className="addVacancy__input_select"
                currencies={constants.Busyness}
                defaultValue="Полная"
                onChange={onChange}
              />
            )}
            control={control}
            name="form_of_employment"
          />
        </div>
        <div className={styles.addVacancy__inputs}>
          <h4 className={styles.addVacancy__input_title}>Формат работы</h4>

          <Controller
            render={({ field: { onChange } }) => (
              <InputSelectMUI
                id="input-vacancy-formatWork"
                className="addVacancy__input_select"
                currencies={constants.FormatWork}
                defaultValue="Не важен"
                onChange={onChange}
              />
            )}
            control={control}
            name="work_arrangement"
          />
        </div>
        <div className={styles.addVacancy__buttons}>
          {view === 'add' && (
            <>
              <Button
                variant="contained"
                type="submit"
                className={styles.button__published}
              >
                Сохранить и опубликовать
              </Button>
              <Button
                variant="outlined"
                type="submit"
                className={styles.button__save}
              >
                Сохранить черновик
              </Button>
            </>
          )}

          {view === 'edit' && (
            <>
              <Button
                variant="contained"
                type="button"
                className={styles.button__published}
                onClick={() => dispatch(handleOpenModal())}
              >
                Сохранить
              </Button>
              <Button
                variant="outlined"
                type="button"
                className={styles.button__save}
              >
                Отменить
              </Button>
            </>
          )}
          <Modal
            title={'Сохранить изменения?'}
            subtitle={'Все изменения будут сохранены'}
          />
        </div>
      </form>
    </section>
  );
};

export default NewVacancy;