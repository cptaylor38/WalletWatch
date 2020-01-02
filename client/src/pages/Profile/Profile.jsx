import React, { useContext, useState, useEffect } from "react";
import UserProvider from "../../contexts/UserProvider";
import { Grid, Container, Paper, Button } from '@material-ui/core';
import { FaHome, FaMoneyBill, FaRegLightbulb, FaHeartbeat, FaGamepad, FaCarSide } from 'react-icons/fa';
import SalaryInput from '../../components/SalaryInput/SalaryInput';
import './Profile.css';
import Content from '../../components/Content/Content';
import moment from "moment";
const video = require('../../assets/images/globe.mp4');
const ogvideo = require('../../assets/images/ogglobe.ogv');
const webmglobe = require('../../assets/images/webmglobe.webm');

const Profile = () => {
    const [selected, setSelected] = useState(null);
    const [salarySection, setSalarySection] = useState(false);
    const [chosenCat, setChosenCat] = useState('Home');
    const userData = useContext(UserProvider.context);

    useEffect(() => setSelected(userData), [userData]);

    const expenseCategories = [
        { style: { color: '#5A4218' }, name: 'Finances', icon: <FaMoneyBill /> },
        { style: { color: 'green' }, name: 'Living', icon: <FaRegLightbulb /> },
        { style: { color: 'red' }, name: 'Health', icon: <FaHeartbeat /> },
        { style: { color: 'gold' }, name: 'Leisure', icon: <FaGamepad /> },
        { style: { color: 'aquamarine' }, name: 'Travel', icon: <FaCarSide /> }
    ];

    const showSalaryUpdate = () => {
        setSalarySection(true);
    }

    const categoryOnClick = (category) => {
        setChosenCat(category);
    }

    const contentDisplay = () => {
        switch (chosenCat) {
            case 'Home':
                return <Content display={'home'} user={selected._id} />
            case 'Travel':
                return <Content display={'travel'} user={selected._id} />
            case 'Health':
                return <Content display={'health'} user={selected._id} />
            case 'Leisure':
                return <Content display={'leisure'} user={selected._id} />
            case 'Living':
                return <Content display={'living'} user={selected._id} />
            case 'Finances':
                return <Content display={'finances'} user={selected._id} />
            default: return <Content displpay={'home'} user={selected._id} />
        }
    }

    return (
        <Container maxWidth='xl' id='profilePage'>
            <div id='backgroundContainer'>
                <video autoPlay loop muted id='backgroundVid'>
                    <source src={video} type='video/mp4'></source>
                    <source src={ogvideo} type='video/ogg'></source>
                    <source src={webmglobe} type='video/webm'></source>
                </video>
            </div>
            <Grid container id='profileHeader'>
                <Grid item>
                    {selected ? <p id='welcomeH'>Welcome, {selected.username} <Button id='logBtn' variant='contained' href='/auth/logout'>Log out</Button></p> : null}
                </Grid>
                <Grid item id='name_logout'>
                    {selected ? (<>
                        <div className='logoutSection'>
                            <Button id='homeBtn' onClick={() => setChosenCat('Home')}><FaHome style={{ fontSize: '36px' }} /><p>Home</p></Button>
                        </div>
                    </>) : ''}
                </Grid>
                <Grid item id='gridDate'>
                    <p>{moment(Date.now()).format('dddd, LL')}</p>
                </Grid>
            </Grid>
            <Grid container id='gridSalary'>
                <Paper className='profHeaderSub' id='salaryPaper'>
                    {selected && !salarySection ? (
                        <>
                            <p id='currentSalP'>Current yearly income: {selected.salary.toLocaleString("en-US", {
                                style: "currency",
                                currency: "USD"
                            })}</p>
                            <Button id='salaryUpdateBtn' variant='outlined' onClick={() => showSalaryUpdate()}>Update</Button>
                        </>
                    ) :
                        <SalaryInput selected={selected} setSelected={setSelected} setSalarySection={setSalarySection} />}
                </Paper>
            </Grid>
            <Grid container id='expenseCategories'>
                <Grid item xs={12} id='categoryNav'>
                    <Paper className='categorySelectRegion'>
                        {expenseCategories.map((item, index) => {
                            return (
                                <Button href="#text-buttons"
                                    style={item.style}
                                    onClick={() => categoryOnClick(item.name)}
                                    key={index}
                                    className='categoryBtn'>
                                    <p className='catIcon'>{item.icon}</p>
                                    <p className='expenseCatText'>{item.name}</p>
                                </Button>
                            )
                        })}
                    </Paper>
                </Grid>
            </Grid>
            <Grid container id='chosenCatContainer'>
                <Grid item xs={12} className='chosenCatRegion'>
                    {selected ? contentDisplay() : <p>Loading</p>}
                </Grid>
            </Grid>
        </Container >
    );
};

export default Profile;