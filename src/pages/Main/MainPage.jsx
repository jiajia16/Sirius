import "./MainPage.css";
import { Grid, Box } from "@mui/material";

import SideMenu from "../../components/SideMenu/SideMenu.jsx";
import TopBar from "../../components/TopBar/TopBar.jsx";
import AssetDashboard from "../../content/Asset/Dashboard/AssetDashboard.jsx";

function Main() {
  return (
    <Box sx={{ height: "100vh", p: "0 16px 0 16px" }}>
            <AssetDashboard></AssetDashboard>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Main;
