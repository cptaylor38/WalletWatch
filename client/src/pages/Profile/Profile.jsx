import React, { useContext, useState, useEffect } from "react";
import UserProvider from "../../contexts/UserProvider";
import { Grid, Container, Paper, Button } from '@material-ui/core';
import SalaryInput from '../../components/SalaryInput/SalaryInput';
import './Profile.css';
import Content from '../../components/Content/Content';

const Profile = () => {
    const [selected, setSelected] = useState(null);
    const [salarySection, setSalarySection] = useState(false);
    const [chosenCat, setChosenCat] = useState('Home');
    const userData = useContext(UserProvider.context);
    useEffect(() => setSelected(userData), [userData]);

    const expenseCategories = [{ id: 1, name: 'Home' }, { id: 2, name: 'Travel' }, { id: 2, name: 'Health' }, { id: 3, name: 'Leisure' }, { id: 4, name: 'Living' }, { id: 5, name: 'Finances' }];

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
            <Grid container id='profileHeader'>
                <Grid item xs={12} sm={5} lg={4} id='gridWelcome'>
                    <Paper className='profHeaderSub'>
                        {selected ? (<>
                            <h2 id='welcomeH'>Welcome, {selected.username}</h2>
                            <div className='logoutSection'>
                                <Button size='medium' variant='contained' href='/auth/logout'>Log out</Button>
                            </div>
                        </>) : ''}
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={7} lg={8} id='gridSalary'>
                    <Paper className='profHeaderSub'>
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
            </Grid>
            <Grid container id='expenseCategories'>
                <Grid item xs={12} id='categoryNav'>
                    <Paper className='categorySelectRegion'>
                        {expenseCategories.map(item => <Button href="#text-buttons" onClick={() => categoryOnClick(item.name)} key={item.id} className='categoryBtn'>
                            {item.name}
                        </Button>)}
                    </Paper>
                </Grid>
            </Grid>
            <Grid container id='chosenCatContainer'>
                <Grid item xs={12}>
                    <Paper className='chosenCatRegion'>
                        {selected ? contentDisplay() : <p>Loading</p>}
                    </Paper>
                </Grid>
            </Grid>
        </Container >
    );
};

export default Profile;