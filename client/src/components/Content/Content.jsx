import React, { useEffect, useState } from 'react';
import { Grid, Paper, Button } from '@material-ui/core';
import { FaFolderPlus } from 'react-icons/fa';
import CHeader from './ContentHeader/ContentHeader';
import Overview from '../HomeOverview/HomeOverview';
import HelperText from '../HelperText/HelperText';
import './Content.css';
import ExpenseForm from '../ExpenseForm/ExpenseForm';
import ChargeItem from '../ChargeItem/ChargeItem';
import { useSelector } from 'react-redux';

const Content = ({ display }) => {
  const [monthlyCharges, setMonthlyCharges] = useState(null);
  const [oneTime, setOneTime] = useState(null);
  const [expenseToggle, setExpenseToggle] = useState(false);
  const [totalMonthly, setTotalMonthly] = useState(null);
  const user = useSelector(state => state.user)

  const expenseInputToggle = () => {
    setExpenseToggle(!expenseToggle);
  };

  useEffect(() => {
    let expenseDiv = document.querySelector('#expenseInputSection');
    if (expenseToggle === false) {
      expenseDiv.style.display = 'none';
    }
    if (expenseToggle === true) {
      expenseDiv.style.display = 'flex';
    }
  }, [expenseToggle]);

  useEffect(() => {
    if (monthlyCharges !== null && monthlyCharges.length > 0) {
      let total = 0;
      monthlyCharges.map(item => (total += item.amount));
      setTotalMonthly(total);
    }
  }, [monthlyCharges]);

  return (
    <>
      {display === 'home' ? (
        <>
          <Grid container id='addCont'>
            <Grid item xs={12} id='addItem'>
              <Grid item xs={12} id='addExpenseSection'>
                  <Button id='toggleExpenseBtn' onClick={expenseInputToggle}>
                    <p style={{ marginRight: 10 }}>Add Expense</p>{' '}
                    <FaFolderPlus style={{ fontSize: 24 }} />{' '}
                  </Button>
              </Grid>
              <Grid item xs={12} id='expenseInputSection'>
                  {user ? (
                    <ExpenseForm user={user} />
                  ) : null}
                </Grid>
            </Grid>
          </Grid>
          <Grid container id='homeContentGrid'>
            {user.expense ? (<Overview user={user} />) : null}
          </Grid>
        </>
      ) : (
        <>
          <Grid container id='addCont'>
            <Grid item xs={12} id='addItem'>
              <Grid item xs={12} id='addExpenseSection'>
                  <Button id='toggleExpenseBtn' onClick={expenseInputToggle}>
                    <p style={{ marginRight: 10 }}>Add Expense</p>{' '}
                    <FaFolderPlus style={{ fontSize: 24 }} />{' '}
                  </Button>
              </Grid>
              <Grid item xs={12} id='expenseInputSection'>
                  {user ? (
                    <ExpenseForm user={user} />
                  ) : null}
              </Grid>
            </Grid>
          </Grid>
          <Grid container id='contentContainer'>
            <Grid item xs={12} lg={5}>
              <Paper>
                {monthlyCharges && monthlyCharges.length > 0 ? (
                  <CHeader message={'Monthly'} total={totalMonthly} />
                ) : (
                  <HelperText monthly={true} display={display} />
                )}
                <Grid container className='expListCont'>
                  {monthlyCharges
                    ? monthlyCharges.map((item, index) => (
                        <ChargeItem data={item} key={index} />
                      ))
                    : null}
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={12} lg={5}>
              <Paper>
                {oneTime && oneTime.length > 0 ? (
                  <CHeader message={'Non-Monthly'} />
                ) : (
                  <HelperText monthly={false} display={display} />
                )}
                <Grid container className='expListCont'>
                  {oneTime !== null && oneTime.length > 0
                    ? oneTime.map((item, index) => (
                        <ChargeItem data={item} key={index} />
                      ))
                    : null}
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
};

export default Content;
