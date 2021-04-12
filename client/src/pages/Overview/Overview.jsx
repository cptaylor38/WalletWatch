import React, { useEffect, useContext } from 'react';
import './Overview.scss';
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
      <h1>Overview</h1>
    </>
  );
};

export default Profile;
