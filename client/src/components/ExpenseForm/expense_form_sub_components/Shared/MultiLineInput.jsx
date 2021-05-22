import React from 'react';
import { TextField } from '@material-ui/core';

const MultiLineInput = ({
  labelText,
  value,
  changeHandler,
  name,
  exempt_class,
}) => {
  return (
    <TextField
      id='outlined-multiline-static'
      className={exempt_class ? exempt_class : 'e__form--control'}
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
