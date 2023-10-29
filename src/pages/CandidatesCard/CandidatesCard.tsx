import strelkaUP from '../../assets/images/strelka_up.svg';
import styles from './CandidatesCard.module.scss';
import comparison from '../../assets/images/sravnenie.svg';
import { Button } from '@mui/material';
import CandidatesInfo from '../../components/CandidatesInfo/CandidatesInfo';
import { useState } from 'react';

type CadndidatesProps = {
  applicant: any;
};

const CandidatesCard = ({ applicant }: CadndidatesProps) => {
  const [open, setOpen] = useState(true);
  const [like, setLike] = useState(false);

  function handleLike() {
    setLike(!like);
  }
  const onClick = () => {
    setOpen(!open);
  };

  function monthsToYearsAndMonths(experienceMonths: number): {
    years: number;
    months: number;
  } {
    const years = Math.floor(experienceMonths / 12);
    const months =  experienceMonths % 12;
    return { years, months };
  }

  const { years, months } = monthsToYearsAndMonths(applicant.experience_months);

  return (
    <>
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
                  {`${applicant.first_name} ${applicant.last_name}`}
                </p>
                <p className={styles.candidates__sity}>{applicant.city}</p>
                <p className={styles.candidates__experience}>{`Опыт работы ${years} года и ${months} месяцев`}</p>
                <div className={styles.candidates__list}>
                  <p className={styles.candidates__list_title}>Навыки</p>
                  <div className={styles.candidates__skills}>
                    {applicant.skills.map((skill: string) => (
                      <div className={styles.candidates__skill} key={skill}>
                        {skill}
                      </div>
                    ))}
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
                    type="button"
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
                  type="button"
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
                <Button
                  className={styles.candidates__button_close}
                  type="button"
                  variant="contained"
                >
                  Пригласить
                </Button>
              </div>
            </div>

            <button
              className={styles.candidates__close}
              type="button"
              onClick={onClick}
            >
              <img className={styles.candidates__close_image} src={strelkaUP} />
            </button>
            {/* <Modal
title={'Удалить вакансию?'}
subtitle={'Вы действительно хотите удалить вакансию?'}
/> */}
          </div>
        </>
      ) : (
        <CandidatesInfo
          onClick={onClick}
          like={like}
          applicant={applicant}
          handleLike={handleLike}
          key={applicant.id}
          years={years}
          months={months}
        />
      )}
    </>
  );
};
export default CandidatesCard;
