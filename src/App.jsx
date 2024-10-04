import {
  createBrowserRouter,
  RouterProvider,
  createHashRouter,
} from "react-router-dom";

import MainPage from "./pages/Main/MainPage.jsx";
import LoginPage from "./pages/Login/LoginPage.jsx";
import NotFoundPage from "./pages/Error/ErrorPage.jsx";

// Asset Pages
import AssetDashboard from "../src/content/Asset/Dashboard/AssetDashboard.jsx";
import AlarmLogReport from "../src/content/Asset/AlarmLogReport/AlarmLogReport.jsx";
import AssetReport from "../src/content/Asset/AssetReport/AssetReport.jsx";
import EventLogReport from "../src/content/Asset/EventLogReport/EventLogReport.jsx";
import ManageAsset from "../src/content/Asset/ManageAsset/ManageAsset.jsx";
import ManageAssetCatergory from "../src/content/Asset/ManageAssetCategory/ManageAssetCategory.jsx";
import ManageAssetGroup from "../src/content/Asset/ManageAssetGroup/ManageAssetGroup.jsx";
import ManageAssetType from "../src/content/Asset/ManageAssetType/ManageAssetType.jsx";
import ManagePoint from "../src/content/Asset/ManagePoint/ManagePoint.jsx";
import ManagePointGroup from "../src/content/Asset/ManagePointGroup/ManagePointGroup.jsx";

// Maintenance Pages
import MaintenanceDashboard from "../src/content/Maintenance/Dashboard/MaintenanceDashboard.jsx";
import CalendarView from "../src/content/Maintenance/CalendarView/CalendarView.jsx";
import ListView from "../src/content/Maintenance/ListView/ListView.jsx";
import CreateSchedule from "../src/content/Maintenance/CreateSchedule/CreateSchedule.jsx";
import UpdateSchedule from "../src/content/Maintenance/UpdateSchedule/UpdateSchedule.jsx";
import ManagePartRequest from "../src/content/Maintenance/ManagePartRequest/ManagePartRequest.jsx";
import MaintenanceSummary from "../src/content/Maintenance/MaintenanceSummary/MaintenanceSummary.jsx";
import ScheduleStatusReport from "../src/content/Maintenance/ScheduleStatusReport/ScheduleStatusReport.jsx";
import ScheduleSummaryReport from "../src/content/Maintenance/ScheduleSummaryReport/ScheduleSummaryReport.jsx";

// Work Order Pages
import WorkOrderDashboard from "../src/content/WorkOrder/Dashboard/WorkOrderDashboard.jsx";
import FCCSummaryReport from "../src/content/WorkOrder/FCCSummaryReport/FCCSummaryReport.jsx";
import SystemDataFaults from "../src/content/WorkOrder/SystemDataFaults/SystemDataFaults.jsx";
import SystemDataSystems from "../src/content/WorkOrder/SystemDataSystems/SystemDataSystems.jsx";
import SystemDataTrade from "../src/content/WorkOrder/SystemDataTrades/SystemDataTrades.jsx";
import TradeSummaryReport from "../src/content/WorkOrder/TradeSummaryReport/TradeSummaryReport.jsx";
import WorkApprovals from "../src/content/WorkOrder/WorkApprovals/WorkApprovals.jsx";
import WorkOrders from "../src/content/WorkOrder/WorkOrders/WorkOrders.jsx";
import WorkOrderSummary from "../src/content/WorkOrder/WorkOrderSummary/WorkOrderSummary.jsx";
import WorkOrderSummaryReport from "../src/content/WorkOrder/WorkOrderSummaryReport/WorkOrderSummaryReport.jsx";
import WorkRequests from "../src/content/WorkOrder/WorkRequests/WorkRequests.jsx";

// Admin Pages
import AdminDashboard from "../src/content/Admin/Dashboard/AdminDashboard.jsx";
import Companies from "../src/content/Admin/Companies/Companies.jsx";
import ManageDepartments from "../src/content/Admin/ManageDepartments/ManageDepartments.jsx";
import ManageLocations from "../src/content/Admin/ManageLocations/ManageLocations.jsx";
import ManageLocationTypes from "../src/content/Admin/ManageLocationTypes/ManageLocationTypes.jsx";
import ManageUserGroups from "../src/content/Admin/ManageUserGroups/ManageUserGroups.jsx";
import ManageUserRoles from "../src/content/Admin/ManageUserRoles/ManageUserRoles.jsx";
import ManageUsers from "../src/content/Admin/ManageUsers/ManageUsers.jsx";
import PublicHoliday from "../src/content/Admin/PublicHoliday/PublicHolidays.jsx";
import UserActivityReport from "../src/content/Admin/UserActivityReport/UserActivityReport.jsx";

