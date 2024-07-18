import * as React from "react";
import { useState } from "react";
import "../../content/Asset/Dashboard/AssetDashboard.css";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CircularProgress from "../CircularProgress/CircularProgress";
import AlarmCountBarTrend from "../AlarmCountBar/AlarmCountBarTrend";
import AlarmSystemTrend from "../AlarmCountSystem/AlarmSystemCount";
import AlarmsCount from "../AlarmsCountContainer/AlarmsCountContainer";
import AlarmTable from "../AlarmData/AlarmDataTable";

const Item = styled(Paper)(({ theme, height }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: height,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
}));

const Item1 = styled(Paper)(({ theme, height }) => ({
  backgroundColor: "rgba(135, 206, 235, 0.5)",
  padding: theme.spacing(2),
  borderRadius: theme.spacing(1),
  height: height,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
}));

export default function AssetGrid() {
  const percent = 50;
  const totalAlarm = 118;
  const totalAlarmOnline = 108;
  const [percentage, setPercentage] = useState(88);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Item height="180px">
            <Box
              component="div"
              className="alarm-box"
              sx={{ width: "100%", ml: 3 }}
            >
              <Typography component="div" className="alarm-title">
                Assets
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: "80%",
              }}
            >
              <CircularProgress percentage={percentage} />
              <Box sx={{ display: "flex", flexDirection: "column", ml: 6 }}>
                <Typography variant="h6">Total</Typography>
                <Typography variant="h5">{totalAlarm}</Typography>
                <Typography variant="h6" className="online">
                  Online
                </Typography>
                <Typography variant="h5" className="online">
                  {totalAlarmOnline}
                </Typography>
              </Box>
            </Box>
          </Item>
        </Grid>

        <Grid item xs={12} md={8}>
          <Item height="180px">
            <Box
              component="div"
              className="alarm-box"
              sx={{ width: "100%", ml: 3 }}
            >
              <Typography component="div" className="alarm-title">
                Alarm Count
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <AlarmCountBarTrend />
            </Box>
          </Item>
        </Grid>

        <Grid item xs={12} md={8}>
          <Item1 height="180px">
            <Box component="div" className="alarm-box" sx={{ width: "100%" }}>
              <Typography component="div" className="alarm-title">
                Active Alarms by System
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <AlarmSystemTrend />
            </Box>
          </Item1>
        </Grid>

        <Grid item xs={12} md={4}>
          <Item height="196px">
            <Box
              component="div"
              className="alarm-box"
              sx={{ width: "100%", ml: 3 }}
            >
              <Typography component="div" className="alarm-title">
                Active Alarms by Priority
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", mt: 2 }}>
              <AlarmsCount />
            </Box>
          </Item>
        </Grid>

        <Grid item xs={12}>
          <Item height="320px">
            <Box component="div" className="alarm-box" sx={{ width: "100%" }}>
              <Typography component="div" className="alarm-title">
                Alarms
              </Typography>
            </Box>
            <Box sx={{ width: "100%", height: "100%" }}>
              <AlarmTable />
            </Box>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
