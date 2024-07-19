import { createBrowserRouter, RouterProvider, createHashRouter } from "react-router-dom";

import MainPage from "./pages/Main/MainPage.jsx";
import LoginPage from "./pages/Login/LoginPage.jsx";
import NotFoundPage from "./pages/Error/ErrorPage.jsx";
import AssetDashboard from "../src/content/Asset/Dashboard/AssetDashboard.jsx";
import MaintenanceDashboard from "../src/content/Maintenance/Dashboard/MaintenanceDashboard.jsx";
import WorkOrderDashboard from "../src/content/WorkOrder/Dashboard/WorkOrderDashboard.jsx";

const router = createHashRouter([
  {
    path: "/Sirius/",
    element: <LoginPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/Sirius/login/",
    element: <LoginPage />,
  },
  {
    path: "/Sirius/main/",
    element: <MainPage />,
    children: [
      {
        index: true,
        element: <AssetDashboard />,
      },
      {
        path: "/Sirius/main/assetDashboard/",
        element: <AssetDashboard />,
      },
      {
        path: "/Sirius/main/maintenanceDashboard/",
        element: <MaintenanceDashboard />,
      },
      {
        path: "/Sirius/main/workorderDashboard/",
        element: <WorkOrderDashboard />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
