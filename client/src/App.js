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

function App() {
  return (
    <Router history={history}>
      <UserProvider>
        <Nav user={UserProvider.context} />
        <Route exact path='/profile/' component={Overview} />
        <Route path='/profile/Health' component={Health} />
        <Route path='/profile/Leisure' component={Leisure} />
        <Route path='/profile/Travel' component={Travel} />
        <Route path='/profile/Living' component={Living} />
        <Route path='/profile/Finances' component={Finances} />
      </UserProvider>
      <Route exact path='/' component={Home} />
    </Router>
  );
}

export default App;
