import React, { useEffect, useContext } from 'react';
import UserProvider from '../../contexts/UserProvider';
import AppBar from '@material-ui/core/AppBar';
import { Link } from 'react-router-dom';
import { Grid, Button } from '@material-ui/core';
import './Nav.scss';

const Nav = () => {
  const user = useContext(UserProvider.context);
  const expenseCategories = [
    'Finances',
    'Living',
    'Health',
    'Leisure',
    'Travel',
  ];

  return (
    <>
      <AppBar position='static' className='landing__nav'>
        <Grid container id='navTop'>
          <Grid item>
            <h1>Penny</h1>
          </Grid>
          <Grid item>
            <a href={user ? '/auth/logout' : '/auth/google'}>
              {user ? 'Sign Out' : 'Sign In'}
            </a>
          </Grid>
        </Grid>
        {user ? (
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
        ) : null}
      </AppBar>
    </>
  );
};

export default Nav;
