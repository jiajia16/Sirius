import React from 'react';
import {
    Box,
    Typography,
} from '@mui/material';

import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const COLORS = ['#4CAF50', '#607D8B', '#9E9E9E'];

const WorkOrderTopRight = () => {
    const data = [
        { day: 'Friday', closed: 3, inProgress: 4, open: 7 },
        { day: 'Saturday', closed: 4, inProgress: 12, open: 0 },
        { day: 'Sunday', closed: 4, inProgress: 13, open: 0 },
        { day: 'Monday', closed: 3, inProgress: 12, open: 0 },
        { day: 'Tuesday', closed: 2, inProgress: 8, open: 0 },
        { day: 'Wednesday', closed: 3, inProgress: 12, open: 0 },
        { day: 'Thursday', closed: 1, inProgress: 5, open: 0 },
    ];

    return (
        <Box sx={{ width: '100%', height: '100%', padding: 2 }}>
            <Typography variant="h6" gutterBottom>
                Preventive Maintenance Each System Status
            </Typography>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }} barSize={20}>
                    <XAxis dataKey="day" scale="band" padding={{ left: 10, right: 10 }} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="closed" stackId="a" fill={COLORS[0]} />
                    <Bar dataKey="inProgress" stackId="a" fill={COLORS[1]} />
                    <Bar dataKey="open" stackId="a" fill={COLORS[2]} />
                </BarChart>
            </ResponsiveContainer>
        </Box>
    );
};

export default WorkOrderTopRight;
