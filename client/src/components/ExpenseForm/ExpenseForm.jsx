import React, { useEffect, useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem, FormHelperText, FormControlLabel, Grid, FormLabel, RadioGroup, Radio, TextField } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker
} from '@material-ui/pickers';
import NumberFormatCustom from './NumberFormatCustom';
import './ExpenseForm.css';

const ExpenseForm = ({ user }) => {
    const [category, setCategory] = useState('Finances');
    const [radioValue, setRadioValue] = useState('No');
    const [recurring, setRecurring] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [amount, setAmount] = useState('');

    const categoryChange = e => {
        setCategory(e.target.value);
    }

    const recurringHandler = e => {
        setRadioValue(e.target.value);
        switch (e.target.value) {
            case 'Yes':
                setRecurring(true);
                break;
            case 'No':
                setRecurring(false);
                break;
        }
        console.log(recurring);
    }

    const handleDateChange = date => {
        setSelectedDate(date);
    }

    const handleAmount = e => {
        setAmount(e.target.value);
    }

    return (
        <Grid container>
            <Grid item id='categoryGrid'>
                <FormControl>
                    <InputLabel id="demo-simple-select-helper-label">Category</InputLabel>
                    <Select
                        id="demo-simple-select-helper"
                        value={category}
                        onChange={categoryChange}
                    >
                        <MenuItem value="Finances"><em>Finances</em></MenuItem>
                        <MenuItem value="Living"><em>Living</em></MenuItem>
                        <MenuItem value="Health"><em>Health</em></MenuItem>
                        <MenuItem value="Leisure"><em>Leisure</em></MenuItem>
                        <MenuItem value="Travel"><em>Travel</em></MenuItem>
                    </Select>
                    <FormHelperText>How you want to categorize this expense.</FormHelperText>
                </FormControl>
            </Grid>
            <Grid item id='recurringGrid'>
                <FormControl component="fieldset" >
                    <FormLabel component="legend">Is this a recurring payment?</FormLabel>
                    <RadioGroup aria-label="recurring" name="recurring" value={radioValue} onChange={recurringHandler}>
                        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                        <FormControlLabel value="No" control={<Radio />} label="No" />
                    </RadioGroup>
                </FormControl>
            </Grid>
            <Grid item id='dateGrid'>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        disableToolbar
                        autoOk={true}
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="Date picker inline"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </MuiPickersUtilsProvider>
            </Grid>
            <Grid item id='amountGrid'>
                <FormControl fullWidth >
                    <TextField
                        label="Amount"
                        value={amount}
                        onChange={(e) => handleAmount(e)}
                        id="formatted-numberformat-input"
                        InputProps={{
                            inputComponent: NumberFormatCustom
                        }}
                    />
                </FormControl>
            </Grid>
        </Grid>
    )
}

export default ExpenseForm;