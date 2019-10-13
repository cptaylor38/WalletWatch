import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/ToolBar';
import Typography from '@material-ui/core/Typography';
import './Nav.css';

const Nav = ({ user }) => {
    return (
        <>
            <AppBar position='static' id='siteNav'>
                <Toolbar>
                    <Typography variant='display5' color='inherit'>
                        {user ? <h3>Welcome, {user.username}</h3> : (<h3>Loading profile...</h3>)}
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Nav;