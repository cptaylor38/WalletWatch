import React, { useState, useEffect } from 'react';
import './Overview.css';
import { Doughnut } from 'react-chartjs-2';
import { Paper, Grid } from '@material-ui/core';
import { useSelector, useDispatch} from 'react-redux';

const Overview = () => {
  const [monthlyGraph, setMonthlyGraph] = useState(null);
  const [nonMonthlyGraph, setNonMonthlyGraph] = useState(null);
  const user = useSelector(state => state.user);
  const {categorizedNonRecurring, categorizedRecurring} = useSelector(state => state.expenseDetails.filteredCategoryData);
  const {nonRecDetail, recDetail} = useSelector(state => state.expenseDetails);

  const initGraphs = () => {
    if(nonRecDetail) 
        graphInitHelper({total: nonRecDetail.total, categoryData: categorizedNonRecurring}, false);
      if(recDetail) 
        graphInitHelper({total: recDetail.total, categoryData: categorizedRecurring}, true);
  }

  useEffect(() => {
    if (user.expense) {
      initGraphs();
    }
  }, []);

  const graphInitHelper = (expenseObj, recurring)=> {
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
            expenseObj.categoryData.financesDetails.total,
            expenseObj.categoryData.livingDetails.total,
            expenseObj.categoryData.healthDetails.total,
            expenseObj.categoryData.leisureDetails.total,
            expenseObj.categoryData.travelDetails.total,
          ],
        },
      ],
    }
    recurring ? setMonthlyGraph(graph) : setNonMonthlyGraph(graph);
  }

  return (
    <>
      <Grid item xs={12} sm={12} md={6} lg={6} className='pieGridItem'>
        {monthlyGraph ? (
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
        ) : null }
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6} className='pieGridItem'>
        {nonMonthlyGraph ? (
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
        ) : null }
      </Grid>
    </>
  );
};

export default Overview;
