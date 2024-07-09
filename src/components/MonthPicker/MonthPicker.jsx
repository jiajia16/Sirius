import * as React from 'react';
import { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';

export default function MonthPicker() {
    const [selectedDate, setSelectedDate] = useState(new Date());

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
                views={['year', 'month']}
                label="Month and Year"
                minDate={new Date('2020-01-01')}
                maxDate={new Date('2030-12-31')}
                value={selectedDate}
                onChange={(newValue) => {
                    setSelectedDate(newValue);
                }}
                renderInput={(params) => <TextField {...params} helperText={null} />}
            />
        </LocalizationProvider>
    );
}
