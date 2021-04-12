import React, { useState, useEffect, useContext } from 'react';
import './Overview.scss';
import { useSelector, useDispatch } from 'react-redux';
import { FaEdit } from 'react-icons/fa';
import SalaryInput from '../../components/SalaryInput/SalaryInput';
import UserProvider from '../../contexts/UserProvider';
import { getData, categorize } from '../../redux/actions';
import { Grid, Button, Paper } from '@material-ui/core';
import moment from 'moment';

const Profile = () => {
  const userData = useContext(UserProvider.context);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [salarySection, setSalarySection] = useState(false);

  const showSalaryUpdate = () => {
    setSalarySection(true);
  };

  useEffect(() => {
    if (userData) dispatch(getData(userData._id));
  }, [userData, dispatch]);

  return (
    <>
      <section>
        <Paper className='ov__user__info'>
          <Grid item>
            <h1>Welcome, {user.username}</h1>
          </Grid>
          <Grid item>
            <p>{moment(Date.now()).format('dddd, LL')}</p>
          </Grid>
          <Grid item>
            {user.salary && !salarySection ? (
              <div className='salary__section'>
                <p>
                  Current yearly income:{' '}
                  <span style={{ color: 'darkolivegreen' }}>
                    {user.salary.toLocaleString('en-US', {
                      style: 'currency',
                      currency: 'USD',
                    })}
                  </span>
                  <Button onClick={() => showSalaryUpdate()}>
                    <FaEdit />
                  </Button>
                </p>
              </div>
            ) : (
              <SalaryInput user={user} setSalarySection={setSalarySection} />
            )}
          </Grid>
        </Paper>
      </section>
    </>
  );
};

export default Profile;
