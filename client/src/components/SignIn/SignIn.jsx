import React from 'react';

const SignIn = () => {
    return (
        <>
            <h4>Login:</h4>
            <ul>
                <li><a href='/auth/facebook'>Login with Facebook</a></li>
                <li><a href='/auth/google'>Login with Google</a></li>
            </ul>
        </>
    )
}

export default SignIn;