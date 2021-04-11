import React, { useEffect, useRef } from 'react';
import { TimelineMax, Power2 } from 'gsap';
import { Paper } from '@material-ui/core';
import './Home.scss';

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
      { x: '0%', opacity: 0.6, ease: Power2.easeInOut }
    );
    landing_tl.fromTo(
      overview_button.current,
      1,
      { y: '800%' },
      { y: '0%', ease: Power2.easeInOut }
    );
  });
  return (
    <>
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
            <div>How do I use it?</div>
            <div className='landing__categories'>
              <h3 className='landing__cat__header'>
                Penny is designed to help you organize your expenses based on
                categories that make sense to you.
              </h3>
              <Paper className='ov__cat'>
                <h3>
                  "Finances" <span>Ex:</span>
                </h3>
                <hr />
                <ul>
                  <li>Credit Card Payments</li>
                  <li>Student Loans</li>
                  <li>Mortgages</li>
                  <li>Taxes</li>
                </ul>
              </Paper>
              <Paper className='ov__cat'>
                <h3>
                  "Travel" <span>Ex:</span>
                </h3>
                <hr />
                <ul>
                  <li>Car Payments</li>
                  <li>Car Insurance</li>
                  <li>Fuel and Maintenance</li>
                  <li>Hotels and Travel Costs</li>
                </ul>
              </Paper>
              <Paper className='ov__cat'>
                <h3>
                  "Leisure" <span>Ex:</span>
                </h3>
                <hr />
                <ul>
                  <li>Movies</li>
                  <li>Concerts</li>
                  <li>Video Games</li>
                  <li>Spa Dates</li>
                </ul>
              </Paper>
              <Paper className='ov__cat'>
                <h3>
                  "Living" <span>Ex:</span>
                </h3>
                <hr />
                <ul>
                  <li>Electricity</li>
                  <li>Water</li>
                  <li>Rent</li>
                  <li>Phone Bill</li>
                </ul>
              </Paper>
              <Paper className='ov__cat'>
                <h3>
                  "Health" <span>Ex:</span>
                </h3>
                <hr />
                <ul>
                  <li>Health Insurance</li>
                  <li>Doctor's Visits</li>
                  <li>Prescriptions</li>
                  <li>Gym Membership</li>
                </ul>
              </Paper>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Home;
