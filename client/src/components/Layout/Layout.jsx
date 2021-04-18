import React from 'react';
import './Layout.scss';
import { Container } from '@material-ui/core';

const Layout = (props) => {
  return (
    <>
      <Container maxWidth='xl' className='app__container'>
        {props.children}
      </Container>
    </>
  );
};

export default Layout;
