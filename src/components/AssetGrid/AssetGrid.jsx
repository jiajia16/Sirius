import * as React from 'react';
import { useState } from "react";
import "../../content/AssetDashboard.css";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CircularProgress from "../CircularProgress/CircularProgress";
import AlarmCountBarTrend from '../AlarmCountBar/AlarmCountBarTrend';
import AlarmSystemTrend from '../AlarmCountSystem/AlarmSystemCount';
import AlarmData from '../AlarmsData/AlarmsData';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
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
            Active Alarms
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
            Alarms Count Trend
            <AlarmCountBarTrend></AlarmCountBarTrend>
          </Item>
        </Grid>
        <Grid item xs={7}>
          <Item>
            Alarms by System Chart
            <AlarmSystemTrend></AlarmSystemTrend>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            Alarms by Priority Count
            <div class="container">
                <div class="box red">
                    <h2>1</h2>
                    <p>High</p>
            </div>
            <div class="box yellow">
                    <h2>2</h2>
                    <p>Medium</p>
            </div>
            <div class="box green">
                    <h2>3</h2>
                    <p>Low</p>
            </div>
            </div>
          </Item>
        </Grid>
        <Grid item xs={11}>
            <Item>
                <AlarmData></AlarmData>
            </Item>
        </Grid>
      </Grid>
    </Box>
  );
}