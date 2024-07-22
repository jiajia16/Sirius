import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { ResponsiveContainer } from "recharts";
import { Typography } from "@mui/material";
import WorkOrderTopLeft from "../../../components/WorkOrderTopLeft/WorkOrderTopLeft";
import WorkOrderTopRight from "../../../components/WorkOrderTopRight/WorkOrderTopRight";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: "100%", // Ensure each item takes the full height of its container
  overflow: "hidden",
}));

export default function WorkOrderDashboard() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <Grid container sx={{ flex: 1 }}>
        <Grid container item xs={12} sx={{ flex: 1 }}>
          <Grid item xs={6} sx={{ height: "80%" }}>
            <Item>
              <WorkOrderTopLeft></WorkOrderTopLeft>
            </Item>

          </Grid>

          <Grid item xs={6} sx={{ height: "80%" }}>
            <Item>
              <WorkOrderTopRight></WorkOrderTopRight>
            </Item>
          </Grid>
        </Grid>

        <Grid container item xs={12} sx={{ flex: 1 }}>
          <Grid item xs={6} sx={{ height: "90%" }}>
            <Item>
            </Item>
          </Grid>

          <Grid item xs={6} sx={{ height: "90%" }}>
            <Item>
            </Item>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
