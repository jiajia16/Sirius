import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// Test move routing of pages to main.jsx //
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainPage from "./pages/Main/MainPage.jsx";
import LoginPage from "./pages/Login/LoginPage.jsx";
import NotFoundPage from "./pages/Error/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/main",
    element: <MainPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
