import React, { useContext, useState } from 'react';
import './Layout.scss';
import { Container, Button, Grid } from '@material-ui/core';
import UserProvider from '../../contexts/UserProvider';
import ChargesTab from '../ChargesTab/ChargesTab';
import { FaPlus } from 'react-icons/fa';
import { TweenMax } from 'gsap';

const Layout = (props) => {
  const user = useContext(UserProvider.context);
  const [add_text_toggle, set_add_text_toggle] = useState('none');
  const toggleAddText = (toggle_bool) => {
    set_add_text_toggle(toggle_bool ? 'block' : 'none');
  };

  return (
    <>
      <Container maxWidth='xl' className='app__container'>
        {user ? (
          <Grid item className='add__expenses'>
            <Button
              variant='contained'
              onMouseEnter={() => toggleAddText(true)}
              onMouseLeave={() => toggleAddText(false)}
            >
              <FaPlus />
              <span style={{ display: add_text_toggle }}>Add Expenses</span>
            </Button>
          </Grid>
        ) : null}
        {props.children}
        <div className='test'>testing</div>
      </Container>
    </>
  );
};

export default Layout;
