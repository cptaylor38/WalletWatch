import React from 'react';
import { FaFacebook, FaGooglePlusG } from 'react-icons/fa';
import './SignIn.css';

const SignIn = () => {
    return (
        <div className='loginCont'>
            <a href='/auth/facebook' className='loginBtn' id='facebookBtn'><FaFacebook /></a>
            <a href='/auth/google' className='loginBtn' id='googleBtn'><FaGooglePlusG /></a>
        </div>
    )
}

export default SignIn;