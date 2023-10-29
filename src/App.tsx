import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Favorites from './pages/Favorites/Favorites';
import Vacancies from './pages/Vacancies/Vacancies';
import DraftVacancies from './pages/DraftVacancies/DraftVacancies';
import ArchiveVacancies from './pages/ArchiveVacancies/ArchiveVacancies';
import Candidates from './pages/Candidates/Candidates';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Candidates />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="vacancies" element={<Vacancies />}>
          <Route path="active" element={<Vacancies />} />
          <Route path="draft" element={<DraftVacancies />} />
          <Route path="archive" element={<ArchiveVacancies />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
