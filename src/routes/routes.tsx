import { createBrowserRouter } from 'react-router-dom';
import { ROUTES } from '../constants/constants.ts';

import Applicant from '../pages/Applicant/Applicant.tsx';
import Profile from '../pages/Profile/Profile.tsx';
import MainPage from '../pages/MainPage/MainPage.tsx';
import App from '../App.tsx';
import ArchiveVacancies from '../pages/ArchiveVacancies/ArchiveVacancies';
import DraftVacancies from '../pages/DraftComponents/DraftComponents';
import Vacancies from '../pages/Vacancies/Vacancies.tsx';
import NewVacancy from '../components/NewVacancy/NewVacancy.tsx';

const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <App />,
    children: [
      {
        path: ROUTES.HOME,
        element: <MainPage />,
      },
      {
        path: ROUTES.APPLICANT,
        element: <Applicant />,
      },
      {
        path: ROUTES.VACANCIES,
        element: <Vacancies />,
      },
      {
        path: ROUTES.ADDVACANCIES,
        element: <NewVacancy />,
      },
      {
        path: ROUTES.PROFILE,
        element: <Profile />,
      },
      {
        path: ROUTES.ARCHIVE,
        element: <ArchiveVacancies />,
      },
      {
        path: ROUTES.DRAFT,
        element: <DraftVacancies />,
      },
    ],
  },
]);
export default router;
