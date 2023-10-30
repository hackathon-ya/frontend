import FormFind from '../../components/FormFind/FormFind';
// import Candidates from '../Candidates/Candidates';
import styles from './Favorites.module.scss';
import BarCheckbox from '../../components/BarCheckbox/BarCheckbox';
import CandidatesCard from '../CandidatesCard/CandidatesCard';
import { favaritesSelectors } from '../../store/favorites/favoritesSelector';
import { useDispatch, useSelector } from 'react-redux';
import { getFovorites } from '../../store/favorites/favoritesSlice';
import { useEffect, useState } from 'react';

const Favorites = () => {
  const favorites = useSelector(favaritesSelectors.getFavorites);
  const dispatch = useDispatch<any>();
  const [click, setClick] = useState(false);
  useEffect(() => {
    dispatch(getFovorites());
  }, [dispatch, click]);
  return (
    <section className={styles.applicant}>
      <BarCheckbox />
      <div className={styles.applicant_header}>
        <div className={styles.headerWrapper}>
          <h3 className={styles.header__title}>Избранные резюме</h3>
          <FormFind />
        </div>
        {favorites.map((favorit: any) => (
          <CandidatesCard
            key={favorit.id}
            applicant={favorit}
            click={click}
            setClick={setClick}
          />
        ))}
      </div>
    </section>
  );
};

export default Favorites;
