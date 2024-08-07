import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom',
    },
    title: {
      display: true,
      text: 'Total number of Preventive Maintenance and Status',
      font: {
        size: 15,
      },
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
  elements: {
    bar: {
      borderRadius: 10,
    },
  },
};

const labels = ['All', 'Maintenance', 'Operation'];

const data = {
  labels,
  datasets: [
    {
      label: 'Impact',
      data: [0, 187, 65],
      backgroundColor: (context) => {
        const gradient = context.chart.ctx.createLinearGradient(0, 0, 0, 400);
        gradient.addColorStop(0, '#FFD700');
        gradient.addColorStop(1, '#FFA500');
        return gradient;
      },
      stack: 'Stack 0',
    },
    {
      label: 'All',
      data: [252, 0, 0],
      backgroundColor: (context) => {
        const gradient = context.chart.ctx.createLinearGradient(0, 0, 0, 400);
        gradient.addColorStop(0, '#C6D0E1');
        gradient.addColorStop(1, '#92A2B6');
        return gradient;
      },
      stack: 'Stack 0',
    },
  ],
};

export default function AlarmCountBarTrend() {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const handleMonthChange = (event) => {
    setSelectedMonth(parseInt(event.target.value));
  };

  const handleYearChange = (event) => {
    setSelectedYear(parseInt(event.target.value));
  };

  return (
    <Box sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 2,
        }}
      >
        <Typography variant="h7">Alert Impact</Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <select
            value={selectedMonth}
            onChange={handleMonthChange}
            style={{ fontSize: "0.75rem" }}
          >
            {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </select>
          <select
            value={selectedYear}
            onChange={handleYearChange}
            style={{ fontSize: "0.75rem" }}
          >
            {[2023, 2024, 2025].map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </Box>
      </Box>
      <Box sx={{ width: '100%', height: 'calc(100% - 50px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Box sx={{ width: '100%', height: '100%' }}>
          <Bar options={options} data={data} />
        </Box>
      </Box>
    </Box>
  );
}
