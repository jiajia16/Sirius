import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainPage from "./pages/Main/MainPage.jsx";
import LoginPage from "./pages/Login/LoginPage.jsx";
import NotFoundPage from "./pages/Error/ErrorPage.jsx";
import AssetDashboard from "../src/content/Asset/Dashboard/AssetDashboard.jsx";
import MaintenanceDashboard from "../src/content/Maintenance/Dashboard/MaintenanceDashboard.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    children: [
      {
        path: "maintenanceDashboard",
        element: <MaintenanceDashboard />,
      },
      {
        path: "assetDashboard",
        element: <AssetDashboard />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
