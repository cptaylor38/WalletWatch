import React, { useEffect, useRef } from 'react';
import { TimelineMax, Power2 } from 'gsap';
import './Home.scss';
import SignIn from '../../components/SignIn/SignIn';

const Home = () => {
  const heroText = useRef(null);
  const overview_button = useRef(null);
  const landing_tl = new TimelineMax();
  const scrollHandler = () => {
    document
      .getElementById('landing_overview')
      .scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    landing_tl.fromTo(
      heroText.current,
      2,
      { x: '-200%', opacity: 0 },
      { x: '0%', opacity: 1, ease: Power2.easeInOut }
    );
    landing_tl.fromTo(
      overview_button.current,
      1,
      { y: '500%' },
      { y: '0%', ease: Power2.easeInOut }
    );
  }, []);
  return (
    <>
      <div className='landing__nav'>
        <div>
          <p>Penny</p>
        </div>
        <SignIn />
      </div>
      <div className='homepage'>
        <main className='landing__main'>
          <section className='landing__hero'>
            <p ref={heroText}>
              Organize and analyze your spending with an easy to use online
              checkbook.
            </p>
            <button onClick={scrollHandler} ref={overview_button}>
              Learn More
            </button>
          </section>
          <section className='landing__overview' id='landing_overview'>
            <div>
              <h5>Tip:</h5>
              <p>Enter your annual salary for budget vs spending analysis.</p>
              <p>
                If hourly, enter your hourly average and weekly average hours to
                calculate your projected salary.
              </p>
            </div>
            <div></div>
            <div></div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Home;
