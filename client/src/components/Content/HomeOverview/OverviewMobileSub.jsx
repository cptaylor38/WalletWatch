import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import moment from 'moment';
import { useEffect } from 'react';


const OverviewMobileSub = ({ user, expenseDetails }) => {

  const {recDetail, nonRecDetail} = expenseDetails.filteredExpenses

  let format$ = input => {
    return input.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD'
    });
  };

  let formatP = input => {
    let perc = (input / (user.salary / 12)).toFixed(2) * 100;
    return (
      <span>{Math.round(perc)}%  of your income.</span>
    );
  };

  return (
    <Grid container className='ovSubC'>
      {/* Mapping new layout */}
      <Grid item>
        <Paper>
          <h3>Your current salary:</h3>
          <p>{format$(user.salary)}</p>
          <h3>Projected monthly income:</h3>
          <p>{format$(user.salary / 12)}</p>
        </Paper>
        <Paper>
          Recurring Charges and Nonrecurring Charge amount = total charges
          Recurring charges total: {recDetail.total ? format$(recDetail.total) : 'Calculating..'}
          Non-Recurring charges total: {nonRecDetail.total ? format$(nonRecDetail.total) : 'Calculating'}
        
        </Paper>
        <Paper>Income - Total Charges = Budget remaining</Paper>
      </Grid>
      <Grid item>
        <Paper>
          Material ui dropdown list showing all charges that classify under recurring
        </Paper>
      </Grid>
      <Grid item>
        <Paper>
          Material ui dropdown list showing all charges that are not recurring
        </Paper>
      </Grid>
    </Grid>
  );
};

export default OverviewMobileSub;



// <Grid item xs={12} className='ovSubI'>
//         <Paper>
//           <p><span className='ovI'>Estimated monthly income: </span> {format$(user.salary / 12)}</p>
//         </Paper>
//         <Paper>

//         </Paper>
//         <Paper>

//         </Paper>
//       </Grid>
//       <Grid item xs={12} className='ovSubI'>
//         <Paper>
//         <p><span className='ovI'>Total monthly charges: </span>{format$(rTotal)} - {formatP(rTotal)}</p>
//         </Paper>
//       </Grid>
//       <Grid item xs={12} className='ovSubI'>
//         <span className='ovI'>
//               Total msc. Charges from {moment(Date.now()).format('MMMM')}:{' '}
//         </span>
//         {format$(nrTotal)}
//         {formatP(nrTotal)}
//       </Grid>
//       <Grid item xs={12} className='ovSubI'>
//         <span className='ovI'>Total charges this month: </span>
//         {format$(rTotal + nrTotal)}
//         {formatP(rTotal + nrTotal)}
//       </Grid>
//       <Grid item xs={12} className='ovSubI'>
//         <span>Budget remaining: </span>
//           {format$(user.salary / 12 - (rTotal + nrTotal))}
//       </Grid>
