import "./SideMenu.css";
import { Box, Typography } from "@mui/material";
import {
  Home,
  ManageAccounts,
  NotificationsActive,
  BusinessCenter,
  Handyman,
  Event,
  Timeline,
  Assignment,
  Inventory,
  Settings,
} from "@mui/icons-material";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function SideMenu() {
  const matches = useMediaQuery("(min-width:1200px)");

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "flex-end",
        backgroundColor: "#2e3e90",
        color: "white",
        height: "100%",
        borderRadius: 5,
      }}
    >
      <Box className="menu-item">
        <Home sx={{ fontSize: 30 }} />
        {matches && <Typography>Home</Typography>}
      </Box>
      <Box className="menu-item">
        <ManageAccounts sx={{ fontSize: 30 }} />
        {matches && <Typography>Admin</Typography>}
      </Box>
      <Box className="menu-item">
        <NotificationsActive sx={{ fontSize: 30 }} />
        {matches && <Typography>Alarm</Typography>}
      </Box>
      <Box className="menu-item">
        <BusinessCenter sx={{ fontSize: 30 }} />
        {matches && <Typography>Asset</Typography>}
      </Box>
      <Box className="menu-item">
        <Handyman sx={{ fontSize: 30 }} />
        {matches && <Typography>Maintenance</Typography>}
      </Box>
      <Box className="menu-item">
        <Event sx={{ fontSize: 30 }} />
        {matches && <Typography>Event</Typography>}
      </Box>
      <Box className="menu-item">
        <Timeline sx={{ fontSize: 30 }} />
        {matches && <Typography>Trend</Typography>}
      </Box>
      <Box className="menu-item">
        <Assignment sx={{ fontSize: 30 }} />
        {matches && <Typography>Work Order</Typography>}
      </Box>
      <Box className="menu-item">
        <Inventory sx={{ fontSize: 30 }} />
        {matches && <Typography>Store</Typography>}
      </Box>
      <Box className="menu-item">
        <Settings sx={{ fontSize: 30 }} />
        {matches && <Typography>Setting</Typography>}
      </Box>
    </Box>
    // <div className="side-menu">
    //   <div className="menu-item">
    //     <FaHome className="icon" />
    //     <span>Home</span>
    //   </div>
    //   <div className="menu-item">
    //     <FaUserAlt className="icon" />
    //     <span>Admin</span>
    //   </div>
    //   <div className="menu-item">
    //     <BsMegaphoneFill className="icon" />
    //     <span>Alarm</span>
    //   </div>
    //   <div className="menu-item">
    //     <BsBriefcaseFill className="icon" />
    //     <span>Asset</span>
    //   </div>
    //   <div className="menu-item">
    //     <BsWrench className="icon" />
    //     <span>Maintenance</span>
    //   </div>
    //   <div className="menu-item">
    //     <BsCalendar2EventFill className="icon" />
    //     <span>Event</span>
    //   </div>
    //   <div className="menu-item">
    //     <BsBarChartLineFill className="icon" />
    //     <span>Trend</span>
    //   </div>
    //   <div className="menu-item">
    //     <BsClipboard2Fill className="icon" />
    //     <span>Work Order</span>
    //   </div>
    //   <div className="menu-item">
    //     <BsBox2Fill className="icon" />
    //     <span>Store</span>
    //   </div>
    //   <div className="menu-item">
    //     <BsGearFill className="icon" />
    //     <span>Setting</span>
    //   </div>
    // </div>
  );
}
