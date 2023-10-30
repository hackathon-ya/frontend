import BarVacancies from '../../components/BarVacancies/BarVacancies';
import styles from './Vacancies.module.scss';
import ActiveVacancies from '../ActiveVacansies/ActiveVacancies';
import { vacanciesSelectors } from '../../store/vacancies/vacanciesSelectors';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getVacancies } from '../../store/vacancies/vacanciesSlice';
import { Button } from '@mui/material';
import { handleOpenForm } from '../../store/vacancies/vacanciesSlice';
import NewVacancy from '../../components/NewVacancy/NewVacancy';

const Vacancies = () => {
  const dispatch = useDispatch<any>();

  useEffect(() => {
    if (view === 'active') {
      dispatch(getVacancies());
    }
  }, [dispatch]);

  const vacancies = useSelector(vacanciesSelectors.getVacancies);

  const view = useSelector(vacanciesSelectors.getView);
  return (
    <section className={styles.vacancies}>
      <BarVacancies />

      {view === 'active' && (
        <div className={styles.wrapper}>
          <div className={styles.headerWrapper}>
            <h3 className={styles.header__block}>Активные вакансии</h3>
            <Button
              type="button"
              variant="outlined"
              className={styles.header__button}
              onClick={() => dispatch(handleOpenForm())}
            >
              + Создать новую
            </Button>
          </div>
          {vacancies.map((vacancy: any) => (
            <ActiveVacancies
              key={vacancy.id}
              vacancy={vacancy}
              min_salary={vacancy.min_salary}
              max_salary={vacancy.max_salary}
              company_name={vacancy.company_name}
              city={undefined}
              job_title={vacancy.job_title}
            />
          ))}
        </div>
      )}

      {view === 'add' && <NewVacancy text={'Новая вакансия'} />}
      {view === 'edit' && <NewVacancy text={'Редактирование вакансии'} />}
    </section>
  );
};

export default Vacancies;
