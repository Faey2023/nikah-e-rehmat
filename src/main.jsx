import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MyRouter from "./Router/MyRouter.jsx";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./Provider/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={MyRouter} />
    </AuthProvider>
  </React.StrictMode>
);
