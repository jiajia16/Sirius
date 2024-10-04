import * as React from 'react';
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
    { name: "Aug-23", Scheduled: 0, Started: 0, Completed: 0, Closed: 0, Cancelled: 0, OverDue: 0 },
    { name: "Sep-23", Scheduled: 0, Started: 0, Completed: 0, Closed: 0, Cancelled: 0, OverDue: 0 },
    { name: "Oct-23", Scheduled: 0, Started: 0, Completed: 0, Closed: 0, Cancelled: 0, OverDue: 0 },
    { name: "Nov-23", Scheduled: 0, Started: 0, Completed: 0, Closed: 0, Cancelled: 0, OverDue: 0 },
    { name: "Dec-23", Scheduled: 0, Started: 0, Completed: 0, Closed: 0, Cancelled: 0, OverDue: 0 },
    { name: "Jan-24", Scheduled: 0, Started: 0, Completed: 0, Closed: 0, Cancelled: 0, OverDue: 0 },
    { name: "Feb-24", Scheduled: 0, Started: 0, Completed: 0, Closed: 0, Cancelled: 0, OverDue: 0 },
    { name: "Mar-24", Scheduled: 0, Started: 0, Completed: 0, Closed: 0, Cancelled: 0, OverDue: 0 },
    { name: "Apr-24", Scheduled: 0, Started: 0, Completed: 0, Closed: 0, Cancelled: 0, OverDue: 0 },
    { name: "May-24", Scheduled: 0, Started: 0, Completed: 0, Closed: 0, Cancelled: 0, OverDue: 0 },
    { name: "Jun-24", Scheduled: 1, Started: 0, Completed: 0, Closed: 0, Cancelled: 0, OverDue: 0 },
    { name: "Jul-24", Scheduled: 6, Started: 0, Completed: 0, Closed: 0, Cancelled: 0, OverDue: 0 },
];

export default function BarChartMaintenanceEachSys() {
    return (
        <Box sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Typography variant="h7">Preventive Maintenance Each System Status</Typography>
            <Box sx={{ width: '100%', height: 'calc(100% - 28px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
