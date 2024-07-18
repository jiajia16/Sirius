import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainPage from "./pages/Main/MainPage.jsx";
import LoginPage from "./pages/Login/LoginPage.jsx";
import NotFoundPage from "./pages/Error/ErrorPage.jsx";
import AssetDashboard from "../src/content/Asset/Dashboard/AssetDashboard.jsx";
import MaintenanceDashboard from "../src/content/Maintenance/Dashboard/MaintenanceDashboard.jsx";
import WorkOrderDashboard from "../src/content/WorkOrder/Dashboard/WorkOrderDashboard.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "main",
    element: <MainPage />,
    children: [
      {
        index: true, 
        path: "assetDashboard",
        element: <AssetDashboard />,
      },
      {
        path: "maintenanceDashboard",
        element: <MaintenanceDashboard />,
      },
      {
        path: "workorderDashboard",
        element: <WorkOrderDashboard />
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;