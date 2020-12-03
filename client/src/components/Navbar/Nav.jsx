import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Grid, Container, Paper, Button } from '@material-ui/core';
import { FaHome, FaMoneyBill, FaRegLightbulb, FaHeartbeat, FaGamepad, FaCarSide } from 'react-icons/fa';
import './Nav.css';
import moment from 'moment';

const Nav = ({ user, setChosenCat, categoryOnClick }) => {

    const expenseCategories = [
        { style: { color: 'green' }, name: 'Finances', icon: <FaMoneyBill /> },
        { style: { color: 'blue' }, name: 'Living', icon: <FaRegLightbulb /> },
        { style: { color: 'red' }, name: 'Health', icon: <FaHeartbeat /> },
        { style: { color: 'gold' }, name: 'Leisure', icon: <FaGamepad /> },
        { style: { color: 'rgb(68, 46, 16)' }, name: 'Travel', icon: <FaCarSide /> }
      ];

    return (
        <>
            <AppBar position='static' id='siteNav'>
                <Grid container id='navTop'>
                <Grid item>{user ? <h3>Welcome, {user.username}</h3> : (<h3>Loading profile...</h3>)}</Grid>
                <Grid item><p>{moment(Date.now()).format('dddd, LL')}</p></Grid>
                <Grid item>
                    <Button className='navBtn' id='homeBtn' variant='contained' onClick={()=> setChosenCat('Home')}><FaHome /></Button>
                </Grid>
                <Grid item>
                    <Button className='navBtn' variant='contained' href='/auth/logout'>
                        Sign Out
                    </Button>
                </Grid>
                </Grid>
                <Grid container id='navBottom'>
                    <div id='categoryNav'>
                        {expenseCategories.map((item, index) => {
                            return (<Button
                                        href='#text-buttons'
                                        style={item.style}
                                        onClick={() => categoryOnClick(item.name)}
                                        key={index}
                                        className='categoryBtn'>
                                            <p className='catIcon'>{item.icon}</p>
                                            <p className='expenseCatText'>{item.name}</p>
                                    </Button>);
                        })}
                    </div>
                </Grid>
            </AppBar>
        </>
    )
}

export default Nav;