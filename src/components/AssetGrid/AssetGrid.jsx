import * as React from 'react';
import { useState } from "react";
import "../../content/AssetDashboard.css";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CircularProgress from "../CircularProgress/CircularProgress";
import AlarmCountBarTrend from '../AlarmCountBar/AlarmCountBarTrend';
import AlarmSystemTrend from '../AlarmCountSystem/AlarmSystemCount';
import AlarmData from '../AlarmsData/AlarmsData';
import AlarmsCount from '../AlarmsCountContainer/AlarmsCountContainer';




const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Item1 = styled(Grid)(({ theme }) => ({
  backgroundColor: 'rgba(135, 206, 235, 0.5)', // Background color for the Grid item
  padding: theme.spacing(2), // Padding for the Grid item content
  borderRadius: theme.spacing(1), // Optional: Rounded corners for the Grid item
}));



export default function AssetGrid() {

  const percent = 50;
  const totalAlarm = 118;
  const totalAlarmOnline = 108;
  const [percentage, setPercentage] = useState(88);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Item>
            <Box component="div" className="alarm-box">
              <Typography component="div" className="alarm-title">
                Active Alarms
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', mt: 2, ml: 10 }}>
              <CircularProgress percentage={percentage} />
              <Box sx={{ display: 'flex', flexDirection: 'column', ml: 12 }}>
                <h3>Total</h3>
                <h1>{totalAlarm}</h1>
                <h3 className="online">Online</h3>
                <h1 className="online">{totalAlarmOnline}</h1>
              </Box>
            </Box>
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>
            <Box component="div" className="alarm-box">
              <Typography component="div" className="alarm-title">
                Alarm Count Trend
              </Typography>
            </Box>
            <AlarmCountBarTrend></AlarmCountBarTrend>
          </Item>
        </Grid>

        <Grid item xs={7}>
          <Item1>
            <Box component="div" className="alarm-box">
              <Typography component="div" className="alarm-title">
                Alarms by System Chart
              </Typography>
            </Box>
            <AlarmSystemTrend />
          </Item1>

        </Grid>

        <Grid item xs={4}>
          <Item>
            <Box component="div" className="alarm-box">
              <Typography component="div" className="alarm-title">
                Alarms by Priority Count
              </Typography>
            </Box>
            <AlarmsCount></AlarmsCount>

          </Item>
        </Grid>
        <Grid item xs={11}>
          <Item>
            <Box component="div" className="alarm-box">
              <Typography component="div" className="alarm-title">
                Alarms
              </Typography>
            </Box>
            <AlarmData></AlarmData>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}

