import suitcase from '../../assets/images/suitcase.svg';
import Modal from '../../components/Modals/Modal';
import strelkaUP from '../../assets/images/strelka_up.svg';
import styles from './Vacancy.module.scss';
import ButtonIcon from '../../components/ButtonIcon/ButtonIcon';
import {
  // deleteVacancies,
  handleOpenEditForm,
  handleOpenModal,
} from '../../store/vacancies/vacanciesSlice';
import { useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
// import SendMessage from '../Modals/SendMessage/SendMessage';


type VacancyProps = {
  onClick: () => void;
  vacancy: any;
};

const Vacancy = ({ onClick, vacancy }: VacancyProps) => {
  const dispatch = useDispatch<any>();

  return (
    <section className={styles.vacancy}>
      <div className={styles.vacancy__header}>
        <div className={styles.vacancy__box}>
          <div className={styles.vacancy__header_promo}>
            <h3 className={styles.vacancy__header_title}>
              {vacancy.job_title}
            </h3>
            <h4 className={styles.vacancy__header_subtitle}>
              {`${vacancy.min_salary} - ${vacancy.max_salary}`}
            </h4>
          </div>
          <div className={styles.vacancy__header_icons}>
            <ButtonIcon
              type="button"
              className={styles.vacancy__header_icon_edit}
              openModal={() => dispatch(handleOpenEditForm())}
            />
            <ButtonIcon
              type="button"
              className={styles.vacancy__header_icon_delete}
              openModal={() => dispatch(handleOpenModal())}
            />
          </div>
        </div>
        <p className={styles.vacancy__header_text}>{vacancy.company_name}</p>
        <p className={styles.vacancy__header_text}>{vacancy.sity}</p>
        <div className={styles.vacancy__header_expiriencs}>
          <img src={suitcase} className={styles.vacancy__header_icon} alt="" />
          <p className={styles.vacancy__header_text}>Опыт о 1 года до 3 лет</p>
        </div>

        <span className={styles.vacancy__border}></span>

        <div className={styles.vacancy__info}>
          <div className={styles.vacancy__info_box}>
            <h4 className={styles.vacancy__info_title}>Описание вакансии</h4>
            <h4 className={styles.vacancy__list}>
              <p>{vacancy.description}</p>
            </h4>
            <h4 className={styles.vacancy__info_title}>Ключевые навыки</h4>
            <div className={styles.vacancy__info_skills}>
              {vacancy.skills.map((skill: string) => (
                <p className={styles.vacancy__info_skill} key={skill}>{skill}</p>
              ))}
            </div>
            <h4 className={styles.vacancy__info_title}>
              Дополнительная информация
            </h4>
            <p className={styles.vacancy__info_text}>
              Будем рады видеть вас в нашей команде!
            </p>
          </div>
        </div>

        <div className={styles.vacancy__header_buttons}>
          <div>
            <Link to="/">
              <Button
                type="button"
                variant="contained"
                className={styles.button_contained}
              >
                Показать 420 кандидатов
              </Button>
            </Link>
            <Button
              type="button"
              variant="outlined"
              className={styles.button_outlined}
            >
              +5 новых откликов
            </Button>
          </div>
          <Button
            type="button"
            variant="outlined"
            className={styles.button_outlined}
            // onClick={() => dispatch(deleteVacancies(vacancy.id))}
          >
            Закрыть вакансию
          </Button>
        </div>
        <button
          className={styles.vacancy__close}
          type="button"
          onClick={onClick}
        >
          <img className={styles.vacancy__close_image} src={strelkaUP} />
        </button>
        <Modal
          title={'Удалить вакансию?'}
          subtitle={'Вы действительно хотите удалить вакансию?'}
        />
      </div>
    </section>
  );
};

export default Vacancy;
