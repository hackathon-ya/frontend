import BarVacancies from '../../components/BarVacancies/BarVacancies';
import styles from './Vacancies.module.scss';
import ActiveVacancies from '../ActiveVacansies/ActiveVacancies';
import { vacanciesSelectors } from '../../store/vacancies/vacanciesSelectors';
import { useSelector } from 'react-redux';
import NewVacancy from '../../components/NewVacancy/NewVacancy';

const Vacancies = () => {
  const view = useSelector(vacanciesSelectors.getView);      
  return (
    <section className={styles.vacancies}>
      <BarVacancies />
      <div className={styles.wrapper}>
        {view === 'active' && <ActiveVacancies />}
        {view === 'add' && <NewVacancy text={'Новая вакансия'}/>}
        {view === 'edit' && <NewVacancy text={'Редактирование вакансии'}/>}
      </div>
    </section>
  );
};

export default Vacancies;
