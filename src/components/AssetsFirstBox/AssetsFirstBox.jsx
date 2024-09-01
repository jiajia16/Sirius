import * as React from "react";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CircularProgress from "../CircularProgress/CircularProgress";

export default function AssetsFirstBox() {
    const totalAlarm = 118;
    const totalAlarmOnline = 108;
    const [percentage, setPercentage] = useState(88);

    return (
        /*Main Box*/
        <Box sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            {/*Text Box*/}
            <Box
                sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 2,
                }}
            >
                <Typography variant="h7">Assets</Typography>
            </Box>

            {/*Elements Box*/}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    height: "80%",
                }}
            >
                <CircularProgress percentage={percentage} />
                <Box sx={{ display: "flex", flexDirection: "column", ml: 6 }}>
                    <Typography variant="h6">Total</Typography>
                    <Typography variant="h5">{totalAlarm}</Typography>
                    <Typography variant="h6" className="online">
                        Online
                    </Typography>
                    <Typography variant="h5" className="online">
                        {totalAlarmOnline}
                    </Typography>
                </Box>
            </Box>

        </Box>
    );
}