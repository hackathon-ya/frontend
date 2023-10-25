import Modal from '../../components/Modals/Modal';
import styles from './Candidates.module.scss';
import { useState } from 'react';
import ButtonIcon from '../../components/ButtonIcon/ButtonIcon';
import ButtonMUI from '../../components/ButtonMUI/ButtonMUI';
import comparison from '../../assets/images/sravnenie.svg';

const Candidates = () => {
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
          <div className={styles.candidates__skills}>
            <div className={styles.candidates__skill}>Навый 1</div>
            <div className={styles.candidates__skill}>Навый 1</div>
            <div className={styles.candidates__skill}>Навый 1</div>
            <div className={styles.candidates__skill}>Навый 1</div>
            <div className={styles.candidates__skill}>Навый 1</div>
          </div>
        </div>
        <div className={styles.candidates__buttons}>
          <div className={styles.candidates__coincidences}>
            <p>Совпадение на 72%</p>
          </div>
          <div className={styles.candidates__comparisons}>
            <button type='button' className={styles.candidates__comparison}>
              <img src={comparison} className={styles.candidates__image}></img>
              <p className={styles.candidates__text}>Сравнить</p>
            </button>
          </div>
          <button type='button' className={styles.candidates__like} />
        </div>
      </div>
      <div className={styles.candidates__buttonWrapper}>
        <div>
          <ButtonMUI variant='contained' text='Пригласить' />
        </div>
      </div>
      {/* <Modal
        show={showModal}
        title={'Удалить вакансию?'}
        subtitle={'Вы действительно хотите удалить вакансию?'}
        closeModal={() => setShowModal(false)}
      /> */}
    </div>
  );
};

export default Candidates;
