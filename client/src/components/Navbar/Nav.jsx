import React, { useEffect, useContext } from 'react';
import UserProvider from '../../contexts/UserProvider';
import AppBar from '@material-ui/core/AppBar';
import { Link } from 'react-router-dom';
import { Grid, Button } from '@material-ui/core';
import {
  FaHome,
  FaMoneyBill,
  FaRegLightbulb,
  FaHeartbeat,
  FaGamepad,
  FaCarSide,
} from 'react-icons/fa';
import './Nav.scss';

const Nav = () => {
  const user = useContext(UserProvider.context);
  const expenseCategories = [
    { icon: <FaMoneyBill key={'nav-icon-fin'} />, name: 'Finances' },
    { icon: <FaRegLightbulb key={'nav-icon-hom'} />, name: 'Living' },
    { icon: <FaHeartbeat key={'nav-icon-hea'} />, name: 'Health' },
    { icon: <FaGamepad key={'nav-icon-lei'} />, name: 'Leisure' },
    { icon: <FaCarSide key={'nav-icon-tra'} />, name: 'Travel' },
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
            <Link className='nav__link' to='/profile/'>
              <FaHome />
              <span className='nav__text'>Overview</span>
            </Link>
            {expenseCategories.map((link, index) => {
              return (
                <Link
                  to={`/profile/${link.name}`}
                  className='nav__link'
                  key={index}
                >
                  {link.icon}
                  <span className='nav__text' key={`nav-text-${index}`}>
                    {' '}
                    {link.name}
                  </span>
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
