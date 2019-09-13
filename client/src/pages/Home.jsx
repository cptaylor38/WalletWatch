import React from 'react';
import Terminal from '../components/displays/Terminals';
import CardList from '../components/cards/CardList';

const Home = () => {
    return (
        <div className='page' style={{ textAlign: 'center' }}>
            <p className='page-title'>Simple OAuth something</p>
            <p style={{ fontSize: 20 }}>
                something about logging in with different apps goes here
            </p>
            <Terminal userData={"passport.authenticate('facebook')"} selected="All" />
            <p>Popular strategies</p>
            <CardList />
            <div></div>
        </div>
    )
}

export default Home;