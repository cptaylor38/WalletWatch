import React, { useContext, useState, useEffect } from 'react';
import UserProvider from '../../contexts/UserProvider';
import { Grid, Container} from '@material-ui/core';
import './Profile.css';
import Content from '../../components/Content/Content';
import Navbar from '../../components/Navbar/Nav';
import {useSelector, useDispatch} from 'react-redux';
import {getData } from '../../redux/actions';

const Profile = () => {
  const [selected, setSelected] = useState(null);
  const [salarySection, setSalarySection] = useState(false);
  const [chosenCat, setChosenCat] = useState('Home');
  const userData = useContext(UserProvider.context);
  const dispatch = useDispatch();
  const user = useSelector(state => state.user)

  useEffect(() => setSelected(userData), [userData]);
  useEffect(()=> {
    if(userData) dispatch(getData(userData._id))
  }, [userData, dispatch])

  const showSalaryUpdate = () => {
    setSalarySection(true);
  };

  const categoryOnClick = category => {
    setChosenCat(category);
  };

  const contentDisplay = () => {
    switch (chosenCat) {
      case 'Home':
        return <Content display={'home'} />;
      case 'Travel':
        return <Content display={'travel'} />;
      case 'Health':
        return <Content display={'health'} />;
      case 'Leisure':
        return <Content display={'leisure'} />;
      case 'Living':
        return <Content display={'living'} />;
      case 'Finances':
        return <Content display={'finances'} />;
      default:
        return <Content displpay={'home'} />;
    }
  };

  return (
    <>
    <Navbar 
      user={user} 
      setChosenCat={setChosenCat} 
      showSalaryUpdate={showSalaryUpdate}
      salarySection={salarySection}
      setSalarySection={setSalarySection}
      categoryOnClick={categoryOnClick}/>
    <Container maxWidth='xl' id='profilePage'>
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
