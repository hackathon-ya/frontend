import styles from './Applicant.module.scss';
import FormFind from '../../components/FormFind/FormFind';
import BarCheckbox from '../../components/BarCheckbox/BarCheckbox';
import { useEffect, useState } from 'react';
import { getApplicant } from '../../store/applicant/applicantSlice';
import { useDispatch, useSelector } from 'react-redux';
import { applicantSelectors } from '../../store/applicant/applicantSelectors';
import CandidatesCard from '../CandidatesCard/CandidatesCard';

const Applicant = () => {
  const dispatch = useDispatch<any>();
  const [click, setClick] = useState(false);

  const applicants = useSelector(applicantSelectors.getApplicant);

  useEffect(() => {
    dispatch(getApplicant());
  }, [dispatch, click]);

  return (
    <section className={styles.applicant}>
      <BarCheckbox />
      <div className={styles.applicant_header}>
        <div className={styles.headerWrapper}>
          <h3
            className={styles.header__title}
          >{`Найдено ${applicants.length} кандидата`}</h3>
          <FormFind />
        </div>
        <div className={styles.candidate__page}>
          <div className={styles.candidates__vacancy}>
            {applicants.map((applicant: any, index: number) => (
              <CandidatesCard key={index} applicant={applicant} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Applicant;
