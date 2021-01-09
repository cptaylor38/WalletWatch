import React, { useState, useEffect } from 'react';
import './HomeOverview.css';
import { Doughnut } from 'react-chartjs-2';
import { Paper, Grid } from '@material-ui/core';
import { useSelector, useDispatch} from 'react-redux';
import {filterExpenses} from '../../redux/actions';

const Overview = () => {
  const [monthlyGraph, setMonthlyGraph] = useState(null);
  const [nonMonthlyGraph, setNonMonthlyGraph] = useState(null);
  const [recurringTotal, setRecurringTotal] = useState(null);
  const [nonRecurringTotal, setNonRecurringTotal] = useState(null);
  const dispatch = useDispatch();
  const expenseDetails = useSelector(state => state.expenseDetails);
  const {nonRecurringCategoryData, recurringCategoryData} = useSelector(state => state.expenseDetails.categoryData)
  const user = useSelector(state => state.user)

  useEffect(() => {
    if(nonRecurringCategoryData) setNonRecurringTotal(nonRecurringCategoryData.total)
    if(recurringCategoryData) setRecurringTotal(recurringCategoryData.total);
  }, [expenseDetails]);

  useEffect(()=> {
    if(recurringTotal){
      graphInitHelper(recurringCategoryData, true);
    }
    if(nonRecurringTotal){
      graphInitHelper(nonRecurringCategoryData, false);
    }
  }, [recurringTotal, nonRecurringTotal])

  useEffect(()=> {
    dispatch(filterExpenses(user.expense))
  }, [user.expense])

  const graphInitHelper = (expenseObj, recurring)=> {
    console.log(expenseObj);
    let graph = {
      labels: ['Finances', 'Living', 'Health', 'Leisure', 'Travel'],
      datasets: [
        {
          label: `Recurring Monthly Expenses - ${expenseObj.total.toLocaleString(
            'en-US',
            {
              style: 'currency',
              currency: 'USD',
            }
          )}`,
          backgroundColor: ['green', 'rgb(51, 51, 155)', 'red', 'gold', '#5A4218'],
          data: [
            expenseObj.financesDetails.total,
            expenseObj.livingDetails.total,
            expenseObj.healthDetails.total,
            expenseObj.leisureDetails.total,
            expenseObj.travelDetails.total,
          ],
        },
      ],
    }
    recurring ? setMonthlyGraph(graph) : setNonMonthlyGraph(graph);
  }

  return (
    <>
      <Grid item xs={12} sm={12} md={6} lg={6} className='pieGridItem'>
        {monthlyGraph && recurringTotal > 0 ? (
          <Paper id='recurringPiePaper'>
            <Doughnut
              id='recurringPie'
              data={monthlyGraph}
              options={{
                title: {
                  display: true,
                  text: monthlyGraph.datasets[0].label,
                  fontSize: 12,
                },
                legend: {
                  display: true,
                  position: 'bottom',
                  maintainAspectRation: false,
                },
              }}
            />
          </Paper>
        ) : (
          <Paper className='ovAlt'>
            <p>
              This section evaluates your recurring charges, i.e. Credit card
              charges, school loan payments, phone payments, etc. Click 'Add
              Expense' above to add an item.
            </p>
          </Paper>
        )}
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6} className='pieGridItem'>
        {nonMonthlyGraph && nonRecurringTotal > 0 ? (
          <Paper id='recurringPiePaper'>
            <Doughnut
              id='recurringPie'
              data={nonMonthlyGraph}
              options={{
                title: {
                  display: true,
                  text: nonMonthlyGraph.datasets[0].label,
                  fontSize: 12,
                },
                legend: {
                  display: true,
                  position: 'bottom',
                  maintainAspectRation: false,
                },
              }}
            />
          </Paper>
        ) : (
          <Paper className='ovAlt'>
            <p>
              This section evaluates your one-time charges, i.e. meals, gas,
              movie tickets, etc. Click 'Add Expense' above to add an item.
            </p>
          </Paper>
        )}
      </Grid>
    </>
  );
};

export default Overview;
