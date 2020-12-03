import React, { useContext, useState, useEffect } from 'react';
import UserProvider from '../../contexts/UserProvider';
import { Grid, Container, Paper, Button } from '@material-ui/core';
import SalaryInput from '../../components/SalaryInput/SalaryInput';
import './Profile.css';
import Content from '../../components/Content/Content';
import Navbar from '../../components/Navbar/Nav';

const Profile = () => {
  const [selected, setSelected] = useState(null);
  const [salarySection, setSalarySection] = useState(false);
  const [chosenCat, setChosenCat] = useState('Home');
  const userData = useContext(UserProvider.context);

  useEffect(() => setSelected(userData), [userData]);

  const showSalaryUpdate = () => {
    setSalarySection(true);
  };

  const categoryOnClick = category => {
    setChosenCat(category);
  };

  const contentDisplay = () => {
    switch (chosenCat) {
      case 'Home':
        return <Content display={'home'} user={selected._id} />;
      case 'Travel':
        return <Content display={'travel'} user={selected._id} />;
      case 'Health':
        return <Content display={'health'} user={selected._id} />;
      case 'Leisure':
        return <Content display={'leisure'} user={selected._id} />;
      case 'Living':
        return <Content display={'living'} user={selected._id} />;
      case 'Finances':
        return <Content display={'finances'} user={selected._id} />;
      default:
        return <Content displpay={'home'} user={selected._id} />;
    }
  };

  return (
    <>
    <Navbar selected={selected} user={userData} setChosenCat={setChosenCat} categoryOnClick={categoryOnClick}/>
    <Container maxWidth='xl' id='profilePage'>
      <Grid container id='gridSalary'>
        <Paper className='profHeaderSub' id='salaryPaper'>
          {selected && !salarySection ? (
            <>
              <p id='currentSalP'>
                Current yearly income:{' '}
                {selected.salary.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD'
                })}
              </p>
              <Button
                id='salaryUpdateBtn'
                variant='outlined'
                onClick={() => showSalaryUpdate()}
              >
                Update
              </Button>
            </>
          ) : (
            <SalaryInput
              selected={selected}
              setSelected={setSelected}
              setSalarySection={setSalarySection}
            />
          )}
        </Paper>
      </Grid>
      <Grid container id='chosenCatContainer'>
        <Grid item xs={12} className='chosenCatRegion'>
          {selected ? contentDisplay() : <p>Loading</p>}
        </Grid>
      </Grid>
    </Container>
    </>
  );
};

export default Profile;
