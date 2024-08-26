import React from 'react';
import { Box, Grid, TextField, Button, Select, MenuItem, Typography, Divider, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function CalendarView() {
  return (
    <Box sx={{ p: 2, height: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Toolbar */}
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={1.9}>
          <TextField
            fullWidth
            variant="outlined"
            size="small"
            placeholder="Asset Type"
            InputProps={{
              endAdornment: (
                <IconButton edge="end">
                  <SearchIcon />
                </IconButton>
              ),
            }}
          />
        </Grid>
        <Grid item xs={1.9}>
          <TextField
            fullWidth
            variant="outlined"
            size="small"
            placeholder="Asset Group"
            InputProps={{
              endAdornment: (
                <IconButton edge="end">
                  <SearchIcon />
                </IconButton>
              ),
            }}
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            fullWidth
            variant="outlined"
            size="small"
            placeholder="Asset Category"
            InputProps={{
              endAdornment: (
                <IconButton edge="end">
                  <SearchIcon />
                </IconButton>
              ),
            }}
          />
        </Grid>
        <Grid item xs={1.7}>
          <TextField
            fullWidth
            variant="outlined"
            size="small"
            placeholder="Asset Tag"
            InputProps={{
              endAdornment: (
                <IconButton edge="end">
                  <SearchIcon />
                </IconButton>
              ),
            }}
          />
        </Grid>
        <Grid item xs={1.5}>
          <Select
            fullWidth
            variant="outlined"
            size="small"
            defaultValue=""
            displayEmpty
          >
            <MenuItem value="" disabled>
              Name
            </MenuItem>
            <MenuItem value="option1">Option 1</MenuItem>
            <MenuItem value="option2">Option 2</MenuItem>

          </Select>
        </Grid>
        <Grid item xs={1.5}>
          <TextField
            fullWidth
            variant="outlined"
            size="small"
            placeholder="Task ID"
            InputProps={{
              endAdornment: (
                <IconButton edge="end">
                  <SearchIcon />
                </IconButton>
              ),
            }}
          />
        </Grid>
        <Grid item xs={1.5}>
          <Select
            fullWidth
            variant="outlined"
            size="small"
            defaultValue=""
            displayEmpty
          >
            <MenuItem value="" disabled>
              Status
            </MenuItem>
            <MenuItem value="option1">Option 1</MenuItem>
            <MenuItem value="option2">Option 2</MenuItem>
            {/* Add more options as needed */}
          </Select>
        </Grid>
      </Grid>


      {/* Legend */}
      <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center', gap: 2 }}>
        <Box sx={{ bgcolor: 'yellow', px: 2, py: 1, borderRadius: 1 }}>
          <Typography variant="body2">Scheduled</Typography>
        </Box>
        <Box sx={{ bgcolor: 'green', px: 2, py: 1, borderRadius: 1 }}>
          <Typography variant="body2" color="white">Started</Typography>
        </Box>
        <Box sx={{ bgcolor: 'blue', px: 2, py: 1, borderRadius: 1 }}>
          <Typography variant="body2" color="white">Completed</Typography>
        </Box>
        <Box sx={{ bgcolor: 'lightgray', px: 2, py: 1, borderRadius: 1 }}>
          <Typography variant="body2">Cancelled</Typography>
        </Box>
        <Box sx={{ bgcolor: 'red', px: 2, py: 1, borderRadius: 1 }}>
          <Typography variant="body2" color="white">Overdue</Typography>
        </Box>
      </Box>

      {/* Calendar and Footer Flex Container */}
      <Box
        sx={{
          flex: '0 1 70%',
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          overflow: 'auto',
          height: 'calc(100vh - 2px)',
          maxHeight: '600px'
        }}
      >
        {/* Calendar Header */}
        <Box sx={{ mt: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6">Jul 2024</Typography>
          <Box>
            <Button variant="outlined">Month</Button>
            <Button variant="outlined" sx={{ mx: 1 }}>Week</Button>
            <Button variant="outlined">Day</Button>
          </Box>
        </Box>

        {/* Calendar Grid */}
        <Box sx={{ flex: 1, border: '1px solid #ddd', borderRadius: 1, overflow: 'auto' }}>
          <Grid container spacing={0} columns={7}>
            {/* Days of the week */}
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <Grid item xs={1} key={day}>
                <Box sx={{ p: 1, borderBottom: '1px solid #ddd', textAlign: 'center', fontWeight: 'bold' }}>
                  {day}
                </Box>
              </Grid>
            ))}

            {/* Calendar Days */}
            {[...Array(35)].map((_, index) => (
              <Grid item xs={1} key={index}>
                <Box sx={{ p: 1, borderBottom: '1px solid #ddd', height: '100px', overflow: 'auto', position: 'relative' }}>
                  {index < 31 && <Typography variant="caption">{index + 1}</Typography>}
                  {/* Sample event box */}
                  {(index === 0 || index === 30) && (
                    <Box sx={{
                      position: 'absolute',
                      bottom: 4,
                      left: 4,
                      right: 4,
                      bgcolor: 'lightblue',
                      borderRadius: 1,
                      p: 0.5,
                      fontSize: '10px',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}>
                      {index === 0 ? 'ACMV Bi-Monthly Servicing of April 2024' : 'BMS Quarterly Servicing of April 2024'}
                    </Box>
                  )}
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Calendar Footer */}
        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <IconButton>
            <ArrowBackIcon />
          </IconButton>
          <Button variant="outlined">Today</Button>
          <IconButton>
            <ArrowForwardIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
