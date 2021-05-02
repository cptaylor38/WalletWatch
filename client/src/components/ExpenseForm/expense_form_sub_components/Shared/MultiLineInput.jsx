import React from 'react';
import { TextField } from '@material-ui/core';

const MultiLineInput = ({ labelText, value, changeHandler, name }) => {
  return (
    <TextField
      id='outlined-multiline-static'
      className='e__form--control'
      label={labelText}
      multiline
      rows={4}
      value={value}
      name={name}
      onChange={changeHandler}
      variant='outlined'
    />
  );
};

export default MultiLineInput;
