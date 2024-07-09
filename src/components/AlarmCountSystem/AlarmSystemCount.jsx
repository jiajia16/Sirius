import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import "../../content/AssetDashboard.css";

export default function AlarmSystemTrend() {
  const data = [
    { system: 'System A', high: 4, medium: 1 },
    { system: 'System B', high: 3, medium: 6 },
    { system: 'System C', high: 5, medium: 3 },
    { system: 'System D', high: 6, medium: 4 },
    { system: 'System E', high: 8, medium: 2 },
    { system: 'System F', high: 9, medium: 8 },
    { system: 'System G', high: 7, medium: 4 },

  ];

  return (
    <div className="bar-chart-container">
      <BarChart
        xAxis={[{ scaleType: 'band', data: data.map(item => item.system) }]}
        series={[
          { data: data.map(item => item.high), color: '#43b1d6' },
          { data: data.map(item => item.medium), color: '#c3f833' },
        ]}
        width={900}
        height={190}
      />
    </div>
  );
}

