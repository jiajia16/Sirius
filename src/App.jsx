import "./App.css";
import { styled } from "@mui/material/styles";
import { Grid, Box, Paper } from "@mui/material";

import SideMenu from "./components/SideMenu/SideMenu.jsx";
import TopBar from "./components/TopBar/TopBar.jsx";
import AssetDashboard from "./content/AssetDashboard.jsx";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function App() {
  return (
    <Box sx={{ height: "100vh", p: '0 16px 0 16px' }}>
      <Grid container spacing={2} sx={{ height: "100%" }}>
        {/* Top item */}
        <Grid item xs={12} sx={{ height: "10%", p:0}}>
          <TopBar></TopBar>
        </Grid>
        {/* Bottom items */}
        <Grid container item xs={12} spacing={2} sx={{ height: "85%" }}>
          <Grid item xs={2} sx={{ height: "100%" }}>
            <SideMenu></SideMenu>
          </Grid>
          <Grid item xs={10} sx={{ height: "100%" }}>
            <Item>Bottom Right Item</Item>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
