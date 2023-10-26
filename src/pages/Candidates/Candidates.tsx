import styles from './Candidates.module.scss';
import { useState } from 'react';
import ButtonMUI from '../../components/ButtonMUI/ButtonMUI';
import comparison from '../../assets/images/sravnenie.svg';
import CandidatesInfo from '../../components/CandidatesInfo/CandidatesInfo';
import strelkaUP from '../../assets/images/strelka_up.svg';
import FormFind from '../../components/FormFind/FormFind';

const Candidates = () => {
  const [open, setOpen] = useState(true);
  const [like, setLike] = useState(false);

  //   const [showModal, setShowModal] = useState(false);
  function handleLike() {
    setLike(!like);
  }
  const onClick = () => {
    setOpen(!open);
  };

  return (
    <div>
      <div className={styles.headerWrapper}>
        <h3 className={styles.header__title}>Найдено 533 вакансии</h3>
        <FormFind />
      </div>
      {open ? (
        <>
          <div className={styles.card}>
            <div className={styles.candidates}>
              <div className={styles.candidates__wrapper}>
                <h3 className={styles.candidates__header}>
                  Интернет-маркетолог
                </h3>
                <h4 className={styles.candidates__pay}>80 000 - 120 000 ₽</h4>
                <p className={styles.candidates__name}>
                  Иванов Дмитрий Алексеевич
                </p>
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
                  <p className={styles.candidates__coincidences_text}>
                    Совпадение на 72%
                  </p>
                </div>
                <div className={styles.candidates__comparisons}>
                  <button
                    type='button'
                    className={styles.candidates__comparison}
                  >
                    <img
                      src={comparison}
                      className={styles.candidates__image}
                    ></img>
                    <p className={styles.candidates__text}>Сравнить</p>
                  </button>
                </div>
                <button
                  type='button'
                  className={
                    like
                      ? styles.candidates__like_active
                      : styles.candidates__like
                  }
                  onClick={handleLike}
                />
              </div>
            </div>
            <div className={styles.candidates__buttonWrapper}>
              <div>
                <ButtonMUI variant='contained' text='Пригласить' />
              </div>
            </div>

            <button
              className={styles.candidates__close}
              type='button'
              onClick={onClick}
            >
              <img className={styles.candidates__close_image} src={strelkaUP} />
            </button>
            {/* <Modal
        show={showModal}
        title={'Удалить вакансию?'}
        subtitle={'Вы действительно хотите удалить вакансию?'}
        closeModal={() => setShowModal(false)}
      /> */}
          </div>
        </>
      ) : (
        <CandidatesInfo onClick={onClick} like={like} />
      )}
    </div>
  );
};

export default Candidates;
