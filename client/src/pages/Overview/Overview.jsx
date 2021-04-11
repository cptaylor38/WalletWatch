import React from 'react';
import { Container } from '@material-ui/core';
import './Overview.scss';
import Layout from '../../components/Layout/Layout';
import { useSelector } from 'react-redux';

const Profile = () => {
  const user = useSelector((state) => state.user);
  return (
    <>
      <Layout user={user}>
        <Container maxWidth='xl' className='profile__overview'>
          <h1>Overview</h1>
        </Container>
      </Layout>
    </>
  );
};

export default Profile;
