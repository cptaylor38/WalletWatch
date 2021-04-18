import React, { useState, useContext } from 'react';
import UserProvider from '../../contexts/UserProvider';
import AppBar from '@material-ui/core/AppBar';
import { Link } from 'react-router-dom';
import { Grid, Button } from '@material-ui/core';
import {
  FaPlus,
  FaHome,
  FaMoneyBill,
  FaRegLightbulb,
  FaHeartbeat,
  FaGamepad,
  FaCarSide,
} from 'react-icons/fa';
import './Nav.scss';
import { useDispatch } from 'react-redux';
import { expenseFormToggle } from '../../redux/actions';

const Nav = () => {
  const user = useContext(UserProvider.context);
  const dispatch = useDispatch();
  const expenseCategories = [
    { icon: <FaMoneyBill key={'nav-icon-fin'} />, name: 'Finances' },
    { icon: <FaRegLightbulb key={'nav-icon-hom'} />, name: 'Living' },
    { icon: <FaHeartbeat key={'nav-icon-hea'} />, name: 'Health' },
    { icon: <FaGamepad key={'nav-icon-lei'} />, name: 'Leisure' },
    { icon: <FaCarSide key={'nav-icon-tra'} />, name: 'Travel' },
  ];
  const [add_text_toggle, set_add_text_toggle] = useState('none');
  const toggleAddText = (toggle_bool) => {
    set_add_text_toggle(toggle_bool ? 'block' : 'none');
  };
  const toggle_expense_form = () => {
    dispatch(expenseFormToggle());
  };

  return (
    <>
      <AppBar position='fixed' className='landing__nav'>
        <Grid container id='navTop'>
          <Grid item>
            <h1>Penny</h1>
          </Grid>
          {user ? (
            <Grid item className='add__expenses'>
              <Button
                variant='contained'
                onClick={toggle_expense_form}
                onMouseEnter={() => toggleAddText(true)}
                onMouseLeave={() => toggleAddText(false)}
              >
                <FaPlus />
                <span style={{ display: add_text_toggle }}>Add Expenses</span>
              </Button>
            </Grid>
          ) : null}
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
