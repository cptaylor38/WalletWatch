import React, { useEffect, useState } from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  FormControlLabel,
  Grid,
  FormLabel,
  RadioGroup,
  Radio,
  TextField,
  Button,
} from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';
import NumberFormatCustom from './NumberFormatCustom';
import './ExpenseForm.css';
import API from '../../clientRoutes/API';
import {useSelector, useDispatch} from 'react-redux';
import {getData} from '../../redux/actions';

const ExpenseForm = ({ user, propData, form, toggleForm, setRetrieve}) => {
  const [category, setCategory] = useState('');
  const [radioValue, setRadioValue] = useState('');
  const [monthly, setMonthly] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [amount, setAmount] = useState('');
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (propData) {
      setCategory(propData.category.toLowerCase());
      setMonthly(propData.monthly);
      setSelectedDate(propData.date);
      setAmount(propData.amount);
      setTitle(propData.title);
      if (propData.monthly === true) {
        setRadioValue('Yes');
      } else setRadioValue('No');
    }
  }, [propData]);

  const categoryChange = e => {
    document.querySelector('#categoryGrid').style.border = 'none';
    setCategory(e.target.value);
  };

  const monthlyHandler = e => {
    document.querySelector('#monthlyGrid').style.border = 'none';
    setRadioValue(e.target.value);
    switch (e.target.value) {
      case 'Yes':
        setMonthly(true);
        break;
      case 'No':
        setMonthly(false);
        break;
      default:
        setMonthly(false);
        break;
    }
  };

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  const handleAmount = e => {
    document.querySelector('#amountGrid').style.border = 'none';
    setAmount(e.target.value);
  };

  const handleTitle = e => {
    document.querySelector('#titleGrid').style.border = 'none';
    setTitle(e.target.value);
  };

  const handleCancel = e => {
    toggleForm(false);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (form === true) {
      let dataObject = {
        id: propData._id,
        category: category,
        monthly: monthly,
        date: selectedDate,
        amount: amount,
        title: title
      };

      API.updateExpense(dataObject).then(response => {
        console.log(response);
      });
    } else {
      if (
        category !== '' &&
        radioValue !== '' &&
        amount !== '' &&
        title !== ''
      ) {
        let dataObject = {
          id: user,
          category: category,
          monthly: monthly,
          date: selectedDate,
          amount: amount,
          title: title
        };
        API.createExpense(dataObject).then(res => {
          setAmount('');
          setRadioValue('');
          setMonthly(false);
          setTitle('');
          setCategory('');
          setRetrieve(true);
        });
      } else {
        if (category === '') {
          document.querySelector('#categoryGrid').style.border =
            '3px solid red';
        }
        if (radioValue === '') {
          document.querySelector('#monthlyGrid').style.border = '3px solid red';
        }
        if (amount === '') {
          document.querySelector('#amountGrid').style.border = '3px solid red';
        }
        if (title === '') {
          document.querySelector('#titleGrid').style.border = '3px solid red';
        }
      }
    }
  };

  return (
    <Grid container id='expenseGrid'>
      <Grid item id='categoryGrid'>
        <FormControl>
          <InputLabel id='demo-simple-select-helper-label'>Category</InputLabel>
          <Select
            id='demo-simple-select-helper'
            value={category}
            onChange={categoryChange}
          >
            <MenuItem value='finances'>
              <em>Finances</em>
            </MenuItem>
            <MenuItem value='living'>
              <em>Living</em>
            </MenuItem>
            <MenuItem value='health'>
              <em>Health</em>
            </MenuItem>
            <MenuItem value='leisure'>
              <em>Leisure</em>
            </MenuItem>
            <MenuItem value='travel'>
              <em>Travel</em>
            </MenuItem>
          </Select>
          <FormHelperText>
            How you want to categorize this expense.
          </FormHelperText>
        </FormControl>
      </Grid>
      <Grid item id='monthlyGrid'>
        <FormControl component='fieldset'>
          <FormLabel component='legend'>Is this a monthly charge?</FormLabel>
          <RadioGroup
            aria-label='monthly'
            name='monthly'
            value={radioValue}
            onChange={monthlyHandler}
          >
            <FormControlLabel value='Yes' control={<Radio />} label='Yes' />
            <FormControlLabel value='No' control={<Radio />} label='No' />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item id='dateGrid'>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            autoOk={true}
            variant='inline'
            format='MM/dd/yyyy'
            margin='normal'
            id='date-picker-inline'
            label='Date picker inline'
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date'
            }}
          />
        </MuiPickersUtilsProvider>
      </Grid>
      <Grid item id='amountGrid'>
        <FormControl fullWidth>
          <TextField
            label='Amount'
            value={amount}
            onChange={handleAmount}
            id='formatted-numberformat-input'
            InputProps={{
              inputComponent: NumberFormatCustom
            }}
          />
        </FormControl>
      </Grid>
      <Grid item id='titleGrid'>
        <TextField
          id='outlined-multiline-flexible'
          label='Expense Title'
          multiline
          rowsMax='4'
          value={title}
          onChange={handleTitle}
          margin='normal'
          variant='outlined'
        />
      </Grid>
      <Grid item id='submitGrid'>
        <Button
          variant='contained'
          color='primary'
          type='submit'
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Grid>
      {toggleForm ? (
        <Grid item id='cancelExpenseGrid'>
          <Button
            variant='contained'
            color='primary'
            type='button'
            onClick={handleCancel}
          >
            Cancel
          </Button>
        </Grid>
      ) : null}
    </Grid>
  );
};

export default ExpenseForm;
