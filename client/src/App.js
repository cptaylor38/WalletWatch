import React from 'react';
import { Router, Route } from 'react-router-dom';
import history from './history';
import UserProvider from './contexts/UserProvider';
import Home from './pages/Home';
import Profile from './pages/Profile';

function App() {
  return (
    <Router history={history}>

      <UserProvider>
        <Route path='/profile' component={Profile} />
      </UserProvider>

      <Route path='/' component={Home} />

    </Router>
  );
}

export default App;
