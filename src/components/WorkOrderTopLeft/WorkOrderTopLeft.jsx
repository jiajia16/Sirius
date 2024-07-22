import * as React from 'react';
import {
    Box,
    Typography,
    Grid,
    Paper,
    CircularProgress,
    Tooltip,
} from '@mui/material';
import { PieChart, Pie, ResponsiveContainer, Cell, Tooltip as RechartsTooltip } from 'recharts';

const data1 = [
    { name: 'In-Progress', value: 66, color: '#1976d2' },
    { name: 'Closed', value: 20, color: '#00bcd4' },
];

const data2 = [
    { name: 'Outstanding By Trade Without Reason', value: 31, color: '#e91e63' },
    { name: 'Outstanding By Trade', value: 31, color: '#f44336' },
    { name: 'Outstanding By Fcc Without Reason', value: 33, color: '#2196f3' },
    { name: 'Outstanding By Fcc', value: 33, color: '#4caf50' },
    { name: 'Duplicate', value: 0, color: '#ff9800' },
    { name: 'Closed By Trade', value: 8, color: '#8bc34a' },
    { name: 'Closed By FCC', value: 10, color: '#9c27b0' },
];

const CustomPieChart = ({ data, title, subtitle }) => {
    return (
        <Paper elevation={10} sx={{ height: '100%', boxSizing: 'border-box' }}>
            <Typography variant="h6">{title}</Typography>
            <Typography variant="body2">{subtitle}</Typography>
            <Box sx={{ width: '100%', height: 'calc(100% - 88px)', position: 'relative' }}>
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            fill="#fff"
                            paddingAngle={5}
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Pie>
                        <RechartsTooltip />
                    </PieChart>
                </ResponsiveContainer>
            </Box>
        </Paper>
    );
};


export default function WorkOrderTopLeft() {
    return (
        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Typography variant="h7">Preventive Maintenance Each System Status</Typography>
            <Box sx={{ width: '100%', height: 'calc(100% - 158px)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <Grid container spacing={2} sx={{ width: '100%', height: '100%' }}>
                    <Grid item xs={12} sm={6} sx={{ height: '100%' }}>
                        <CustomPieChart
                            data={data1}
                            title="Total number of work orders and"
                            subtitle="status (86)"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} sx={{ height: '100%' }}>
                        <CustomPieChart
                            data={data2}
                            title="Total number of work orders assign"
                            subtitle="status (0)"
                        />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}