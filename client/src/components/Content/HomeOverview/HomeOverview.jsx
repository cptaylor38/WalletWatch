import React, { useState, useEffect } from 'react';
import './HomeOverview.css';
import { Doughnut } from 'react-chartjs-2';
import API from '../../../clientRoutes/API';
import { Paper, Grid } from '@material-ui/core';
import OverviewMobileSub from './OverviewMobileSub';
import {useDispatch} from 'react-redux';
import moment from 'moment';

const Overview = ({ user }) => {
  const [profile, setProfile] = useState(null);
  const [monthlyGraph, setMonthlyGraph] = useState(null);
  const [nonMonthlyGraph, setNonMonthlyGraph] = useState(null);
  const [recurringTotal, setRecurringTotal] = useState(null);
  const [nonRecurringTotal, setNonRecurringTotal] = useState(null);

  useEffect(() => {
    if (profile !== null) {
      let recurringExpenseObj = {
        financesTotal: 0,
        livingTotal: 0,
        healthTotal: 0,
        leisureTotal: 0,
        travelTotal: 0
      }

      let nonRecurringExpenseObj = {
        financesTotal: 0,
        livingTotal: 0,
        healthTotal: 0,
        leisureTotal: 0,
        travelTotal: 0
      }

      let nonRecTotal = 0;

      profile.expense.filter((item) => {
        if (item.recurring === false) {
          if (
            moment(item.date).format('MMMM') ===
            moment(Date.now()).format('MMMM')
          ) {
            nonRecTotal += item.amount;
            return item;
          }
        }
        setNonRecurringTotal(nonRecTotal);
      });

      profile.expense.map((item) => {
        switch (item.category) {
          case 'finances':
            if (item.monthly) return (recurringExpenseObj.financesTotal += item.amount);
            else return (nonRecurringExpenseObj.financesTotal += item.amount);
          case 'living':
            if (item.monthly) return (recurringExpenseObj.livingTotal += item.amount);
            else return (nonRecurringExpenseObj.livingTotal += item.amount);
          case 'health':
            if (item.monthly) return (recurringExpenseObj.healthTotal += item.amount);
            else return (nonRecurringExpenseObj.healthTotal += item.amount);
          case 'leisure':
            if (item.monthly) return (recurringExpenseObj.leisureTotal += item.amount);
            else return (nonRecurringExpenseObj.leisureTotal += item.amount);
          case 'travel':
            if (item.monthly) return (recurringExpenseObj.travelTotal += item.amount);
            else return (nonRecurringExpenseObj.travelTotal += item.amount);
          default:
            return item;
        }
      });

      
      expenseSumHelper(recurringExpenseObj, true);
      expenseSumHelper(nonRecurringExpenseObj, false);
      graphInitHelper(recurringExpenseObj, true);
      graphInitHelper(nonRecurringExpenseObj, false);
    }
  }, [profile]);

  const graphInitHelper = (expenseObj, recurring)=> {
    let graph = {
      labels: ['Finances', 'Living', 'Health', 'Leisure', 'Travel'],
      datasets: [
        {
          label: `Recurring Monthly Expenses - ${expenseSumHelper(expenseObj).toLocaleString(
            'en-US',
            {
              style: 'currency',
              currency: 'USD',
            }
          )}`,
          backgroundColor: ['#5A4218', 'green', 'red', 'gold', 'aquamarine'],
          data: [
            expenseObj.financesTotal,
            expenseObj.livingTotal,
            expenseObj.healthTotal,
            expenseObj.leisureTotal,
            expenseObj.travelTotal,
          ],
        },
      ],
    }
    recurring ? setMonthlyGraph(graph) : setNonMonthlyGraph(graph);
  }

  const expenseSumHelper = (expenseObj, recurring)=> {
    let total = 0;
    for(let prop in expenseObj){
      total += prop;
    }
    expenseObj === recurring ? setRecurringTotal(total) : setNonRecurringTotal(total);
    return total;
  }

  useEffect(() => {
    API.getHomeDisplay({ id: user }).then((response) => {
      setProfile(response.data);
    });
  }, [user]);

  return (
    <>
      <Grid item xs={12} sm={12} md={6} lg={6} className='pieGridItem'>
        {monthlyGraph !== null && recurringTotal > 0 ? (
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
        {nonMonthlyGraph !== null && nonRecurringTotal > 0 ? (
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
      <Grid container id='mobileOverview'>
        {recurringTotal !== null &&
        nonRecurringTotal !== null &&
        profile.salary > 0 ? (
          <OverviewMobileSub
            rTotal={recurringTotal}
            nrTotal={nonRecurringTotal}
            profile={profile}
          />
        ) : (
          <Paper className='ovAlt'>
            This section provides an overview of your charges and how they
            affect your monthly income. Please ensure your salary is updated
            above.
          </Paper>
        )}
      </Grid>
    </>
  );
};

export default Overview;