// Alarm Pages
import AlarmMain from "../src/content/Alarm/MainPage/AlarmMain.jsx";
import AlarmBmsEquipment from "../src/content/Alarm/AlarmBmsEquipment/AlarmBmsEquipment.jsx";
import AlarmFCU from "../src/content/Alarm/AlarmFCU/AlarmFCU.jsx";
import AlarmMV from "../src/content/Alarm/AlarmMV/AlarmMV.jsx";

// Event Dashboard
import EventDashboard from "../src/content/Event/Dashboard/EventDashboard.jsx";
import EventAHU from "../src/content/Event/EventAHU/EventAHU.jsx";
import EventBmsEquipment from "../src/content/Event/EventBmsEquipment/EventBmsEquipment.jsx";
import EventELEC from "../src/content/Event/EventELEC/EventELEC.jsx";
import EventFCU from "../src/content/Event/EventFCU/EventFCU.jsx";
import EventMV from "../src/content/Event/EventMV/EventMV.jsx";
import EventPump from "../src/content/Event/EventPump/EventPump.jsx";
import EventSensor from "../src/content/Event/EventSensor/EventSensor.jsx";
import EventTank from "../src/content/Event/EventTank/EventTank.jsx";

// Store Pages
import StoreDashboard from "../src/content/Store/Dashboard/StoreDashboard.jsx";
import ApprovePartRequests from "../src/content/Store/ApprovePartRequests/ApprovePartRequests.jsx";
import DirectPartIssue from "../src/content/Store/DirectPartIssue/DirectPartIssue.jsx";
import InventorySnapshot from "../src/content/Store/InventorySnapshot/InventorySnapshot.jsx";
import InventoryTransaction from "../src/content/Store/InventoryTransaction/InventoryTransaction.jsx";
import IssuedPartsReport from "../src/content/Store/IssuedPartsReport/IssuedPartsReport.jsx";
import IssueParts from "../src/content/Store/IssueParts/IssueParts.jsx";
import ManageInventory from "../src/content/Store/ManageInventory/ManageInventory.jsx";
import ManageIssueParts from "../src/content/Store/ManageIssueParts/ManageIssueParts.jsx";
import ManagePartCategories from "../src/content/Store/ManagePartCategories/ManagePartCategories.jsx";
import ManagePartGroups from "../src/content/Store/ManagePartGroups/ManagePartGroups.jsx";
import ManagePartRequests from "../src/content/Store/ManagePartRequests/ManagePartRequests.jsx";
import ManagePartReturns from "../src/content/Store/ManagePartReturns/ManagePartReturns.jsx";
import ManageParts from "../src/content/Store/ManageParts/ManageParts.jsx";
import ManageReceivedParts from "../src/content/Store/ManageReceivedParts/ManageReceivedParts.jsx";
import ManageStore from "../src/content/Store/ManageStore/ManageStore.jsx";
import ManageStoreLocation from "../src/content/Store/ManageStoreLocation/ManageStoreLocation.jsx";
import MaterialScrapReport from "../src/content/Store/MaterialScrapReport/MaterialScrapReport.jsx";
import ReceivedPartsReport from "../src/content/Store/ReceivedPartsReport/ReceivedPartsReport.jsx";

// Trend Pages
import TrendMain from "../src/content/Trend/MainPage/TrendMain.jsx";
import TrendAHU from "../src/content/Trend/TrendAHU/TrendAHU.jsx";
import TrendELEC from "../src/content/Trend/TrendELEC/TrendELEC.jsx";
import TrendFCU from "../src/content/Trend/TrendFCU/TrendFCU.jsx";
import TrendMV from "../src/content/Trend/TrendMV/TrendMV.jsx";
import TrendSensor from "../src/content/Trend/TrendSensor/TrendSensor.jsx";
import TrendCharts from "../src/content/Trend/TrendCharts/TrendCharts.jsx";

