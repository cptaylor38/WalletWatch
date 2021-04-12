import React from 'react';
import './HourlySub.css';
import { Grid, Button, TextField, FormControl } from '@material-ui/core';
import NumberFormatCustom from '../../NumberFormatCustom/NumberFormatCustom';

const HourlySub = ({
  handleWeekly,
  handleHourly,
  onSubmit,
  clearAlerts,
  hourly,
  weekly,
  salary,
}) => {
  return (
    <form onSubmit={onSubmit} onFocus={clearAlerts}>
      <Grid item>
        {salary && hourly && weekly ? (
          <p>
            {salary.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
            })}
          </p>
        ) : null}
      </Grid>
      <Grid container>
        <Grid item>
          <FormControl fullWidth>
            <TextField
              label='Hourly Average'
              name='hourly'
              value={hourly}
              onChange={handleHourly}
              id='formatted-numberformat-input'
              InputProps={{
                inputComponent: NumberFormatCustom,
              }}
            />
          </FormControl>
        </Grid>
        <Grid item>
          <TextField
            id='outlined-adornment-amount'
            name='weekly'
            value={weekly}
            label='Average Weekly Hours:'
            onChange={handleWeekly}
          />
        </Grid>
        <Button type='submit'>Submit</Button>
      </Grid>
    </form>
  );
};

export default HourlySub;
