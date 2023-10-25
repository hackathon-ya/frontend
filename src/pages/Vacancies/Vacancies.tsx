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
import { handleOpenForm } from '../../store/vacancies/vacanciesSlice';
import { useDispatch } from 'react-redux';

const Vacancies = () => {
  const dispatch = useDispatch();
  const view = useSelector(vacanciesSelectors.getView);
  return (
    <section className={styles.vacancies}>
      <BarVacancies />
      <div className={styles.wrapper}>
        {view === 'add' ? (
          ''
        ) : (
          <div className={styles.headerWrapper}>
            <div>
              <h3 className={styles.header}>Активные вакансии</h3>
              <FormFind />
            </div>
            <ButtonMUI
              variant='outlined'
              text='+ Создать новую'
              onClick={() => dispatch(handleOpenForm())}
            />
          </div>
        )}
        {view === 'active' && <ActiveVacancies />}
        {view === 'active' && <ActiveVacancies />}
        {view === 'active' && <ActiveVacancies />}
        {view === 'archive' && <ArchiveVacancies />}
        {view === 'draft' && <DraftVacancies />}
        {view === 'add' && <NewVacancy />}
      </div>
    </section>
  );
};

export default Vacancies;
