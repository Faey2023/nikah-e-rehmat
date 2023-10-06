import { createBrowserRouter } from "react-router-dom";
import MainPage from "../assets/Page/MainPage";
import Home from "../assets/Page/Home";
import ErrorPage from "../Error/ErrorPage";

const MyRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default MyRouter;
