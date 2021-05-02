import React, { useEffect, useRef } from 'react';
import { TextField } from '@material-ui/core';

const DateInput = ({ labelText, changeHandler, value, name }) => {
  const current_date = useRef(null);
  useEffect(() => {
    changeHandler({ target: { name, value } });
    current_date.current = new Date(Date.now()).toLocaleDateString().split('-');
    current_date.current.reverse().join('-');
  });
  return (
    <TextField
      className='e__form--control'
      id='date'
      label={labelText}
      type='date'
      value={value}
      onChange={changeHandler}
      name={name}
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
};

export default DateInput;
