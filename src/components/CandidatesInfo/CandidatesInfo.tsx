import Modal from '../../components/Modals/Modal';
import styles from './CandidatesInfo.module.scss';
import { useState } from 'react';
import ButtonMUI from '../../components/ButtonMUI/ButtonMUI';
import comparison from '../../assets/images/sravnenie.svg';
import strelkaUP from '../../assets/images/strelka_up.svg';

type CadndidatesProps = {
  onClick: () => void;
  like: boolean;
};

const CandidatesInfo = (props: CadndidatesProps) => {
  const { onClick } = props;
  //   const [showModal, setShowModal] = useState(false);
  return (
    <div className={styles.card}>
      <div className={styles.candidates}>
        <div className={styles.candidates__wrapper}>
          <h3 className={styles.candidates__header}>Интернет-маркетолог</h3>
          <h4 className={styles.candidates__pay}>80 000 - 120 000 ₽</h4>
          <p className={styles.candidates__name}>Иванов Дмитрий Алексеевич</p>
          <p className={styles.candidates__sity}>Москва</p>
          <p className={styles.candidates__experience}>
            Опыт от 1 года до 3 лет
          </p>
          <div className={styles.candidates__list}>
            <p className={styles.candidates__list_title}>Навыки</p>
            <div className={styles.candidates__skills}>
              <div className={styles.candidates__skill}>Навык 1</div>
              <div className={styles.candidates__skill}>Навык 1</div>
              <div className={styles.candidates__skill}>Навык 1</div>
              <div className={styles.candidates__skill}>Навык 1</div>
            </div>
          </div>
        </div>
        <div className={styles.candidates__buttons}>
          <div className={styles.candidates__coincidences}>
            <p className={styles.candidatesInfo__coincidences_text}>
              Совпадение на 72%
            </p>
          </div>
          <div className={styles.candidates__comparisons}>
            <button type='button' className={styles.candidates__comparison}>
              <img src={comparison} className={styles.candidates__image}></img>
              <p className={styles.candidates__text}>Сравнить</p>
            </button>
          </div>
          <button
            type='button'
            className={
              props.like
                ? styles.candidatesInfo__like_active
                : styles.candidates__like
            }
          />
        </div>
      </div>
      <span className={styles.candidatesInfo__underLine}></span>
      <div className={styles.candidatesInfo__about}>
        <div className={styles.candidatesInfo__box}>
          <h3 className={styles.candidatesInfo__about_title}>Опыт работы</h3>
          <h4 className={styles.candidatesInfo__about_subtitle}>Маркетолог</h4>
          <p className={styles.candidatesInfo__text}>
            Март 2020 - по настоящее время
          </p>
          <p className={styles.candidatesInfo__text}>
            Ведение деловой переписки с клиентами; составление контент-плана,
            написание текстов; анализ рынка и конкурентов.
          </p>
        </div>
        <div className={styles.candidatesInfo__box}>
          <h3 className={styles.candidatesInfo__about_title}>Образование</h3>
          <p className={styles.candidatesInfo__text}>Высшее, 2016-2020</p>
          <p className={styles.candidatesInfo__text}>
            Московский Институт Технологий и Управления
          </p>
        </div>
        <div className={styles.candidatesInfo__box}>
          <h3 className={styles.candidatesInfo__about_title}>О себе</h3>
          <p className={styles.candidatesInfo__text}>
            Пара предложений, которые рассказывают о мотивации и ценностях
            кандидата. Может быть еще что-нибудь запоминающееся.
          </p>
        </div>
        <div className={styles.candidatesInfo__box}>
          <h3 className={styles.candidatesInfo__about_title}>Контакты</h3>
          <p className={styles.candidatesInfo__text}>
            Telegram:{' '}
            <a
              href='https://t.me/candidate2023'
              className={styles.candidatesInfo__link}
            >
              https://t.me/candidate2023
            </a>
          </p>
          <p className={styles.candidatesInfo__text}>
            E-mail: pochtapochta2023@gmail.com
          </p>
        </div>
      </div>
      <div className={styles.candidates__buttonWrapper}>
        <div>
          <ButtonMUI variant='contained' text='Пригласить' />
          <ButtonMUI variant='outlined' text='Скачать резюме' />
        </div>
      </div>
      <button
        className={styles.candidatesInfo__close}
        type='button'
        onClick={onClick}
      >
        <img className={styles.candidatesInfo__close_image} src={strelkaUP} />
      </button>
      {/* <Modal
        show={showModal}
        title={'Удалить вакансию?'}
        subtitle={'Вы действительно хотите удалить вакансию?'}
        closeModal={() => setShowModal(false)}
      /> */}
    </div>
  );
};

export default CandidatesInfo;
