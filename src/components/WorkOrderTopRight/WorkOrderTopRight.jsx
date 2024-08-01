import React, { useState } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Box, Typography } from '@mui/material';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ChartDataLabels // Register the datalabels plugin
);

const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'bottom',
        },
        datalabels: {
            color: 'white',
            anchor: 'end',
            align: 'top',
            font: {
                weight: 'bold',
                size: 10, // Reduce font size
            },
            formatter: (value) => value,
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

const labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const data = {
    labels,
    datasets: [
        {
            label: 'Open',
            data: [5, 6, 7, 5, 3],
            backgroundColor: '#FF5733',
            stack: 'Stack 0',
        },
        {
            label: 'In Progress',
            data: [3, 7, 5, 8, 6, 3, 2],
            backgroundColor: '#33FF57',
            stack: 'Stack 0',
        },
        {
            label: 'Completed',
            data: [6, 4, 8, 6, 7, 5, 4],
            backgroundColor: '#3357FF',
            stack: 'Stack 0',
        },
        {
            label: 'Duplicate',
            data: [1, 2, 1, 2, 1, 1, 1],
            backgroundColor: '#FFC300',
            stack: 'Stack 0',
        },
        {
            label: 'Closed',
            data: [4, 6, 3, 5, 4, 3, 2],
            backgroundColor: '#C70039',
            stack: 'Stack 0',
        },
    ],
};

export default function WorkOrderTopLeft() {
    const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

    const handleMonthChange = (event) => {
        setSelectedMonth(parseInt(event.target.value));
    };

    const handleYearChange = (event) => {
        setSelectedYear(parseInt(event.target.value));
    };

    return (
        <Box sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2px' }}>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2 }}>
                <Typography variant="subtitle1" sx={{ fontSize: '0.75rem' }}>Total Work Orders status count</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <select value={selectedMonth} onChange={handleMonthChange} style={{ fontSize: '0.75rem', padding: '2px' }}>
                        {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
                            <option key={month} value={month}>
                                {month}
                            </option>
                        ))}
                    </select>
                    <select value={selectedYear} onChange={handleYearChange} style={{ fontSize: '0.75rem', padding: '2px' }}>
                        {[2023, 2024, 2025].map((year) => (
                            <option key={year} value={year}>
                                {year}
                            </option>
                        ))}
                    </select>
                </Box>
            </Box>
            <Box sx={{ width: '100%', height: 'calc(100% - 40px)' }}>
                <Bar options={options} data={data} />
            </Box>
        </Box>
    );
}
