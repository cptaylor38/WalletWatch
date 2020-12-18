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
      <Grid item id='overviewSubHeader'>
        <Paper className='ovSubHeaderItem' id='incomeOverview'>
          <h3>Income Overview</h3>
          <p>Current Salary: {format$(user.salary)}</p>
          <p>Monthly income: {format$(user.salary / 12)}</p>
        </Paper>
        <Paper className='ovSubHeaderItem' id='chargesOverview'>
          <h3>Charges for this month:</h3>
          <p>Monthly: {format$(recDetail.total)}</p>
          <p>+</p>
          <p>Miscellaneous: {format$(nonRecDetail.total)}</p>
          <p>Total: {format$(nonRecDetail.total + recDetail.total)}</p>
        </Paper>
        <Paper className='ovSubHeaderItem' id='budgetBreakdown'>
          <h3>Budget Breakdown:</h3>
          <p>Income: {format$(user.salary / 12)}</p>
          <p>-</p>
          <p>Charges: {format$(nonRecDetail.total + recDetail.total)}</p>
          <p>Budget Remaining: {format$((user.salary / 12) - (nonRecDetail.total + recDetail.total))}</p>
        </Paper>
      </Grid>
      <Grid className='expenseDropdownContainer'>
        <Paper className='expenseDropdown'>
          <h3>Temporary map of recurring expenses:</h3>
          {recDetail.list.map((item)=> {
            return(
              <p>
                {item.title} {item.category.toUpperCase()} {moment(item.date).format('MM/DD/YY')} {format$(item.amount)}
              </p>
            )
          })}
        </Paper>
      </Grid>
      <Grid className='expenseDropdownContainer'>
        <Paper className='expenseDropdown'>
          <h3>Temporary map of non-recurring expenses:</h3>
          {nonRecDetail.list.map((item)=> {
            return(
              <p>
                {item.title} {item.category.toUpperCase()} {moment(item.date).format('MM/DD/YY')} {format$(item.amount)}
              </p>
            )
          })}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default OverviewMobileSub;

// Notes for upcoming changes:
// Implement dropdown - use icon to indicate category corresponding to category in nav
// Update action and state object to filter category data to minimize logic in component
// General style improvements and different color indicator text removing titles, replace operands
//    with icons?
// Create ability to add multiple expenses at once and possible rework of expense form logic.
// Also still need to fix update of expense details upon submission of new expense.
// Remove unnecessary dependencies and tidy up css.
