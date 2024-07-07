import "./App.css";
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

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
