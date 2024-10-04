import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import CircleIcon from '@mui/icons-material/Circle';

const priorityColors = {
    high: 'red',
    medium: 'yellow',
    low: 'green'
};

const data = [
    { priority: 'high', equipment: 'DDC-8-2', alarmInfo: 'DDC-8-2 network intermittent', location: 'L8', value: 34, occuredOn: '2024-07-01 12:00:00', ackedBy: 'ACK', clearedOn: '2024-07-02 12:00:00' },
    { priority: 'low', equipment: 'DDC-8-3', alarmInfo: 'DDC-8-3 network intermittent', location: 'L9', value: 56, occuredOn: '2024-07-01 13:00:00', ackedBy: 'ACK', clearedOn: '2024-07-02 13:00:00' },
    { priority: 'medium', equipment: 'DDC-8-4', alarmInfo: 'DDC-8-4 network intermittent', location: 'L10', value: 78, occuredOn: '2024-07-01 14:00:00', ackedBy: 'ACK', clearedOn: '2024-07-02 14:00:00' },
    { priority: 'high', equipment: 'DDC-8-5', alarmInfo: 'DDC-8-5 network intermittent', location: 'L11', value: 90, occuredOn: '2024-07-01 15:00:00', ackedBy: 'ACK', clearedOn: '2024-07-02 15:00:00' },
    { priority: 'low', equipment: 'DDC-8-6', alarmInfo: 'DDC-8-6 network intermittent', location: 'L12', value: 12, occuredOn: '2024-07-01 16:00:00', ackedBy: 'ACK', clearedOn: '2024-07-02 16:00:00' },
    { priority: 'medium', equipment: 'DDC-8-7', alarmInfo: 'DDC-8-7 network intermittent', location: 'L13', value: 23, occuredOn: '2024-07-01 17:00:00', ackedBy: 'ACK', clearedOn: '2024-07-02 17:00:00' },
    { priority: 'high', equipment: 'DDC-8-8', alarmInfo: 'DDC-8-8 network intermittent', location: 'L14', value: 34, occuredOn: '2024-07-01 18:00:00', ackedBy: 'ACK', clearedOn: '2024-07-02 18:00:00' },
    { priority: 'low', equipment: 'DDC-8-9', alarmInfo: 'DDC-8-9 network intermittent', location: 'L15', value: 45, occuredOn: '2024-07-01 19:00:00', ackedBy: 'ACK', clearedOn: '2024-07-02 19:00:00' },
    { priority: 'medium', equipment: 'DDC-8-10', alarmInfo: 'DDC-8-10 network intermittent', location: 'L16', value: 56, occuredOn: '2024-07-01 20:00:00', ackedBy: 'ACK', clearedOn: '2024-07-02 20:00:00' },
    { priority: 'high', equipment: 'DDC-8-11', alarmInfo: 'DDC-8-11 network intermittent', location: 'L17', value: 67, occuredOn: '2024-07-01 21:00:00', ackedBy: 'ACK', clearedOn: '2024-07-02 21:00:00' },
    { priority: 'low', equipment: 'DDC-8-12', alarmInfo: 'DDC-8-12 network intermittent', location: 'L18', value: 78, occuredOn: '2024-07-01 22:00:00', ackedBy: 'ACK', clearedOn: '2024-07-02 22:00:00' },
    { priority: 'medium', equipment: 'DDC-8-13', alarmInfo: 'DDC-8-13 network intermittent', location: 'L19', value: 89, occuredOn: '2024-07-01 23:00:00', ackedBy: 'ACK', clearedOn: '2024-07-02 23:00:00' },
    { priority: 'high', equipment: 'DDC-8-14', alarmInfo: 'DDC-8-14 network intermittent', location: 'L20', value: 10, occuredOn: '2024-07-01 00:00:00', ackedBy: 'ACK', clearedOn: '2024-07-02 00:00:00' },
    { priority: 'low', equipment: 'DDC-8-15', alarmInfo: 'DDC-8-15 network intermittent', location: 'L21', value: 21, occuredOn: '2024-07-02 01:00:00', ackedBy: 'ACK', clearedOn: '2024-07-03 01:00:00' },
    { priority: 'medium', equipment: 'DDC-8-16', alarmInfo: 'DDC-8-16 network intermittent', location: 'L22', value: 32, occuredOn: '2024-07-02 02:00:00', ackedBy: 'ACK', clearedOn: '2024-07-03 02:00:00' },
    { priority: 'high', equipment: 'DDC-8-17', alarmInfo: 'DDC-8-17 network intermittent', location: 'L23', value: 43, occuredOn: '2024-07-02 03:00:00', ackedBy: 'ACK', clearedOn: '2024-07-03 03:00:00' },
    { priority: 'low', equipment: 'DDC-8-18', alarmInfo: 'DDC-8-18 network intermittent', location: 'L24', value: 54, occuredOn: '2024-07-02 04:00:00', ackedBy: 'ACK', clearedOn: '2024-07-03 04:00:00' },
    { priority: 'medium', equipment: 'DDC-8-19', alarmInfo: 'DDC-8-19 network intermittent', location: 'L25', value: 65, occuredOn: '2024-07-02 05:00:00', ackedBy: 'ACK', clearedOn: '2024-07-03 05:00:00' },
    { priority: 'high', equipment: 'DDC-8-20', alarmInfo: 'DDC-8-20 network intermittent', location: 'L26', value: 76, occuredOn: '2024-07-02 06:00:00', ackedBy: 'ACK', clearedOn: '2024-07-03 06:00:00' },
];

const AckedBy = styled(Box)(({ theme }) => ({
    backgroundColor: 'blue',
    color: 'white',
    padding: theme.spacing(0.5),
    borderRadius: theme.shape.borderRadius,
    display: 'inline-block'
}));

export default function AlarmTable() {
    return (
        <Box sx={{ flexGrow: 1, height: '30vh', overflow: 'auto' }}>
            <TableContainer component={Paper}>
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell>Priority</TableCell>
                            <TableCell>Equipment</TableCell>
                            <TableCell>Alarm Information</TableCell>
                            <TableCell>Location</TableCell>
                            <TableCell>Value</TableCell>
                            <TableCell>Occurred On</TableCell>
                            <TableCell>Acked By</TableCell>
                            <TableCell>Acked On</TableCell>
                            <TableCell>Cleared On</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row, index) => (
                            <TableRow key={index}>
                                <TableCell>
                                    <CircleIcon style={{ color: priorityColors[row.priority] }} />
                                </TableCell>
                                <TableCell>{row.equipment}</TableCell>
                                <TableCell>{row.alarmInfo}</TableCell>
                                <TableCell>{row.location}</TableCell>
                                <TableCell>{row.value}</TableCell>
                                <TableCell>{row.occuredOn}</TableCell>
                                <TableCell>
                                    <AckedBy>{row.ackedBy}</AckedBy>
                                </TableCell>
                                <TableCell></TableCell>
                                <TableCell>{row.clearedOn}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}
