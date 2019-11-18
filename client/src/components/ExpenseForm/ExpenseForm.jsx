import React, { useEffect, useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem, FormHelperText, FormControlLabel, Grid, FormLabel, RadioGroup, Radio, TextField, Button } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker
} from '@material-ui/pickers';
import NumberFormatCustom from './NumberFormatCustom';
import './ExpenseForm.css';

const ExpenseForm = ({ user }) => {
    const [category, setCategory] = useState('');
    const [radioValue, setRadioValue] = useState('');
    const [monthly, setMonthly] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [amount, setAmount] = useState('');
    const [title, setTitle] = useState('');

    const categoryChange = e => {
        setCategory(e.target.value);
    }

    const monthlyHandler = e => {
        setRadioValue(e.target.value);
        switch (e.target.value) {
            case 'Yes':
                setMonthly(true);
                break;
            case 'No':
                setMonthly(false);
                break;
        }
    }

    const handleDateChange = date => {
        setSelectedDate(date);
    }

    const handleAmount = e => {
        setAmount(e.target.value);
    }

    const handleTitle = e => {
        setTitle(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (category !== '' && radioValue !== '' && amount !== '' && title !== '') {
            console.log(`
            category: ${category}
            radioValue/Monthly: ${radioValue} ${monthly}
            amount: ${amount}
            title: ${title}
            `);
        }
        else {
            console.log(`
            submit conditional failed
            category: ${category}
            radioValue/Monthly: ${radioValue}
            amount: ${amount}
            title: ${title}
            `)
        }
    }

    return (
        <Grid container id='expenseGrid'>
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
            <Grid item id='monthlyGrid'>
                <FormControl component="fieldset" >
                    <FormLabel component="legend">Is this a monthly charge?</FormLabel>
                    <RadioGroup aria-label="monthly" name="monthly" value={radioValue} onChange={monthlyHandler}>
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
                        onChange={handleAmount}
                        id="formatted-numberformat-input"
                        InputProps={{
                            inputComponent: NumberFormatCustom
                        }}
                    />
                </FormControl>
            </Grid>
            <Grid item id='titleGrid'>
                <TextField
                    id="outlined-multiline-flexible"
                    label="Expense Title"
                    multiline
                    rowsMax="4"
                    value={title}
                    onChange={handleTitle}
                    margin="normal"
                    variant="outlined"
                />
            </Grid>
            <Grid item id='submitGrid'>
                <Button variant="contained" color="primary" type='submit' onClick={handleSubmit}>Submit</Button>
            </Grid>
        </Grid>
    )
}

export default ExpenseForm;