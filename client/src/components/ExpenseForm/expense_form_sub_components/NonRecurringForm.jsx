import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import AmountInput from './Shared/AmountInput';

const NonRecurringForm = () => {
  const [category, setCategory] = useState('living');
  const handleCategorySelect = (e) => {
    setCategory(e.target.value);
  };
  const [charge_amount, set_charge_amount] = useState(null);
  const handleChargeAmount = (e) => {
    set_charge_amount(e.target.value);
  };

  return (
    <>
      <FormControl
        variant='outlined'
        className='e__form--control e__form--category'
      >
        <InputLabel id='demo-simple-select-outlined-label'>Category</InputLabel>
        <Select
          labelId='demo-simple-select-outlined-label'
          id='demo-simple-select-outlined'
          value={category}
          onChange={handleCategorySelect}
          label='Charge Type'
          className='e__form--select'
        >
          <MenuItem value={'finances'}>Finances</MenuItem>
          <MenuItem value={'living'}>Living</MenuItem>
          <MenuItem value={'health'}>Health</MenuItem>
          <MenuItem value={'leisure'}>Leisure</MenuItem>
          <MenuItem value={'travel'}>Travel</MenuItem>
        </Select>
      </FormControl>
      <div>Title</div>
      <div>Description</div>
      <div>Purchase Date</div>
      <div>Purchase Location</div>
      <AmountInput
        labelText={'Charge Amount:'}
        value={charge_amount}
        changeHandler={handleChargeAmount}
      />
      <div>Url</div>
    </>
  );
};

export default NonRecurringForm;
