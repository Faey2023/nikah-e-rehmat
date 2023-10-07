import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "../Page/Error/ErrorPage";
import MainPage from "../Page/MainPage";
import Home from "../Page/Home";
import About from "../Page/About";
import Login from "../Page/Login";
import Register from "../Page/Register";
import ServiceDetail from "../Page/Services.jsx/Details/ServiceDetail";

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
      {
        path: "/event/:id",
        element: <ServiceDetail />,
        loader: () => fetch("/data/data.json"),
      },
    ],
  },
]);

export default MyRouter;
