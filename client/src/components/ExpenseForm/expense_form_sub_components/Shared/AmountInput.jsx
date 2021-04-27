import React from 'react';
import { FormControl, TextField } from '@material-ui/core';
import NumberFormatCustom from '../../../NumberFormatCustom/NumberFormatCustom';

const AmountInput = ({ labelText, value, changeHandler }) => {
  return (
    <>
      <FormControl className='e__form--control'>
        <TextField
          className='e__form--chargeAmount'
          label={labelText}
          value={value}
          onChange={changeHandler}
          id='formatted-numberformat-input'
          InputProps={{
            inputComponent: NumberFormatCustom,
          }}
        />
      </FormControl>
    </>
  );
};

export default AmountInput;
