import { Typography, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Legend,
    ResponsiveContainer,
} from "recharts";

const data = [
    { name: "Aug-23", Scheduled: 1, Started: 2, Completed: 1, Closed: 0, Cancelled: 0, OverDue: 0 },
    { name: "Sep-23", Scheduled: 3, Started: 4, Completed: 3, Closed: 0, Cancelled: 0, OverDue: 0 },
    { name: "Oct-23", Scheduled: 6, Started: 6, Completed: 5, Closed: 0, Cancelled: 0, OverDue: 0 },
    { name: "Nov-23", Scheduled: 3, Started: 8, Completed: 6, Closed: 0, Cancelled: 0, OverDue: 0 },
    { name: "Dec-23", Scheduled: 4, Started: 7, Completed: 5, Closed: 0, Cancelled: 0, OverDue: 0 },
    { name: "Jan-24", Scheduled: 2, Started: 5, Completed: 3, Closed: 0, Cancelled: 0, OverDue: 0 },
    { name: "Feb-24", Scheduled: 1, Started: 3, Completed: 8, Closed: 0, Cancelled: 0, OverDue: 0 },
    { name: "Mar-24", Scheduled: 8, Started: 1, Completed: 9, Closed: 0, Cancelled: 0, OverDue: 0 },
    { name: "Apr-24", Scheduled: 9, Started: 4, Completed: 4, Closed: 0, Cancelled: 0, OverDue: 0 },
    { name: "May-24", Scheduled: 5, Started: 6, Completed: 3, Closed: 0, Cancelled: 0, OverDue: 0 },
    { name: "Jun-24", Scheduled: 4, Started: 8, Completed: 1, Closed: 0, Cancelled: 0, OverDue: 0 },
    { name: "Jul-24", Scheduled: 2, Started: 3, Completed: 2, Closed: 0, Cancelled: 0, OverDue: 0 },
];

export default function BarChartMaintenanceEachSys() {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid stroke="#ccc" />
                <Legend />
                <Bar dataKey="Scheduled" fill="#0088FE" barSize={90} />
                <Bar dataKey="Started" fill="#00C49F" barSize={90} />
                <Bar dataKey="Completed" fill="#FFBB28" barSize={90} />
                <Bar dataKey="Closed" fill="#FF8042" barSize={90} />
                <Bar dataKey="Cancelled" fill="#8884d8" barSize={90} />
                <Bar dataKey="OverDue" fill="#82ca9d" barSize={90} />
            </BarChart>
        </ResponsiveContainer>
    );
}
