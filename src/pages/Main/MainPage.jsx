import "./MainPage.css";
import { Grid, Box } from "@mui/material";

import SideMenu from "../../components/SideMenu/SideMenu.jsx";
import TopBar from "../../components/TopBar/TopBar.jsx";
import AssetDashboard from "../../content/Asset/Dashboard/AssetDashboard.jsx";
import MaintenanceDashboard from "../../content/Maintenance/Dashboard/MaintenanceDashboard.jsx";

function Main() {
  return (
    <Box sx={{ height: "100vh", p: "0 16px 0 16px" }}>
      <Grid container spacing={2} sx={{ height: "100%" }}>
        {/* Top items */}
        <Grid item xs={12} sx={{ height: "10%", p: 0 }}>
          <TopBar></TopBar>
        </Grid>
        {/* Bottom items */}
        <Grid container item xs={12} spacing={2} sx={{ height: "85%" }}>
          <Grid item xs={2} sx={{ height: "100%" }}>
            <SideMenu></SideMenu>
          </Grid>
          <Grid item xs={10} sx={{ height: "100%", border: "1px red solid" }}>
            <AssetDashboard></AssetDashboard>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Main;
