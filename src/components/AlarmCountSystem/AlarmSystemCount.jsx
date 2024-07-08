import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { useState } from "react";

export default function AlarmSystemTrend() {
  return (
    <BarChart
      xAxis={[{ scaleType: 'band', data: ['System A', 'System B', 'System C'] }]}
      series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }]}
      width={900}
      height={190}
    />
  );
}
