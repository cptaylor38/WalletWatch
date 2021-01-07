import React, { useContext, useState, useEffect } from 'react';
import UserProvider from '../../contexts/UserProvider';
import { Grid, Container} from '@material-ui/core';
import './Profile.css';
import Navbar from '../../components/Navbar/Nav';
import { useSelector, useDispatch } from 'react-redux';
import { getData, selectView } from '../../redux/actions';
import Content from '../../components/Content/Content';
import Overview from '../../components/Overview/Overview';
import Summary from '../../components/Summary/Summary';
import ExpenseForm from '../../components/ExpenseForm/ExpenseForm';

const Profile = () => {
  const [salarySection, setSalarySection] = useState(false);
  const userData = useContext(UserProvider.context);
  const dispatch = useDispatch();
  const user = useSelector(state => state.user)
  const view = useSelector(state => state.content);

  useEffect(()=> {
    if(userData) dispatch(getData(userData._id))
  }, [userData])

  const showSalaryUpdate = () => {
    setSalarySection(true);
  };

  const viewSelector = category => {
    dispatch(selectView(category))
  };

  const contentDisplay = () => {
    switch (view) {
      case 'Home':
        return <Content display={'home'} user={user}/>;
      case 'Travel':
        return <Content display={'travel'} user={user}/>;
      case 'Health':
        return <Content display={'health'} user={user}/>;
      case 'Leisure':
        return <Content display={'leisure'} user={user}/>;
      case 'Living':
        return <Content display={'living'} user={user}/>;
      case 'Finances':
        return <Content display={'finances'} user={user}/>;
      default:
        return <Content displpay={'home'} user={user}/>;
    }
  };

  return (
    <>
    <Navbar 
      user={user} 
      showSalaryUpdate={showSalaryUpdate}
      salarySection={salarySection}
      setSalarySection={setSalarySection}
      viewSelector={viewSelector}/>
    <Container maxWidth='xl' id='profilePage'>
      <Grid item xs={12}>
        <ExpenseForm />
      </Grid>
      <Grid item xs={12} id='overviewHeader'>
          <Overview />
        </Grid>
        <Grid item xs={12} className='chosenCatRegion'>
          {contentDisplay()}
        </Grid>
        <Grid item xs={12} id='summary'>
          <Summary />
        </Grid>
    </Container>
    </>
  );
};

export default Profile;
