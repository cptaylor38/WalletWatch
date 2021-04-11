import React, { useEffect, useContext } from 'react';
import { Container } from '@material-ui/core';
import './Overview.scss';
import Layout from '../../components/Layout/Layout';
import { useSelector, useDispatch } from 'react-redux';
import UserProvider from '../../contexts/UserProvider';
import { getData, categorize } from '../../redux/actions';

const Profile = () => {
  const userData = useContext(UserProvider.context);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  useEffect(() => {
    if (userData) dispatch(getData(userData._id));
  }, [userData, dispatch]);

  return (
    <>
      <Container maxWidth='xl' className='profile__overview'>
        <h1>Overview</h1>
      </Container>
    </>
  );
};

export default Profile;
