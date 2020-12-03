import React from 'react';
import './Home.css';
import SignIn from '../../components/SignIn/SignIn';

const Home = () => {

    return (
        <>
            <div className='homepage'>
                <div className='hContent'>
                    <img src={require('../../assets/images/penny.svg')} alt='penny' id='pennyImg' />
                    <div className='hTitle'>
                        <p id='hPar1'>My name's <span id='hHeader'>Penny</span>.</p>
                        <p id='hPar2'>I'm here to help you manage your finances.</p>
                    </div>
                </div>
                <p id='signInTxt'>Sign In</p>
                <SignIn id='hSign' />
            </div>
        </>
    )
}

export default Home;