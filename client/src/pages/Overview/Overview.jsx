import React, { useState, useEffect, useContext } from 'react';
import './Overview.scss';
import { useSelector, useDispatch } from 'react-redux';
import { FaEdit } from 'react-icons/fa';
import SalaryInput from '../../components/SalaryInput/SalaryInput';
import UserProvider from '../../contexts/UserProvider';
import { getData, categorize } from '../../redux/actions';
import { Grid, Button, Paper, Typography, Container } from '@material-ui/core';
import Layout from '../../components/Layout/Layout';
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

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <Layout>
      <section>
        <Paper className='ov__section__group ov__user__info'>
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
      <section>
        <Paper className='ov__section__group'>
          <Typography className='ov__section__head'>Breakdown</Typography>
          <div className='bd__outer__cont'>
            <Container className='bd__cont'>
              <Typography>Budget Remaining</Typography>
            </Container>
            <Container className='bd__cont'>
              <Typography>Upcoming Charges</Typography>
            </Container>
            <Container className='bd__cont'>
              <Typography>Reccuring Charges</Typography>
              <Typography>Non-Recurring Charges</Typography>
            </Container>
          </div>
        </Paper>
      </section>
    </Layout>
  );
};

export default Profile;
