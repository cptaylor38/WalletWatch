import React, { useContext, useState, useEffect } from "react";
import UserProvider from "../../contexts/UserProvider";
import { Grid, Container, Paper } from '@material-ui/core';
import SalaryInput from '../../components/SalaryInput/SalaryInput';
import './Profile.css';
import API from "../../clientRoutes/API";

const Profile = () => {
    const [selected, setSelected] = useState(null);
    const [salarySection, setSalarySection] = useState(false);
    const userData = useContext(UserProvider.context);
    useEffect(() => setSelected(userData), [userData]);

    const showSalaryUpdate = () => {
        setSalarySection(true);
    }

    return (
        <Container maxWidth='xl' id='profilePage'>
            <Grid container id='profileHeader'>
                <Grid item xs={12} sm={5} lg={4} id='gridWelcome'>
                    <Paper className='profHeaderSub'>
                        {selected ? (<>
                            <h2>Welcome, {selected.username}</h2>
                            <div className='logoutSection'>
                                <a href='/auth/logout'>Log out</a>
                            </div>
                        </>) : ''}
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={7} lg={8} id='gridSalary'>
                    <Paper className='profHeaderSub'>
                        {selected && !salarySection ? (
                            <>
                                <p>Current yearly income: {selected.salary.toFixed(2)}</p>
                                <button type='button' onClick={() => showSalaryUpdate()}>Update now</button>
                            </>
                        ) :
                            <SalaryInput selected={selected} setSelected={setSelected} setSalarySection={setSalarySection} />}
                    </Paper>
                </Grid>
            </Grid>
        </Container >
    );
};

export default Profile;