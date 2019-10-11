import React, { useEffect } from 'react';
import './Home.css';
import SignIn from '../../components/SignIn/SignIn';
import LearnPage from './Learn/Learn';
import TweenMax, { Power2 } from 'gsap/TweenMax';
import TimelineMax from 'gsap/TimelineMax';

const Home = () => {

    const t1 = new TimelineMax()

    useEffect(() => {
        t1.to('#pennyImg', 3, { opacity: 1, ease: Power2.easeOut }, .3);
        t1.to('#hHeader', 5, { opacity: 1, ease: Power2.easeOut }, .5);
        t1.to('#hPar1', 3, { opacity: 1, ease: Power2.easeOut }, 1.5);
        t1.to('#hPar2', 3, { opacity: 1, ease: Power2.easeOut }, 2.5);
        t1.to('.hButton', 5, { opacity: 1, ease: Power2.easeOut }, 3.5);
        t1.to('.loginBtn', 3, { opacity: 1, ease: Power2.easeOut }, 4);
    }, [t1])

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
                <SignIn id='hSign' />
            </div>
            <LearnPage />

        </>
    )
}

export default Home;