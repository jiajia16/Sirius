import * as React from 'react';
import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
} from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8", "#82ca9d", "#a4de6c", "#d0d1e6", "#f4cae4"];


const data = [
    { name: "Scheduled", value: 6 },
    { name: "Cancelled", value: 0 },
    { name: "OverDue", value: 0 },
    { name: "Closed", value: 1 },
    { name: "Started", value: 0 },
    { name: "Completed", value: 0 },
];


export default function PieChartMaintenance() {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <PieChart>
                <Pie data={data} cx="50%" cy="50%" outerRadius={60} fill="#8884d8">
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>
        </ResponsiveContainer>

    );
}