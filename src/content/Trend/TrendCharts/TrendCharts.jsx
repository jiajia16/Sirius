// src/content/Asset/AssetDetails/AssetDetails.jsx
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Checkbox, FormControlLabel, Button, TextField, FormGroup, Divider } from '@mui/material';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: "100%", // Ensure each item takes the full height of its container
    overflow: "auto",
    boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
}));


const BoldTypography = styled(Typography)(({ theme }) => ({
    fontWeight: 'bold',
    marginBottom: theme.spacing(1),
}));

const AssetDetails = () => {
    const { id } = useParams();
    const [selectedTags, setSelectedTags] = useState({ space: false, air: false, temperature1: false });
    const [xTag, setXTag] = useState('');
    const [yTag, setYTag] = useState('');

    const handleTagChange = (event) => {
        setSelectedTags({ ...selectedTags, [event.target.name]: event.target.checked });
    };


    // Example data for the trend graph
    const trendData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [
            {
                label: xTag || 'X Tag',
                data: [30, 40, 28, 46, 35], // Dummy data
                borderColor: 'rgba(75,192,192,1)',
                backgroundColor: 'rgba(75,192,192,0.2)',
                fill: false,
            },
            {
                label: yTag || 'Y Tag',
                data: [25, 42, 35, 40, 38], // Dummy data
                borderColor: 'rgba(153,102,255,1)',
                backgroundColor: 'rgba(153,102,255,0.2)',
                fill: false,
            }
        ],
    };

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    return (
        <Box sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            padding: 2,
        }}>
            <Grid container spacing={2} sx={{ height: "98%" }}>
                {/* Left Column */}
                <Grid item xs={4} sx={{ height: "104%" }}>
                    <Grid container spacing={3} direction="column" sx={{ height: "109%" }}>
                        {/* Top Grid Item in Left Column */}
                        <Grid item xs={2}>
                            <Item>
                                <BoldTypography variant="h6">Selected Trend Group Header</BoldTypography>
                                <Divider sx={{ my: 1 }} />
                                <FormGroup>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={selectedTags.space}
                                                onChange={handleTagChange}
                                                name="space"
                                            />
                                        }
                                        label={`SPACE ${id}_SPACE_TEMP`}
                                        sx={{ fontWeight: 'bold', textAlign: 'left' }}
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={selectedTags.air}
                                                onChange={handleTagChange}
                                                name="air"
                                            />
                                        }
                                        label={`AIR ${id}_AIR_TEMP`}
                                        sx={{ fontWeight: 'bold', textAlign: 'left' }}
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={selectedTags.temperature1}
                                                onChange={handleTagChange}
                                                name="temperature1"
                                            />
                                        }
                                        label={`TEMP 1 ${id}_TEMP1_TEMP`}
                                        sx={{ fontWeight: 'bold', textAlign: 'left' }}
                                    />
                                </FormGroup>
                            </Item>
                        </Grid>


                        {/* Bottom Grid Item in Left Column */}
                        <Grid item xs={3.5} >
                            <Item>
                                <BoldTypography variant="h6">Selected Additional Tags</BoldTypography>
                                <Divider sx={{ my: 1 }} />
                                {/* Add content for the additional grid item here */}
                                <Typography variant="body1">This is where additional information can be displayed.</Typography>
                            </Item>
                        </Grid>

                        <Grid item xs={4}>
                            <Item>
                                <BoldTypography variant="h6">Select Date Time</BoldTypography>
                                <Divider sx={{ my: 1 }} />
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>

                                </Box>
                                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                                    <Button variant="contained">30 mins</Button>
                                    <Button variant="contained">1 hour</Button>
                                    <Button variant="contained">2 hours</Button>
                                    <Button variant="contained">3 hours</Button>
                                    <Button variant="contained">6 hours</Button>
                                </Box>
                                <Box>
                                    <Button variant="contained" sx={{ flexGrow: 1, ml: 1 }}>Enter</Button>
                                    <Button variant="contained" sx={{ flexGrow: 1, ml: 1 }}>Export</Button>
                                </Box>
                            </Item>
                        </Grid>
                    </Grid>
                </Grid>

                {/* Right Column */}
                <Grid item xs={8} sx={{ height: "101%" }}>
                    <Item>
                        <Box sx={{ width: "100%", height: "calc(100% - 90px)" }}>
                            <BoldTypography variant="h6">Location of Asset</BoldTypography>
                            <BoldTypography variant="h6">Start to End Date of trend</BoldTypography>
                            <Line data={trendData} options={{ responsive: true, maintainAspectRatio: false }} />
                        </Box>
                    </Item>
                </Grid>
            </Grid>
        </Box >
    );
};

export default AssetDetails;
