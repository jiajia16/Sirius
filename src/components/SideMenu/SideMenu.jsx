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
        <Home className="icon" />
        {matches && <Typography>Home</Typography>}
      </Box>
      <Box className="menu-item">
        <ManageAccounts className="icon" />
        {matches && <Typography>Admin</Typography>}
      </Box>
      <Box className="menu-item">
        <NotificationsActive className="icon" />
        {matches && <Typography>Alarm</Typography>}
      </Box>
      <Box className="menu-item">
        <BusinessCenter className="icon" />
        {matches && <Typography>Asset</Typography>}
      </Box>
      <Box className="menu-item">
        <Handyman className="icon" />
        {matches && <Typography>Maintenance</Typography>}
      </Box>
      <Box className="menu-item">
        <Event className="icon" />
        {matches && <Typography>Event</Typography>}
      </Box>
      <Box className="menu-item">
        <Timeline className="icon" />
        {matches && <Typography>Trend</Typography>}
      </Box>
      <Box className="menu-item">
        <Assignment className="icon" />
        {matches && <Typography>Work Order</Typography>}
      </Box>
      <Box className="menu-item">
        <Inventory className="icon" />
        {matches && <Typography>Store</Typography>}
      </Box>
      <Box className="menu-item">
        <Settings className="icon" />
        {matches && <Typography>Setting</Typography>}
      </Box>
    </Box>
  );
}
