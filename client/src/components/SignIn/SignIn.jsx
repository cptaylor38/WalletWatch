import React from 'react';
import { FaGooglePlusG } from 'react-icons/fa';
import './SignIn.css';

const SignIn = () => {
  return (
    <div className='loginCont'>
      <a href='/auth/google' className='loginBtn' id='googleBtn'>
        <FaGooglePlusG />
      </a>
    </div>
  );
};

export default SignIn;
