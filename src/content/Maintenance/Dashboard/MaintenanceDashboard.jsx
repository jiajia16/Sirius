import "./MaintenanceDashboard.css";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import PieChartMaintenance from "../../../components/PieChartMaintenance/PieChartMaintenance";
import BarChartMaintenanceOverall from "../../../components/BarChartMaintenanceOverall/BarChartMaintenanceOverall";
import BarChartMaintenanceYearly from "../../../components/BarChartMaintenanceYearly/BarChartMaintenanceYearly";
import BarChartMaintenanceEachSys from "../../../components/BarChartMaintenanceEachSys/BarChartMaintenanceEachSys";
import { ResponsiveContainer } from "recharts";
import { Typography } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: "100%", // Ensure each item takes the full height of its container
  overflow: "hidden",
}));

export default function MaintenanceDashboard() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Grid container sx={{ flex: 1 }}>
        <Grid container item xs={12} sx={{ flex: 1 }}>
          <Grid item xs={6} sx={{ height: "93%" }}>

            <Item sx={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <PieChartMaintenance />
            </Item>

          </Grid>

          <Grid item xs={6} sx={{ height: "93%" }}>
            <Item>
              <BarChartMaintenanceOverall />
            </Item>
          </Grid>
        </Grid>

        <Grid container item xs={12} sx={{ flex: 1 }}>
          <Grid item xs={6} sx={{ height: "93%" }}>
            <Item>
              <BarChartMaintenanceYearly />
            </Item>
          </Grid>

          <Grid item xs={6} sx={{ height: "93%" }}>
            <Item>
              <BarChartMaintenanceEachSys />
            </Item>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
