import React, { useState } from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Paper,
} from '@material-ui/core';

const ExpenseFormBase = () => {
  const [form_category, set_form_category] = useState('nonRecurring');
  const handleChargeSelect = (event) => {
    set_form_category(event.target.value);
  };

  return (
    <Paper className='expense__form__base'>
      <FormControl variant='outlined' className='e__form--category'>
        <InputLabel id='demo-simple-select-outlined-label'>
          Charge Type
        </InputLabel>
        <Select
          labelId='demo-simple-select-outlined-label'
          id='demo-simple-select-outlined'
          value={form_category}
          onChange={handleChargeSelect}
          label='Charge Type'
          className='e__form--select'
        >
          <MenuItem value={'loan'}>Loan</MenuItem>
          <MenuItem value={'subscription'}>Subscription</MenuItem>
          <MenuItem value={'prescription'}>Prescription</MenuItem>
          <MenuItem value={'utility'}>Utility</MenuItem>
          <MenuItem value={'nonRecurring'}>Non-Recurring</MenuItem>
        </Select>
      </FormControl>
    </Paper>
  );
};

export default ExpenseFormBase;
