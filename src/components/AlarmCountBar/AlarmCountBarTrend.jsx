import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { useState } from "react";

export default function AlarmCountBarTrend() {
  return (
    <BarChart
      xAxis={[{ scaleType: 'band', data: ['jan', 'feb', 'mar', 'april', 'may', 'june', 'july', 'aug', 'sep', 'oct', 'nov', 'dec'] }]}
      series={[{ data: [4, 3, 5, 2, 3, 5, 8, 6, 7, 8, 3, 2], label: 'Total Alarms' }, { data: [1, 6, 3, 5, 4, 2, 1, 7, 5, 4, 6, 8], label: 'Faulty Alarms' }]}
      width={800}
      height={220}
    />
  );
}
