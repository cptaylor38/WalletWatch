import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

const CategorySelect = ({ value, changeHandler }) => {
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
          value={value}
          onChange={changeHandler}
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
    </>
  );
};

export default CategorySelect;
