import React from 'react';
import './Layout.scss';
import { Container, Button } from '@material-ui/core';
import ChargesTab from '../ChargesTab/ChargesTab';

const Layout = (props) => {
  return (
    <>
      <Container maxWidth='xl' className='app__container'>
        <ChargesTab />
        {props.children}
      </Container>
    </>
  );
};

export default Layout;
