import "./MainPage.css";
import { Grid, Box } from "@mui/material";

import SideMenu from "../../components/SideMenu/SideMenu.jsx";
import TopBar from "../../components/TopBar/TopBar.jsx";
import AssetDashboard from "../../content/AssetDashboard.jsx";

function Main() {
  return (
    <Box sx={{ height: "100vh", p: "0 16px 0 16px" }}>
      <Grid container spacing={2} sx={{ height: "100%", border:'2px red solid' }}>
        {/* Top item */}
        <Grid item xs={12} sx={{ height: "10%", p: 0, border:'1px blue solid'}}>
          <TopBar></TopBar>
        </Grid>
        {/* Bottom items */}
        <Grid container item xs={12} spacing={2} sx={{ height: "85%", border:'1px black solid' }}>
          <Grid item xs={2} sx={{ height: "100%", border:'1px red solid'}}>
            <SideMenu></SideMenu>
          </Grid>
          <Grid item xs={10} sx={{ height: "100%", border:'1px red solid'}}>
            <AssetDashboard></AssetDashboard>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Main;
