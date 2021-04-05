import React from 'react';
import './Home.scss';
import SignIn from '../../components/SignIn/SignIn';

const Home = () => {
  return (
    <>
      <div className='landing__nav'>
        <div>
          <h1>Penny</h1>
        </div>
        <SignIn id='hSign' />
      </div>
      <div className='homepage'>
        <div className='hContent'>
          <div className='hTitle'>
            <p id='hPar1'>
              My name's <span id='hHeader'>Penny</span>.
            </p>
            <p id='hPar2'>I'm here to help you manage your finances.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
