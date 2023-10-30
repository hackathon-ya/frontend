import styles from './CandidatesInfo.module.scss';
import { Button } from '@mui/material';
import comparison from '../../assets/images/sravnenie.svg';
import strelkaUP from '../../assets/images/strelka_up.svg';

type CadndidatesProps = {
  onClick: () => void;
  handleLike: () => void;
  handleDeleteLike: () => void;
  like: boolean;
  applicant: any;
  months: number;
  years: number;
};

const CandidatesInfo = ({
  applicant,
  onClick,
  handleLike,
  handleDeleteLike,
  like,
  months,
  years,
}: CadndidatesProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.candidatesInfo}>
        <div className={styles.candidatesInfo__wrapper}>
          <h3 className={styles.candidatesInfo__header}>Интернет-маркетолог</h3>
          <h4 className={styles.candidatesInfo__pay}>80 000 - 120 000 ₽</h4>
          <p className={styles.candidatesInfo__name}>
            {`${applicant.first_name} ${applicant.last_name}`}
          </p>
          <p className={styles.candidatesInfo__sity}>{applicant.city}</p>
          <p className={styles.candidatesInfo__experience}>
            {`Опыт работы ${years} года и ${months} месяцев`}
          </p>
          <div className={styles.candidatesInfo__list}>
            <p className={styles.candidatesInfo__list_title}>Навыки</p>
            <div className={styles.candidatesInfo__skills}>
              {applicant.skills.map((skill: string) => (
                <div className={styles.candidatesInfo__skill} key={skill}>
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.candidatesInfo__buttons}>
          <div className={styles.candidatesInfo__coincidences}>
            <p className={styles.candidatesInfo__coincidences_text}>
              Совпадение на 72%
            </p>
          </div>
          <div className={styles.candidatesInfo__comparisons}>
            <button type='button' className={styles.candidatesInfo__comparison}>
              <img
                src={comparison}
                className={styles.candidatesInfo__image}
              ></img>
              <p className={styles.candidatesInfo__text}>Сравнить</p>
            </button>
          </div>
          <button
            type='button'
            onClick={like ? handleDeleteLike : handleLike}
            className={
              like
                ? styles.candidatesInfo__like_active
                : styles.candidatesInfo__like
            }
          />
        </div>
      </div>
      <span className={styles.candidatesInfo__underLine}></span>
      <div className={styles.candidatesInfo__about}>
        <div className={styles.candidatesInfo__box}>
          <h3 className={styles.candidatesInfo__about_title}>Опыт работы</h3>
          <h4 className={styles.candidatesInfo__about_subtitle}>Маркетолог</h4>
          <p className={styles.candidatesInfo__about_text}>
            Март 2020 - по настоящее время
          </p>
          <p className={styles.candidatesInfo__about_text}>
            Ведение деловой переписки с клиентами; составление контент-плана,
            написание текстов; анализ рынка и конкурентов.
          </p>
        </div>
        <div className={styles.candidatesInfo__box}>
          <h3 className={styles.candidatesInfo__about_title}>Образование</h3>
          <p className={styles.candidatesInfo__about_text}>
            {applicant.education}, 2016-2020
          </p>
          <p className={styles.candidatesInfo__about_text}>
            Московский Институт Технологий и Управления
          </p>
        </div>
        <div className={styles.candidatesInfo__box}>
          <h3 className={styles.candidatesInfo__about_title}>О себе</h3>
          <p className={styles.candidatesInfo__about_text}>
            Пара предложений, которые рассказывают о мотивации и ценностях
            кандидата. Может быть еще что-нибудь запоминающееся.
          </p>
        </div>
        <div className={styles.candidatesInfo__box}>
          <h3 className={styles.candidatesInfo__about_title}>Контакты</h3>
          <p className={styles.candidatesInfo__about_text}>
            Telegram:
            <a
              href={`https://t.me/${applicant.telegram}`}
              className={styles.candidatesInfo__link}
            >
              {`https://t.me/${applicant.telegram}`}
            </a>
          </p>
          <p className={styles.candidatesInfo__about_text}>
            E-mail: {applicant.email}
          </p>
        </div>
      </div>
      <div className={styles.candidatesInfo__buttonWrapper}>
        <div>
          <Button
            className={styles.candidatesInfo__button_close}
            type='button'
            variant='contained'
          >
            Пригласить
          </Button>
          <Button
            className={styles.candidatesInfo__button_downland}
            type='button'
            variant='outlined'
          >
            Скачать резюме
          </Button>
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
        title={'Удалить вакансию?'}
        subtitle={'Вы действительно хотите удалить вакансию?'}
      /> */}
    </div>
  );
};

export default CandidatesInfo;
