import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "../constants/constants.ts";

import Find from "../pages/Find/Find.tsx";
import Post from "../pages/Post/Post.tsx";
import Selection from "../pages/Selection/Selection.tsx";
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
        path: ROUTES.FIND,
        element: <Find />,
      },
      {
        path: ROUTES.POST,
        element: <Post />,
      },
      {
        path: ROUTES.SELECTION,
        element: <Selection />,
      },
    ],
  },
]);
export default router;
