import React from 'react';
import './Nav.css';

const Nav = ({ user }) => {
    return (
        <>
            <div className='siteNav'>
                <h1>Penny</h1>
                {user ? (<p>Welcome back, {user.username}</p>) : ''}
                <div>Site nav dropdown</div>
            </div>
        </>
    )
}

export default Nav;