import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { useState } from "react";

export default function AlarmCountBarTrend() {
  return (
    <BarChart
      xAxis={[{ scaleType: 'band', data: ['jan', 'feb', 'mar'] }]}
      series={[{ data: [4, 3, 5], label: 'Total Alarms' }, { data: [1, 6, 3], label: 'Faulty Alarms' }]}
      width={800}
      height={220}
    />
  );
}
