import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "../constants/constants.ts";

import Applicant from "../pages/Applicant/Applicant.tsx";
import Vacancies from "../pages/Vacancies/Vacancies.tsx";
import Profile from "../pages/Profile/Profile.tsx";
import MainPage from "../pages/MainPage/MainPage.tsx";
import App from "../App.tsx";

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
        path: ROUTES.PROFILE,
        element: <Profile />,
      },
    ],
  },
]);
export default router;
