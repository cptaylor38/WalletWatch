import React, { useState, useEffect } from 'react';
import './Home.css';
import SignIn from '../../components/SignIn/SignIn';
import LearnPage from './Learn/Learn';
import TweenMax, { Power2 } from 'gsap/TweenMax';
import TimelineMax from 'gsap/TimelineMax';

const Home = () => {

    const [welcome, setWelcome] = useState(true);
    const [showSignIn, setShowSignIn] = useState(false);
    const t1 = new TimelineMax()

    const displaySignIn = () => {
        setShowSignIn(!!welcome);
    }
    const displayLearn = () => {
        setWelcome(false);
    }

    useEffect(() => {
        t1.to('#hHeader', 5, { opacity: 1, ease: Power2.easeOut }, .5);
        t1.to('#hPar1', 3, { opacity: 1, ease: Power2.easeOut }, 1.5);
        t1.to('#hPar2', 3, { opacity: 1, ease: Power2.easeOut }, 2.5);
        t1.to('.hButton', 5, { opacity: 1, ease: Power2.easeOut }, 3.5);
    }, [t1])

    return (
        <>
            {
                welcome ? (<div className='homepage'>
                    <div className='hContent'>
                        <div className='hTitle'>
                            <h1 id='hHeader'>Welcome</h1>
                            <p id='hPar1'>My name's Penny.</p>
                            <p id='hPar2'>I'm here to help you manage your finances.</p>
                        </div>
                        <div className='hButtonRow'>
                            <button id='hLearn' className='hButton' onClick={displayLearn}>Learn More</button>
                            <button id='hContinue' className='hButton' onClick={displaySignIn}>Continue</button>
                        </div>
                    </div>
                    {showSignIn ? <SignIn /> : null}
                </div>) : <LearnPage />
            }
        </>
    )
}

export default Home;