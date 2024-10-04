import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Checkbox, FormControlLabel, Button, TextField, FormGroup, Divider } from '@mui/material';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

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


    const trendData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [
            {
                label: xTag || 'X Tag',
                data: [30, 40, 28, 46, 35], // Dummy data
                borderColor: 'rgba(204, 204, 0, 1)', // Dark yellow
                backgroundColor: 'rgba(204, 204, 0, 0.2)', // Light yellow
                fill: false,
            },
            {
                label: yTag || 'Y Tag',
                data: [25, 42, 35, 40, 38], // Dummy data
                borderColor: 'rgba(0, 0, 139, 1)', // Dark blue
                backgroundColor: 'rgba(0, 0, 139, 0.2)', // Light dark blue
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
            <Grid container spacing={2} sx={{ height: "100%" }}>
                {/* Left Column */}
                <Grid item xs={4} spacing={3} sx={{ height: "100%", display: 'flex', flexDirection: 'column' }}>
                    <Grid container direction="column" spacing={4} sx={{ height: '100%' }}>
                        {/* Top Grid Item in Left Column */}
                        <Grid item sx={{ height: '33%', minHeight: '100px' }}>
                            <Item >
                                <BoldTypography variant="h6">Select Trend Group Header</BoldTypography>
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

                        {/* Middle Grid Item in Left Column */}
                        <Grid item sx={{ height: '30%', minHeight: '100px' }}>
                            <Item >
                                <BoldTypography variant="h6">Select Additional Tags</BoldTypography>
                                <Divider sx={{ my: 1 }} />
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, padding: 1, border: '1px solid #ccc', borderRadius: '4px', backgroundColor: '#f9f9f9', flexGrow: 1 }}>
                                    <TextField
                                        variant="outlined"
                                        placeholder="Search for tags"
                                        fullWidth
                                        sx={{
                                            backgroundColor: 'white',
                                            borderRadius: '20px',
                                            '& .MuiOutlinedInput-root': {
                                                borderRadius: '20px',
                                                '& fieldset': {
                                                    borderColor: '#ccc',
                                                },
                                            },
                                            '& .MuiInputBase-input': {
                                                padding: '8px 12px',
                                            },
                                        }}
                                    />
                                    <Box sx={{ flexGrow: 1, mt: 1 }}>
                                        {/* Search results will be displayed here */}
                                    </Box>
                                </Box>
                            </Item>
                        </Grid>

                        {/* Bottom Grid Item in Left Column */}
                        <Grid item sx={{ height: '37%', minHeight: '100px' }}>
                            <Item >
                                <BoldTypography variant="h6">Select Date Time</BoldTypography>
                                <Divider sx={{ my: 1 }} />
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker
                                        sx={{
                                            transform: 'scale(0.7)',
                                            transformOrigin: 'center',
                                        }}
                                    />
                                </LocalizationProvider>
                                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, flexWrap: 'wrap' }}>
                                    <Button variant="contained" sx={{ backgroundColor: '#673AB7', color: 'white', borderRadius: '4px', padding: '1px 7px', minWidth: '50px', textTransform: 'none' }}>
                                        30 mins
                                    </Button>
                                    <Button variant="contained" sx={{ backgroundColor: '#673AB7', color: 'white', borderRadius: '4px', padding: '4px 7px', minWidth: '50px', textTransform: 'none' }}>
                                        1 hour
                                    </Button>
                                    <Button variant="contained" sx={{ backgroundColor: '#673AB7', color: 'white', borderRadius: '4px', padding: '4px 7px', minWidth: '50px', textTransform: 'none' }}>
                                        2 hours
                                    </Button>
                                    <Button variant="contained" sx={{ backgroundColor: '#673AB7', color: 'white', borderRadius: '4px', padding: '4px 7px', minWidth: '50px', textTransform: 'none' }}>
                                        3 hours
                                    </Button>
                                    <Button variant="contained" sx={{ backgroundColor: '#673AB7', color: 'white', borderRadius: '4px', padding: '4px 7px', minWidth: '50px', textTransform: 'none' }}>
                                        6 hours
                                    </Button>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: 1 }}>
                                    <Button variant="contained" sx={{ backgroundColor: 'grey', color: 'white', borderRadius: '4px', padding: '4px 12px', minWidth: '50px', textTransform: 'none' }}>
                                        Enter
                                    </Button>
                                    <Button variant="contained" sx={{ backgroundColor: 'grey', color: 'white', borderRadius: '4px', padding: '4px 12px', minWidth: '50px', textTransform: 'none' }}>
                                        Export
                                    </Button>
                                </Box>
                            </Item>
                        </Grid>
                    </Grid>


                </Grid>

                {/* Right Column */}
                <Grid item xs={8} sx={{ height: "100%" }}>
                    <Item>
                        <Box sx={{ width: "100%", height: "calc(100% - 90px)" }}>
                            <BoldTypography variant="h6">Location of Asset</BoldTypography>
                            <BoldTypography variant="h6">Start to End Date of trend</BoldTypography>
                            <Line data={trendData} options={{ responsive: true, maintainAspectRatio: false }} />
                        </Box>
                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AssetDetails;
