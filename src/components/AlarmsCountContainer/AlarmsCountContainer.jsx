import * as React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { styled } from '@mui/system';
import LightbulbIcon from '@mui/icons-material/Lightbulb';

const CircleContainer = styled(Grid)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
});

const Circle = styled(Box)(({ color }) => ({
    width: 70,
    height: 70,
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color,
    fontSize: 24,
    marginBottom: 5, // Adjust the margin to create space between circle and text
}));

const TextContainer = styled(Box)({
    textAlign: 'center', // Center text horizontally
});

const NumberText = styled(Typography)({
    fontWeight: 'bold',
});

export default function AlarmsCount() {
    return (
        <Grid container spacing={4}>
            <Grid item xs={4}>
                <CircleContainer>
                    <Circle color="red">
                        <LightbulbIcon />
                    </Circle>
                    <TextContainer>
                        <Typography variant="h6">High</Typography>
                        <NumberText variant="body1">2</NumberText>
                    </TextContainer>
                </CircleContainer>
            </Grid>
            <Grid item xs={4}>
                <CircleContainer>
                    <Circle color="yellow">
                        <LightbulbIcon />
                    </Circle>
                    <TextContainer>
                        <Typography variant="h6">Medium</Typography>
                        <NumberText variant="body1">1</NumberText>
                    </TextContainer>
                </CircleContainer>
            </Grid>
            <Grid item xs={4}>
                <CircleContainer>
                    <Circle color="green">
                        <LightbulbIcon />
                    </Circle>
                    <TextContainer>
                        <Typography variant="h6">Low</Typography>
                        <NumberText variant="body1">3</NumberText>
                    </TextContainer>
                </CircleContainer>
            </Grid>
        </Grid>
    );
}
