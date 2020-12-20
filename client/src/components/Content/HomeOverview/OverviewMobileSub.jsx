import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import moment from 'moment';
import { useEffect } from 'react';


const OverviewMobileSub = ({ user, expenseDetails }) => {

  const {recDetail, nonRecDetail} = expenseDetails.filteredExpenses;
  
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

  let monthlyIncome = format$(user.salary / 12)
  let totalCharges = format$(recDetail.total + nonRecDetail.total)
  let budgetRemaining = format$((user.salary / 12) - (recDetail.total + nonRecDetail.total))

  return (
    <Grid container className='ovSubC'>
      <Grid item id='budgetBreakdownContainer'>
        <Paper>
          <header><h3>Budget Breakdown</h3></header>
          <div>
            <h4>Monthly Income: {monthlyIncome}</h4>
            <p>Your current salary is {format$(user.salary)} with a monthly income of {monthlyIncome} (before taxes).</p>
          </div>
          <div>
            <h4>Total expenses this month: {totalCharges}</h4>
            <p>Your monthly charges of {format$(recDetail.total)} with an additional {format$(nonRecDetail.total)} make your total expenses this month {totalCharges}</p>
          </div>
          <div>
            <h4>Budget remaining: {budgetRemaining}</h4>
            <p>After deducting your total epxenses of {totalCharges} from your monthly income of {monthlyIncome}, you have {budgetRemaining} remaining.</p>
          </div>
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
  // Consider switching over to modal for expense addition
  // Look at a way to reduce ChargeItem - if changing to modal for expenses, may need to create reducer
  //    for modal.
  // Switched to reducer for view select, changed profile.jsx and nav.jsx handlers to implement reducer

  // Notes 12/19 before revising - 
  // Changed idea for budget breakdown - add sliding animations on scroll, adjust styling and layout.
  // Possibly add comparison to previous month or 3 month expenses - line graph?
  // Implement dropdown with sort functionality - highest to lowest, category, etc. Add a search bar
  //   and possibly an edit button. Can use the charge item component and rework it for these charges.
  // Reconsider the value of the pie charts - lot of excess code for a visual that doesn't do much other than 
  // show comparison of expenses to each other. Should they show a comparison to the overall monthly income instead, 
  // if implemented.
