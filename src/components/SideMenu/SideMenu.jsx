import "./SideMenu.css";
import MenuButton from "./MenuButton.jsx";
import { useState } from "react";
import { Link } from "react-router-dom";
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
  const screenSize = useMediaQuery("(min-width:1200px)");
  const [selected, setSelected] = useState();

  function handleSelect(selectedButton) {
    setSelected(selectedButton);
  }

  return (
    <Box className={screenSize ? "side-menu isLarge" : "side-menu isSmall"}>
      <MenuButton
        value={screenSize}
        onSelect={() => handleSelect("home")}
        isSelected={selected === "home"}
      >
        <Home />
        {screenSize && <Typography>Home</Typography>}
      </MenuButton>
      <MenuButton
        value={screenSize}
        onSelect={() => handleSelect("admin")}
        isSelected={selected === "admin"}
      >
        <ManageAccounts />
        {screenSize && <Typography>Admin</Typography>}
      </MenuButton>
      <MenuButton
        value={screenSize}
        onSelect={() => handleSelect("alarm")}
        isSelected={selected === "alarm"}
      >
        <NotificationsActive />
        {screenSize && <Typography>Alarm</Typography>}
      </MenuButton>
      <MenuButton
        component="assetDashboard"
        value={screenSize}
        onSelect={() => handleSelect("assetDashboard")}
        isSelected={selected === "assetDashboard"}
      >
        <BusinessCenter />
        {screenSize && <Typography>Asset</Typography>}
      </MenuButton>
      <MenuButton
        component="maintenanceDashboard"
        value={screenSize}
        onSelect={() => handleSelect("maintenanceDashboard")}
        isSelected={selected === "maintenanceDashboard"}
      >
        <Handyman />
        {screenSize && <Typography>Maintenance</Typography>}
      </MenuButton>
      <MenuButton
        value={screenSize}
        onSelect={() => handleSelect("event")}
        isSelected={selected === "event"}
      >
        <Event />
        {screenSize && <Typography>Event</Typography>}
      </MenuButton>
      <MenuButton
        value={screenSize}
        onSelect={() => handleSelect("trend")}
        isSelected={selected === "trend"}
      >
        <Timeline />
        {screenSize && <Typography>Trend</Typography>}
      </MenuButton>
      <MenuButton
        component="workorderDashboard"
        value={screenSize}
        onSelect={() => handleSelect("work order")}
        isSelected={selected === "work order"}
      >
        <Assignment />
        {screenSize && <Typography>Work Order</Typography>}
      </MenuButton>
      <MenuButton
        value={screenSize}
        onSelect={() => handleSelect("store")}
        isSelected={selected === "store"}
      >
        <Inventory />
        {screenSize && <Typography>Store</Typography>}
      </MenuButton>
      <MenuButton
        value={screenSize}
        onSelect={() => handleSelect("setting")}
        isSelected={selected === "setting"}
      >
        <Settings />
        {screenSize && <Typography>Setting</Typography>}
      </MenuButton>
    </Box>
  );
}
