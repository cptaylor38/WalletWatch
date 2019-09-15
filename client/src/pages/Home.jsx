import React from 'react';

const Home = () => {
    return (
        <>
            <div className='page'>
                Login:
                <ul>
                    <li><a href='/auth/facebook'>Login with Facebook</a></li>
                    <li><a href='/auth/google'>Login with Google</a></li>
                </ul>
            </div>
        </>
    )
}

export default Home;