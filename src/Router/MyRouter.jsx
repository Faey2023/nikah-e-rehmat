import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "../Page/Error/ErrorPage";
import MainPage from "../Page/MainPage";
import Home from "../Page/Home";
import About from "../Page/About";
import Login from "../Page/Login";
import Register from "../Page/Register";

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
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default MyRouter;