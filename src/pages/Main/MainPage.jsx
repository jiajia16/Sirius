import "./MainPage.css";
import { Grid, Box } from "@mui/material";
import { Outlet } from "react-router-dom";

import SideMenu from "../../components/SideMenu/SideMenu.jsx";
import TopBar from "../../components/TopBar/TopBar.jsx";

function Main() {
  return (
    <Box sx={{ height: "100vh", p: "0 16px 0 16px" }}>
      <Grid container spacing={2} sx={{ height: "100%" }}>
        {/* Top items */}
        <Grid item xs={12} sx={{ height: "10%", p: 0 }}>
          <TopBar />
        </Grid>
        {/* Bottom items */}
        <Grid container item xs={12} spacing={2} sx={{ height: "85%" }}>
          <Grid item xs={2} sx={{ height: "100%" }}>
            <SideMenu />
          </Grid>
          <Grid item xs={10} sx={{ height: "100%" }}>
            <Outlet />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Main;
