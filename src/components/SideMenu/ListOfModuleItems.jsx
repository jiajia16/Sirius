export const LIST_OF_ITEMS = {
  asset: {
    Asset: [
      "Manage Asset Type",
      "Manage Asset Group",
      "Manage Asset Category",
      "Manage Asset",
    ],
    Point: ["Manage Point", "Manage Point Group"],
    Reports: ["Asset Report", "Alarm Log Report", "Event Log Report"],
  },
  maintenance: {
    Schedule: ["Create", "Update"],
    Execution: ["List View", "Calendar View"],
    Part_Request: ["Manage Part Request"],
    Summary: ["Summary"],
    Reports: ["Schedule Status Report", "Schedule Summary Report"],
  },
  workorder: {
    Requests: ["Work Requests"],
    Orders: ["Work Orders"],
    Approval: ["Approval"],
    Summary: ["Work Order Summary"],
    System_Data: ["Trades", "Systems", "Faults"],
    Reports: [
      "Work Order Summary Report",
      "Trade Summary Report",
      "FCC Summary Report",
    ],
  },
  admin: {
    User: [
      "Manage Users",
      "Manage User Groups",
      "Manage User Roles",
      "Manage Departments",
    ],
    Location: ["Manage Location Types", "Manage Locations"],
    System_Data: ["Companies"],
    Calendar: ["Public Holiday"],
    Reports: ["User Activity Report"],
  },
  alarm: {
    ACMV: ["FCU", "MV"],
    BMS_System: ["BMS Equipment"],
  },
  event: {
    ACMV: ["AHU", "ELEC", "FCU", "MV", "Sensor"],
    BMS_System: ["BMS Equipment"],
    Pump: ["Pump"],
    Tank: ["Tank"],
  },
  store: {
    Catalog: ["Manage Part Categories", "Manage Part Groups", "Manage Parts"],
    Store: ["Manage Store", "Manage Store Location"],
    Receiving: ["Manage Received Parts"],
    Part_Request: ["Approve Part Requests", "Manage Part Requests"],
    Issuing: ["Direct Part Issue", "Issue Parts", "Manage Issued Parts"],
    Returns: ["Manage Part Returns"],
    Inventory: ["Manage Inventory"],
    Reports: [
      "Received Parts Report",
      "Issued Parts Report",
      "Inventory Snapshot",
      "Inventory Transaction",
      "Material Scrap Report",
    ],
  },
  trend: {
    ACMV: ["AHU", "ELEC", "FCU", "MV", "Sensor"],
  },
};
