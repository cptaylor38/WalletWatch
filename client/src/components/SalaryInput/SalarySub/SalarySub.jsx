import React from 'react';
import './SalarySub.css';
import { Grid, TextField, Button, FormControl } from '@material-ui/core';
import NumberFormatCustom from '../../NumberFormatCustom/NumberFormatCustom';
import './SalarySub.css';

const SalarySub = ({ handleChange, onSubmit, clearAlerts, salary }) => {
  return (
    <form onSubmit={onSubmit} onFocus={clearAlerts}>
      <Grid container className='salary__sub__cont'>
        <Grid item xl>
          <FormControl fullWidth>
            <TextField
              className='salary__sub__input'
              label='Salary'
              value={salary !== 0 ? salary : ''}
              onChange={handleChange}
              id='formatted-numberformat-input'
              InputProps={{
                inputComponent: NumberFormatCustom,
              }}
            />
          </FormControl>
        </Grid>
        <Grid item>
          <Button type='submit'>Submit</Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default SalarySub;
