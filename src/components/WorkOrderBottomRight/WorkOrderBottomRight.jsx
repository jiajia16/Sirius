import React, { useState } from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Legend,
    ResponsiveContainer,
} from "recharts";
import { Typography, Box } from '@mui/material';
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8", "#82ca9d", "#a4de6c", "#d0d1e6", "#f4cae4"];

const barChartData = [
    { name: "Monday", Scheduled: 0, Started: 0, Completed: 0.5, Closed: 1, Cancelled: 2, OverDue: 1 },
    { name: "Tuesday", Scheduled: 0, Started: 0, Completed: 1, Closed: 2, Cancelled: 1, OverDue: 3 },
    { name: "Wednesday", Scheduled: 0, Started: 0, Completed: 2, Closed: 0.5, Cancelled: 3, OverDue: 2 },
    { name: "Thursday", Scheduled: 0, Started: 0, Completed: 1, Closed: 1, Cancelled: 0.5, OverDue: 1 },
    { name: "Friday", Scheduled: 0, Started: 0, Completed: 3, Closed: 1, Cancelled: 4, OverDue: 0.5 },
    { name: "Saturday", Scheduled: 0, Started: 0, Completed: 2, Closed: 3.5, Cancelled: 1, OverDue: 3 },
    { name: "Sunday", Scheduled: 0, Started: 0, Completed: 1, Closed: 2, Cancelled: 2, OverDue: 4 },
];

export default function WorkOrderBottomRight() {
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
                <Typography variant="h7" sx={{ fontWeight: "bold" }}>
                    Total Work Orders Status Count For Each System
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <select
                        value={selectedMonth}
                        onChange={handleMonthChange}
                        style={{ fontSize: "0.75rem", padding: "2px" }}
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
                        style={{ fontSize: "0.75rem", padding: "2px" }}
                    >
                        {[2023, 2024, 2025].map((year) => (
                            <option key={year} value={year}>
                                {year}
                            </option>
                        ))}
                    </select>
                </Box>            </Box>
            <Box sx={{ width: '100%', height: 'calc(100% - 28px)' }}>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={barChartData}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <CartesianGrid stroke="#ccc" />
                        <Legend />
                        <Bar dataKey="Scheduled" fill="#0088FE" />
                        <Bar dataKey="Started" fill="#00C49F" />
                        <Bar dataKey="Completed" fill="#FFBB28" />
                        <Bar dataKey="Closed" fill="#FF8042" />
                        <Bar dataKey="Cancelled" fill="#8884d8" />
                        <Bar dataKey="OverDue" fill="#82ca9d" />
                    </BarChart>
                </ResponsiveContainer>
            </Box>
        </Box>
    );
}
