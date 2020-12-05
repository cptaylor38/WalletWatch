import React, { useState, useEffect } from 'react';
import './HomeOverview.css';
import { Doughnut } from 'react-chartjs-2';
import API from '../../../clientRoutes/API';
import { Paper, Grid } from '@material-ui/core';
import OverviewMobileSub from './OverviewMobileSub';
import moment from 'moment';

const Overview = ({ user }) => {
  const [profile, setProfile] = useState(null);
  const [doughnut, setDoughnut] = useState(null);
  const [nonMonDoughnut, setNonMonDoughnut] = useState(null);
  const [recurringTotal, setRecurringTotal] = useState(null);
  const [nonRecurringTotal, setNonRecurringTotal] = useState(null);

  useEffect(() => {
    if (profile !== null) {
      let financesTotal = 0;
      let livingTotal = 0;
      let healthTotal = 0;
      let leisureTotal = 0;
      let travelTotal = 0;

      let nonMonFin = 0;
      let nonMonLiv = 0;
      let nonMonHea = 0;
      let nonMonLei = 0;
      let nonMonTra = 0;

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
            if (item.monthly === true) return (financesTotal += item.amount);
            else return (nonMonFin += item.amount);
          case 'living':
            if (item.monthly === true) return (livingTotal += item.amount);
            else return (nonMonLiv += item.amount);
          case 'health':
            if (item.monthly === true) return (healthTotal += item.amount);
            else return (nonMonHea += item.amount);
          case 'leisure':
            if (item.monthly === true) return (leisureTotal += item.amount);
            else return (nonMonLei += item.amount);
          case 'travel':
            if (item.monthly === true) return (travelTotal += item.amount);
            else return (nonMonTra += item.amount);
          default:
            return item;
        }
      });

      let total =
        financesTotal + livingTotal + healthTotal + leisureTotal + travelTotal;
      setRecurringTotal(total);
      let nonMonTotal =
        nonMonFin + nonMonLiv + nonMonHea + nonMonLei + nonMonTra;
      setNonRecurringTotal(nonMonTotal);

      setDoughnut({
        labels: ['Finances', 'Living', 'Health', 'Leisure', 'Travel'],
        datasets: [
          {
            label: `Recurring Monthly Expenses - ${total.toLocaleString(
              'en-US',
              {
                style: 'currency',
                currency: 'USD',
              }
            )}`,
            backgroundColor: ['#5A4218', 'green', 'red', 'gold', 'aquamarine'],
            data: [
              financesTotal,
              livingTotal,
              healthTotal,
              leisureTotal,
              travelTotal,
            ],
          },
        ],
      });

      setNonMonDoughnut({
        labels: ['Finances', 'Living', 'Health', 'Leisure', 'Travel'],
        datasets: [
          {
            label: `Msc. Charges - ${nonMonTotal.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
            })}`,
            backgroundColor: ['#5A4218', 'green', 'red', 'gold', 'aquamarine'],
            data: [nonMonFin, nonMonLiv, nonMonHea, nonMonLei, nonMonTra],
          },
        ],
      });
    }
  }, [profile]);

  useEffect(() => {
    API.getHomeDisplay({ id: user }).then((response) => {
      setProfile(response.data);
    });
  }, []);
  return (
    <>
      <Grid item xs={12} sm={12} md={6} lg={6} className='pieGridItem'>
        {doughnut !== null && recurringTotal > 0 ? (
          <Paper id='recurringPiePaper'>
            <Doughnut
              id='recurringPie'
              data={doughnut}
              options={{
                title: {
                  display: true,
                  text: doughnut.datasets[0].label,
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
        {nonMonDoughnut !== null && nonRecurringTotal > 0 ? (
          <Paper id='recurringPiePaper'>
            <Doughnut
              id='recurringPie'
              data={nonMonDoughnut}
              options={{
                title: {
                  display: true,
                  text: nonMonDoughnut.datasets[0].label,
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
