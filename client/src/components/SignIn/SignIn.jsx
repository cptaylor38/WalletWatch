import React from 'react';
import { FaGooglePlusG } from 'react-icons/fa';
import './SignIn.css';

const SignIn = () => {
  return (
    <div className='loginCont'>
      <a href='/auth/google' className='signin__button'>
        Login
      </a>
    </div>
  );
};

export default SignIn;
