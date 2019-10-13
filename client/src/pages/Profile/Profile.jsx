import React, { useContext, useState, useEffect } from "react";
import UserProvider from "../../contexts/UserProvider";
import { Grid, Container, Paper } from '@material-ui/core';
import SalaryInput from '../../components/SalaryInput/SalaryInput';
import './Profile.css';

const Profile = () => {
    const [selected, setSelected] = useState(null);
    const userData = useContext(UserProvider.context);
    useEffect(() => setSelected(userData), [userData]);

    return (
        <Container maxWidth='xl' id='profilePage'>
            <Grid container xs={12}>
                <Paper id='profileHeader' xs={12}>
                    <Grid item xs id='gridWelcome'>
                        {selected ? (<h2>Welcome, {selected.username}</h2>) : ''}
                    </Grid>
                    <Grid item xs id='gridSalary'>
                        <SalaryInput selected={selected} setSelected={setSelected} />
                    </Grid>
                </Paper>
            </Grid>
        </Container>
    );
};

export default Profile;