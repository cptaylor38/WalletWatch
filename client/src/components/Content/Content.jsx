import React, { useEffect, useState } from 'react';
import { Grid, Paper } from '@material-ui/core';
import './Content.css';
import ChargeItem from './ChargeItem/ChargeItem';
import API from "../../clientRoutes/API";

const Content = ({ display, user }) => {
    const [content, setContent] = useState(null);
    const [monthlyCharges, setMonthlyCharges] = useState(null);
    const [oneTime, setOneTime] = useState(null);
    const [retrieve, setRetrieve] = useState(false);

    const retrieveContent = () => {
        if (display !== null && user !== null) {
            if (display === 'home') {
                API.getHomeDisplay({ id: user })
                    .then(response => { setContent(response.data); console.log(response.data) })
            }
            else {
                API.getCategoryData({ id: user, category: display })
                    .then(response => { setContent(response.data); setRetrieve(false); console.log(response.data) });
            }
        }
    }

    const sortExpenses = () => {
        if (content !== null && display !== 'home') {
            let sortedOneTime = content.filter(item => item.monthly === false);
            let sortedMonthly = content.filter(item => item.monthly === true);
            setMonthlyCharges(sortedMonthly);
            setOneTime(sortedOneTime);
        }
    }

    useEffect(retrieveContent, [display, user, retrieve]);
    useEffect(sortExpenses, [content]);



    return (
        <>
            {display === 'home' ?
                <>
                    <Paper>
                        <p>Home</p>
                    </Paper>
                </>
                :
                <Grid container id='contentContainer'>
                    <Grid item xs={12} lg={5}>
                        <Paper className='contentChargesPaper'>
                            <h2>Monthly Charges</h2>
                            {monthlyCharges ? monthlyCharges.map((item, index) => <ChargeItem data={item} key={index} setRetrieve={setRetrieve} />) : null}
                        </Paper>
                    </Grid>
                    <Grid item xs={12} lg={5}>
                        <Paper className='contentChargesPaper'>
                            <h2>One-time Charges</h2>
                            {oneTime ? oneTime.map((item, index) => <ChargeItem data={item} key={index} setRetrieve={setRetrieve} />) : null}
                        </Paper>
                    </Grid>
                </Grid>}
        </>
    )
}

export default Content;