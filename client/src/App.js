import React from 'react';
import { Router, Route } from 'react-router-dom';
import history from './history';
import Home from './pages/Home/Home';
import Overview from './pages/Overview/Overview';
import './App.css';
import Living from './pages/Living/Living';
import Leisure from './pages/Leisure/Leisure';
import Health from './pages/Health/Health';
import Travel from './pages/Travel/Travel';
import Finances from './pages/Finances/Finances';
import UserProvider from './contexts/UserProvider';
import Nav from './components/Navbar/Nav';
import ProtectedRoute from './contexts/ProtectedRoute';
import { Container } from '@material-ui/core';

function App() {
  return (
    <Router history={history}>
      <UserProvider>
        <Nav />
        <ProtectedRoute exact path='/profile' component={Overview} />
        <ProtectedRoute path='/profile/Health' component={Health} />
        <ProtectedRoute path='/profile/Leisure' component={Leisure} />
        <ProtectedRoute path='/profile/Travel' component={Travel} />
        <ProtectedRoute path='/profile/Living' component={Living} />
        <ProtectedRoute path='/profile/Finances' component={Finances} />
      </UserProvider>
      <Route exact path='/' component={Home} />
    </Router>
  );
}

export default App;
