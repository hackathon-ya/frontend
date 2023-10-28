import suitcase from '../../assets/images/suitcase.svg';
import Modal from '../../components/Modals/Modal';
import strelkaUP from '../../assets/images/strelka_up.svg';
import styles from './Vacancy.module.scss';
import ButtonIcon from '../../components/ButtonIcon/ButtonIcon';
import {
  handleOpenEditForm,
  handleOpenModal,
} from '../../store/vacancies/vacanciesSlice';
import { useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
// import SendMessage from '../Modals/SendMessage/SendMessage';

type VacancyProps = {
  onClick: () => void;
};

const Vacancy = (props: VacancyProps) => {
  const { onClick } = props;
  const dispatch = useDispatch();

  return (
    <section className={styles.vacancy}>
      <div className={styles.vacancy__header}>
        <div className={styles.vacancy__box}>
          <div className={styles.vacancy__header_promo}>
            <h3 className={styles.vacancy__header_title}>
              Интернет-маркетолог
            </h3>
            <h4 className={styles.vacancy__header_subtitle}>
              80 000 - 120 000 ₽
            </h4>
          </div>
          <div className={styles.vacancy__header_icons}>
            <ButtonIcon
              type='button'
              className={styles.vacancy__header_icon_edit}
              openModal={() => dispatch(handleOpenEditForm())}
            />
            <ButtonIcon
              type='button'
              className={styles.vacancy__header_icon_delete}
              openModal={() => dispatch(handleOpenModal())}
            />
          </div>
        </div>
        <p className={styles.vacancy__header_text}>ООО название компании</p>
        <p className={styles.vacancy__header_text}>Москва</p>
        <div className={styles.vacancy__header_expiriencs}>
          <img src={suitcase} className={styles.vacancy__header_icon} alt='' />
          <p className={styles.vacancy__header_text}>Опыт о 1 года до 3 лет</p>
        </div>

        <span className={styles.vacancy__border}></span>

        <div className={styles.vacancy__info}>
          <div className={styles.vacancy__info_box}>
            <h4 className={styles.vacancy__info_title}>Обязанности</h4>
            <ul className={styles.vacancy__list}>
              <li>обязанность первая, самая важная, основная</li>
              <li>вторая обязанность такая же важная как и первая</li>
              <li>третья обязанность не менее важная, чем все остальные</li>
            </ul>
            <h4 className={styles.vacancy__info_title}>Условия</h4>
            <ul className={styles.vacancy__list}>
              <li>обязанность первая, самая важная, основная</li>
              <li>вторая обязанность такая же важная как и первая</li>
              <li>третья обязанность не менее важная, чем все остальные</li>
            </ul>
            <h4 className={styles.vacancy__info_title}>Пожелания</h4>
            <ul className={styles.vacancy__list}>
              <li>пожелание к кандидату первое</li>
              <li>пожелание к кандидату второе</li>
              <li>пожелание к кандидату последнее</li>
            </ul>
            <h4 className={styles.vacancy__info_title}>Ключевые навыки</h4>
            <div className={styles.vacancy__info_skills}>
              <div className={styles.vacancy__info_skill}>Навык 1</div>
              <div className={styles.vacancy__info_skill}>Навык 1</div>
              <div className={styles.vacancy__info_skill}>Навык 1</div>
              <div className={styles.vacancy__info_skill}>Навык 1</div>
              <div className={styles.vacancy__info_skill}>Навык 1</div>
              <div className={styles.vacancy__info_skill}>Навык 1</div>
              <div className={styles.vacancy__info_skill}>Навык 1</div>
              <div className={styles.vacancy__info_skill}>Навык 1</div>
              <div className={styles.vacancy__info_skill}>Навык 1</div>
              <div className={styles.vacancy__info_skill}>Навык 1</div>
              <div className={styles.vacancy__info_skill}>Навык 1</div>
              <div className={styles.vacancy__info_skill}>Навык 1</div>
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
          className={styles.vacancy__close}
          type='button'
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
