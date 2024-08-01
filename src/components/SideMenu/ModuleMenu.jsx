import "./ModuleMenu.css";
import MenuButton from "./MenuButton.jsx";
import { useState } from "react";
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

export default function ModuleMenu({ onButtonClick }) {
  const screenSize = useMediaQuery("(min-width:1200px)");

  const [selected, setSelected] = useState();

  function handleSelect(selectedButton) {
    setSelected(selectedButton);
  }

  return (
    <Box className={screenSize ? "side-menu isLarge" : "side-menu isSmall"}>
      {/* <MenuButton
        screenSize={screenSize}
        onSelect={() => handleSelect("home")}
        isSelected={selected === "home"}
      >
        <Home />
        {screenSize && <Typography>Home</Typography>}
      </MenuButton> */}
      <MenuButton
        component="AdminDashboard"
        onSelect="admin"
        onButtonClick={onButtonClick}
        screenSize={screenSize}
        isSelected={selected === "admin"}
      >
        <ManageAccounts />
        {screenSize && <Typography>Admin</Typography>}
      </MenuButton>
      <MenuButton
        component="alarmMain"
        onSelect="alarm"
        onButtonClick={onButtonClick}
        screenSize={screenSize}
        isSelected={selected === "alarm"}
      >
        <NotificationsActive />
        {screenSize && <Typography>Alarm</Typography>}
      </MenuButton>
      <MenuButton
        component="assetDashboard"
        onSelect="asset"
        onButtonClick={onButtonClick}
        screenSize={screenSize}
        isSelected={selected === "assetDashboard"}
      >
        <BusinessCenter />
        {screenSize && <Typography>Asset</Typography>}
      </MenuButton>
      <MenuButton
        component="maintenanceDashboard"
        onSelect="maintenance"
        onButtonClick={onButtonClick}
        screenSize={screenSize}
        isSelected={selected === "maintenanceDashboard"}
      >
        <Handyman />
        {screenSize && <Typography>Maintenance</Typography>}
      </MenuButton>
      <MenuButton
        component="eventDashboard"
        onSelect="event"
        onButtonClick={onButtonClick}
        screenSize={screenSize}
        isSelected={selected === "event"}
      >
        <Event />
        {screenSize && <Typography>Event</Typography>}
      </MenuButton>
      <MenuButton
        component="trendMain"
        onSelect="trend"
        onButtonClick={onButtonClick}
        screenSize={screenSize}
        isSelected={selected === "trend"}
      >
        <Timeline />
        {screenSize && <Typography>Trend</Typography>}
      </MenuButton>
      <MenuButton
        component="workorderDashboard"
        onSelect="workorder"
        onButtonClick={onButtonClick}
        screenSize={screenSize}
        isSelected={selected === "work order"}
      >
        <Assignment />
        {screenSize && <Typography>Work Order</Typography>}
      </MenuButton>
      <MenuButton
        component="storeDashboard"
        onSelect="store"
        onButtonClick={onButtonClick}
        screenSize={screenSize}
        isSelected={selected === "store"}
      >
        <Inventory />
        {screenSize && <Typography>Store</Typography>}
      </MenuButton>
      <MenuButton
        screenSize={screenSize}
        onSelect={() => handleSelect("setting")}
        isSelected={selected === "setting"}
      >
        <Settings />
        {screenSize && <Typography>Setting</Typography>}
      </MenuButton>
    </Box>
  );
}
