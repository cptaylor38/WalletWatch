import React, { useState, useEffect } from 'react';
import './Home.css';
import SignIn from '../../components/SignIn/SignIn';
import LearnPage from './Learn/Learn';
import TweenMax, { Power2 } from 'gsap/TweenMax';

const Home = () => {

    const [welcome, setWelcome] = useState(true);
    const [showSignIn, setShowSignIn] = useState(false);
    const displaySignIn = () => {
        setShowSignIn(!!welcome);
    }
    const displayLearn = () => {
        setWelcome(false);
    }

    useEffect(() => {
        setTimeout(() => { TweenMax.to('.hTitle', 6, { opacity: 1, ease: Power2.easeOut }) }, 250)
    }, [])

    return (
        <>
            {
                welcome ? (<div className='homepage'>
                    <div className='hContent'>
                        <div className='hTitle'>
                            <h1>Welcome to Penny</h1>
                            <p>I'm here to help you manage your finances.</p>
                        </div>
                        <button id='hLearn' onClick={displayLearn}>Learn More</button>
                        <button id='hContinue' onClick={displaySignIn}>Continue</button>
                    </div>
                    {showSignIn ? <SignIn /> : null}
                </div>) : <LearnPage />
            }
        </>
    )
}

export default Home;