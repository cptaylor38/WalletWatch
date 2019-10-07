import React from 'react';

const Home = () => {
    return (
        <>
            <div className='homepage'>
                <h1>Welcome to Penny</h1>
                <h4>Login:</h4>
                <ul>
                    <li><a href='/auth/facebook'>Login with Facebook</a></li>
                    <li><a href='/auth/google'>Login with Google</a></li>
                </ul>
            </div>
        </>
    )
}

export default Home;