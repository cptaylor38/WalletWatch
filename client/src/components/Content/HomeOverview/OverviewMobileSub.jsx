import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import moment from 'moment';

const OverviewMobileSub = ({ user, nrTotal, rTotal }) => {
  let format$ = input => {
    return input.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD'
    });
  };

  let formatP = input => {
    let perc = (input / (user.salary / 12)).toFixed(2) * 100;
    return (
      <p className='ovPercP'>
        <span className='percSpan'>{perc}%</span> of your income.
      </p>
    );
  };

  return (
    <Grid container className='ovSubC'>
      <Grid item xs={12} className='ovSubI'>
        <Paper className='ovP'>
          <header>
            <span className='ovI'>Estimated monthly income: </span>
            {format$(user.salary / 12)}
          </header>
        </Paper>
      </Grid>
      <Grid item xs={12} className='ovSubI'>
        <Paper className='ovP'>
          <header>
            <span className='ovI'>Total monthly charges: </span>
            {format$(rTotal)}
          </header>
          {formatP(rTotal)}
        </Paper>
      </Grid>
      <Grid item xs={12} className='ovSubI'>
        <Paper className='ovP'>
          <header>
            <span className='ovI'>
              Total msc. Charges from {moment(Date.now()).format('MMMM')}:{' '}
            </span>
            {format$(nrTotal)}
          </header>
          {formatP(nrTotal)}
        </Paper>
      </Grid>
      <Grid item xs={12} className='ovSubI'>
        <Paper className='ovP'>
          <header>
            <span className='ovI'>Total charges this month: </span>
            {format$(rTotal + nrTotal)}
          </header>
          {formatP(rTotal + nrTotal)}
        </Paper>
      </Grid>
      <Grid item xs={12} className='ovSubI'>
        <Paper className='ovP'>
          <header>
            <span>Budget remaining: </span>
            {format$(user.salary / 12 - (rTotal + nrTotal))}
          </header>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default OverviewMobileSub;
