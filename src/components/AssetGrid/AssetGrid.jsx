import * as React from "react";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import AlarmCountBarTrend from "../AlarmCountBar/AlarmCountBarTrend";
import AlarmsCount from "../AlarmsCountContainer/AlarmsCountContainer";
import AlarmSystemTrend from "../AlarmCountSystem/AlarmSystemCount";
import AlarmTable from "../AlarmData/AlarmDataTable";
import CircularProgress from "../CircularProgress/CircularProgress";
import AssetsFirstBox from "../AssetsFirstBox/AssetsFirstBox";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: "100%", // Ensure each item takes the full height of its container
  overflow: "hidden",
}));

export default function AssetGrid() {

  const percent = 50;
  const totalAlarm = 118;
  const totalAlarmOnline = 108;
  const [percentage, setPercentage] = useState(88);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        padding: 2,
      }}
    >
      <Grid container spacing={2} sx={{ height: "40%" }}>
        <Grid item xs={4} sx={{ height: "90%" }}>
          <Item>
            <AssetsFirstBox />
          </Item>
        </Grid>

        <Grid item xs={8} sx={{ height: "90%" }}>
          <Item>
            <AlarmCountBarTrend />
          </Item>
        </Grid>
      </Grid>

      <Grid container spacing={2} sx={{ height: "40%" }}>
        <Grid item xs={8} sx={{ height: "90%" }}>
          <Item>
            <AlarmSystemTrend />
          </Item>
        </Grid>

        <Grid item xs={4} sx={{ height: "90%" }}>
          <Item>
            <AlarmsCount />
          </Item>
        </Grid>
      </Grid>

      <Grid container spacing={2} sx={{ height: "30%" }}>
        <Grid item xs={12} sx={{ height: "90%" }}>
          <Item>
            <AlarmTable />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
