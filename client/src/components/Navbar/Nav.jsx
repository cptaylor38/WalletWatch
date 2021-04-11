import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Link } from 'react-router-dom';
import { Grid, Button } from '@material-ui/core';
import './Nav.scss';
import moment from 'moment';

const Nav = ({ user, showSalaryUpdate, salarySection, setSalarySection }) => {
  const expenseCategories = [
    'Finances',
    'Living',
    'Health',
    'Leisure',
    'Travel',
  ];

  return (
    <>
      <AppBar position='static' id='siteNav'>
        <Grid container id='navTop'>
          <Grid item>
            <h1>Penny</h1>
          </Grid>
          <Grid item>
            {user ? (
              <h3>Welcome, {user.username}</h3>
            ) : (
              <h3>Loading profile...</h3>
            )}
          </Grid>
          <Grid item>
            <p>{moment(Date.now()).format('dddd, LL')}</p>
          </Grid>
          <Grid item>
            <Button className='navBtn' href='/auth/logout'>
              Sign Out
            </Button>
          </Grid>
        </Grid>
        <Grid container className='nav__bottom'>
          <Link to='/profile/'>Overview</Link>
          {expenseCategories.map((link, index) => {
            return (
              <Link to={`/profile/${link}`} key={index}>
                {link}
              </Link>
            );
          })}
        </Grid>
      </AppBar>
    </>
  );
};

export default Nav;
