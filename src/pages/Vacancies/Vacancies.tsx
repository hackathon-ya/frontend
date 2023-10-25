import BarVacancies from '../../components/BarVacancies/BarVacancies';
import styles from './Vacancies.module.scss';
import ActiveVacancies from '../ActiveVacansies/ActiveVacancies';
import { vacanciesSelectors } from '../../store/vacancies/vacanciesSelectors';
import { useSelector } from 'react-redux';
import DraftVacancies from '../DraftComponents/DraftComponents';
import ArchiveVacancies from '../ArchiveVacancies/ArchiveVacancies';
import FormFind from '../../components/FormFind/FormFind';
import ButtonMUI from '../../components/ButtonMUI/ButtonMUI';
import NewVacancy from '../../components/NewVacancy/NewVacancy';
import { handelOpenForm } from '../../store/vacancies/vacanciesSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const Vacancies = () => {
  const dispatch = useDispatch();
  const view = useSelector(vacanciesSelectors.getView);
  return (
    <section className={styles.vacancies}>
      <BarVacancies />
      <div className={styles.wrapper}>
        <div className={styles.headerWrapper}>
          <div>
            <h3 className={styles.header}>Активные вакансии</h3>
            <FormFind />
          </div>
          <Link to='/vacancies/add' onClick={() => dispatch(handelOpenForm())}>
            <ButtonMUI variant='outlined' text='+ Создать новую' />
          </Link>
        </div>
        {view === 'active' && <ActiveVacancies />}
        {view === 'archive' && <ArchiveVacancies />}
        {view === 'draft' && <DraftVacancies />}
        {view === 'add' && <NewVacancy />}
      </div>
    </section>
  );
};

export default Vacancies;
