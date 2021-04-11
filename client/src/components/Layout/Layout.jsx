import React, { useEffect } from 'react';
import './Layout.scss';
import Nav from '../Navbar/Nav';

const Layout = (props) => {
  return (
    <>
      <Nav user={props.user} />
      {props.children}
    </>
  );
};

export default Layout;
