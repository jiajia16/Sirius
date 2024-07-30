import React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { ResponsiveContainer } from "recharts";

Chart.register(ArcElement, Tooltip, Legend);

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    boxShadow: "none",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
}));

const pieData1 = {
    labels: ["In-Progress", "Closed"],
    datasets: [
        {
            data: [66, 20],
            backgroundColor: ["#2f4f4f", "#4682b4"],
            hoverBackgroundColor: ["#2e8b57", "#5f9ea0"],
        },
    ],
};

const pieData2 = {
    labels: [
        "Outstanding By Trade Without Reason",
        "Outstanding By Trade",
        "Closed By FCC",
        "Closed By Trade",
        "Duplicate",
        "Outstanding By FCC",
        "Outstanding By FCC Without Reason",
    ],
    datasets: [
        {
            data: [31, 31, 10, 8, 0, 33, 33],
            backgroundColor: [
                "#ff6347",
                "#ff4500",
                "#ffd700",
                "#daa520",
                "#d3d3d3",
                "#8b0000",
                "#800000",
            ],
            hoverBackgroundColor: [
                "#ff7f50",
                "#ff8c00",
                "#ffec8b",
                "#b8860b",
                "#a9a9a9",
                "#ff4500",
                "#a52a2a",
            ],
        },
    ],
};

const options = {
    plugins: {
        legend: {
            display: false,
        },
        tooltip: {
            callbacks: {
                label: function (context) {
                    let label = context.label || '';
                    if (label) {
                        label += ': ';
                    }
                    if (context.raw !== null) {
                        label += context.raw;
                    }
                    return label;
                },
            },
        },
    },
    maintainAspectRatio: false,
};

export default function WorkOrderDashboard() {
    return (
        <Box
            sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Typography variant="h7" align="center" sx={{ mb: 2 }}>
                Total Work Orders Status And Assign Status Count
            </Typography>
            <Box
                sx={{
                    width: "100%",
                    height: "calc(100% - 80px)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
                    <FormControlLabel
                        control={<Checkbox defaultChecked />}
                        label="Weekly"
                    />
                    <FormControlLabel control={<Checkbox />} label="Monthly" />
                </Box>
                <Grid container spacing={2} sx={{ flex: 1, height: "100%" }}>
                    <Grid item xs={6} sx={{ height: "100%", height: "calc(100% - 20px)" }}>
                        <Item>
                            <Typography
                                variant="body2"
                                sx={{
                                    mb: 2,
                                    wordWrap: "break-word",
                                    whiteSpace: "normal",
                                }}
                            >
                                Total number of work orders and status (86) (Weekly)
                            </Typography>
                            <Box sx={{ width: "100%", height: "calc(100% - 20px)" }}>
                                <Pie data={pieData1} options={options} />
                            </Box>
                        </Item>
                    </Grid>
                    <Grid item xs={6} sx={{ height: "100%", height: "calc(100% - 20px)" }}>
                        <Item>
                            <Typography
                                variant="body2"
                                sx={{
                                    mb: 2,
                                    wordWrap: "break-word",
                                    whiteSpace: "normal",
                                }}
                            >
                                Total number of work orders assign status (0) (Weekly)
                            </Typography>
                            <Box sx={{ width: "100%", height: "calc(100% - 20px)" }}>
                                <Pie data={pieData2} options={options} />
                            </Box>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}
