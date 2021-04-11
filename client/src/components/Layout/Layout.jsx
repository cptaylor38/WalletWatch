import React from 'react';
import './Layout.scss';
import Nav from '../Navbar/Nav';

const Layout = (props, { user }) => {
  return (
    <>
      <Nav user={user} />
      {props.children}
    </>
  );
};

export default Layout;