import SettingMain from "../src/content/Setting/SettingMain.jsx";
import SystemDataTrades from "../src/content/WorkOrder/SystemDataTrades/SystemDataTrades.jsx";

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
      // Adnin Routes ---------------------------------
      {
        path: "/Sirius/main/admin/AdminDashboard/",
        element: <AdminDashboard />,
      },
      {
        path: "/Sirius/main/admin/Companies/",
        element: <Companies />,
      },
      {
        path: "/Sirius/main/admin/ManageDepartments/",
        element: <ManageDepartments />,
      },
      {
        path: "/Sirius/main/admin/ManageLocations/",
        element: <ManageLocations />,
      },
      {
        path: "/Sirius/main/admin/ManageLocationTypes/",
        element: <ManageLocationTypes />,
      },
      {
        path: "/Sirius/main/admin/ManageUserGroups/",
        element: <ManageUserGroups />,
      },
      {
        path: "/Sirius/main/admin/ManageUserRoles/",
        element: <ManageUserRoles />,
      },
      {
        path: "/Sirius/main/admin/ManageUsers/",
        element: <ManageUsers />,
      },
      {
        path: "/Sirius/main/admin/PublicHoliday/",
        element: <PublicHoliday />,
      },
      {
        path: "/Sirius/main/admin/UserActivityReport/",
        element: <UserActivityReport />,
      },
      // Alarm Routes ---------------------------------
      {
        path: "/Sirius/main/alarm/alarmMain/",
        element: <AlarmMain />,
      },
      {
        path: "/Sirius/main/alarm/BMSEquipment/",
        element: <AlarmBmsEquipment />,
      },
      {
        path: "/Sirius/main/alarm/FCU/",
        element: <AlarmFCU />,
      },
      {
        path: "/Sirius/main/alarm/MV/",
        element: <AlarmMV />,
      },
      // Asset Routes ---------------------------------
      {
        path: "/Sirius/main/asset/assetDashboard/",
        element: <AssetDashboard />,
      },
      {
        path: "/Sirius/main/asset/AlarmLogReport/",
        element: <AlarmLogReport />,
      },
      {
        path: "/Sirius/main/asset/AssetReport/",
        element: <AssetReport />,
      },
      {
        path: "/Sirius/main/asset/EventLogReport/",
        element: <EventLogReport />,
      },
      {
        path: "/Sirius/main/asset/ManageAsset/",
        element: <ManageAsset />,
      },
      {
        path: "/Sirius/main/asset/ManageAssetCategory/",
        element: <ManageAssetCatergory />,
      },
      {
        path: "/Sirius/main/asset/ManageAssetGroup/",
        element: <ManageAssetGroup />,
      },
      {
        path: "/Sirius/main/asset/ManageAssetType/",
        element: <ManageAssetType />,
      },
      {
        path: "/Sirius/main/asset/ManagePoint/",
        element: <ManagePoint />,
      },
      {
        path: "/Sirius/main/asset/ManagePointGroup/",
        element: <ManagePointGroup />,
      },
      // Maintenance Routes ---------------------------------
      {
        path: "/Sirius/main/maintenance/maintenanceDashboard/",
        element: <MaintenanceDashboard />,
      },
      {
        path: "/Sirius/main/maintenance/CalendarView/",
        element: <CalendarView />,
      },
      {
        path: "/Sirius/main/maintenance/ListView/",
        element: <ListView />,
      },
      {
        path: "/Sirius/main/maintenance/Create/",
        element: <CreateSchedule />,
      },
      {
        path: "/Sirius/main/maintenance/Update/",
        element: <UpdateSchedule />,
      },
      {
        path: "/Sirius/main/maintenance/Summary/",
        element: <MaintenanceSummary />,
      },
      {
        path: "/Sirius/main/maintenance/ManagePartRequest/",
        element: <ManagePartRequest />,
      },
      {
        path: "/Sirius/main/maintenance/ScheduleStatusReport/",
        element: <ScheduleStatusReport />,
      },
      {
        path: "/Sirius/main/maintenance/ScheduleSummaryReport/",
        element: <ScheduleSummaryReport />,
      },
      // Event Routes ---------------------------------
      {
        path: "/Sirius/main/event/eventDashboard/",
        element: <EventDashboard />,
      },
      {
        path: "/Sirius/main/event/AHU/",
        element: <EventAHU />,
      },
      {
        path: "/Sirius/main/event/BMSEquipment/",
        element: <EventBmsEquipment />,
      },
      {
        path: "/Sirius/main/event/ELEC/",
        element: <EventELEC />,
      },
      {
        path: "/Sirius/main/event/FCU/",
        element: <EventFCU />,
      },
      {
        path: "/Sirius/main/event/MV/",
        element: <EventMV />,
      },
      {
        path: "/Sirius/main/event/Pump/",
        element: <EventPump />,
      },
      {
        path: "/Sirius/main/event/Sensor/",
        element: <EventSensor />,
      },
      {
        path: "/Sirius/main/event/Tank/",
        element: <EventTank />,
      },
      // Trend Routes ---------------------------------
      {
        path: "/Sirius/main/trend/trendMain/",
        element: <TrendMain />,
      },
      {
        path: "/Sirius/main/trend/AHU/",
        element: <TrendAHU />,
      },
      {
        path: "/Sirius/main/trend/ELEC/",
        element: <TrendELEC />,
      },
      {
        path: "/Sirius/main/trend/FCU/",
        element: <TrendFCU />,
      },
      {
        path: "/Sirius/main/trend/MV/",
        element: <TrendMV />,
      },
      {
        path: "/Sirius/main/trend/Sensor/",
        element: <TrendSensor />,
      },
      {
        path: "/Sirius/main/trend/TrendCharts/:id",
        element: <TrendCharts />,
      },
      // Work Order Routes ---------------------------------
      {
        path: "/Sirius/main/workorder/workorderDashboard/",
        element: <WorkOrderDashboard />,
      },
      {
        path: "/Sirius/main/workorder/FCCSummaryReport/",
        element: <FCCSummaryReport />,
      },
      {
        path: "/Sirius/main/workorder/Faults/",
        element: <SystemDataFaults />,
      },
      {
        path: "/Sirius/main/workorder/Systems/",
        element: <SystemDataSystems />,
      },
      {
        path: "/Sirius/main/workorder/Trades/",
        element: <SystemDataTrades />,
      },
      {
        path: "/Sirius/main/workorder/TradeSummaryReport/",
        element: <TradeSummaryReport />,
      },
      {
        path: "/Sirius/main/workorder/Approval/",
        element: <WorkApprovals />,
      },
      {
        path: "/Sirius/main/workorder/WorkOrders/",
        element: <WorkOrders />,
      },
      {
        path: "/Sirius/main/workorder/WorkOrderSummary/",
        element: <WorkOrderSummary />,
      },
      {
        path: "/Sirius/main/workorder/WorkOrderSummaryReport/",
        element: <WorkOrderSummaryReport />,
      },
      {
        path: "/Sirius/main/workorder/WorkRequests/",
        element: <WorkRequests />,
      },
      // Store Routes ---------------------------------
      {
        path: "/Sirius/main/store/storeDashboard/",
        element: <StoreDashboard />,
      },
      {
        path: "/Sirius/main/store/ApprovePartRequests/",
        element: <ApprovePartRequests />,
      },
      {
        path: "/Sirius/main/store/DirectPartIssue/",
        element: <DirectPartIssue />,
      },
      {
        path: "/Sirius/main/store/InventorySnapshot/",
        element: <InventorySnapshot />,
      },
      {
        path: "/Sirius/main/store/InventoryTransaction/",
        element: <InventoryTransaction />,
      },
      {
        path: "/Sirius/main/store/IssuedPartsReport/",
        element: <IssuedPartsReport />,
      },
      {
        path: "/Sirius/main/store/IssueParts/",
        element: <IssueParts />,
      },
      {
        path: "/Sirius/main/store/ManageInventory/",
        element: <ManageInventory />,
      },
      {
        path: "/Sirius/main/store/ManageIssuedParts",
        element: <ManageIssueParts />,
      },
      {
        path: "/Sirius/main/store/ManagePartCategories/",
        element: <ManagePartCategories />,
      },
      {
        path: "/Sirius/main/store/ManagePartGroups/",
        element: <ManagePartGroups />,
      },
      {
        path: "/Sirius/main/store/ManagePartRequests/",
        element: <ManagePartRequests />,
      },
      {
        path: "/Sirius/main/store/ManagePartReturns/",
        element: <ManagePartReturns />,
      },
      {
        path: "/Sirius/main/store/ManageParts/",
        element: <ManageParts />,
      },
      {
        path: "/Sirius/main/store/ManageReceivedParts/",
        element: <ManageReceivedParts />,
      },
      {
        path: "/Sirius/main/store/ManageStore/",
        element: <ManageStore />,
      },
      {
        path: "/Sirius/main/store/ManageStoreLocation/",
        element: <ManageStoreLocation />,
      },
      {
        path: "/Sirius/main/store/MaterialScrapReport/",
        element: <MaterialScrapReport />,
      },
      {
        path: "/Sirius/main/store/ReceivedPartsReport/",
        element: <ReceivedPartsReport />,
      },

    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
