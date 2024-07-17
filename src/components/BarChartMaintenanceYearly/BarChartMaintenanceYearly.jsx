import {
    PieChart,
    Pie,
    Cell,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Legend,
    ResponsiveContainer,
    LineChart,
    Line,
    Tooltip,
} from "recharts";

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

export default function BarChartMaintenanceYearly() {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart data={barChartData}>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid stroke="#ccc" />
                <Legend />
                <Line type="monotone" dataKey="Scheduled" stroke="#0088FE" />
                <Line type="monotone" dataKey="Started" stroke="#00C49F" />
                <Line type="monotone" dataKey="Completed" stroke="#FFBB28" />
                <Line type="monotone" dataKey="Closed" stroke="#FF8042" />
                <Line type="monotone" dataKey="Cancelled" stroke="#8884d8" />
                <Line type="monotone" dataKey="OverDue" stroke="#82ca9d" />
            </LineChart>
        </ResponsiveContainer>
    );

}