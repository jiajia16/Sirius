import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import WorkOrderTopLeft from "../../../components/WorkOrderTopLeft/WorkOrderTopLeft";
import WorkOrderTopRight from "../../../components/WorkOrderTopRight/WorkOrderTopRight";
import WorkOrderBottomLeft from "../../../components/WorkOrderBottomLeft/WorkOrderBottomLeft";
import WorkOrderBottomRight from "../../../components/WorkOrderBottomRight/WorkOrderBottomRight";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: "100%",
  //overflow: "auto", // use when want to see everything when elements is overflowing
}));

export default function WorkOrderDashboard() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Grid container sx={{ flex: 1, height: "100%" }} spacing={2}>
        <Grid container item xs={12} sx={{ height: "50%" }} spacing={2}>
          <Grid item xs={6} sx={{ height: "100%" }}>
            <Item sx={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <WorkOrderTopLeft />
            </Item>
          </Grid>
          <Grid item xs={6} sx={{ height: "100%" }}>
            <Item sx={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <WorkOrderTopRight />
            </Item>
          </Grid>
        </Grid>

        <Grid container item xs={12} sx={{ height: "50%" }} spacing={2}>
          <Grid item xs={6} sx={{ height: "100%" }}>
            <Item sx={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <WorkOrderBottomLeft />
            </Item>
          </Grid>
          <Grid item xs={6} sx={{ height: "100%" }}>
            <Item sx={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <WorkOrderBottomRight />
            </Item>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
