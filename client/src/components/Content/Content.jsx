import React, { useEffect, useState } from 'react';
import { Grid, Paper, Button } from '@material-ui/core';
import { FaFolderPlus } from 'react-icons/fa';
import './Content.css';
import ExpenseForm from '../ExpenseForm/ExpenseForm';
import ChargeItem from './ChargeItem/ChargeItem';
import API from "../../clientRoutes/API";

const Content = ({ display, user }) => {
    const [content, setContent] = useState(null);
    const [monthlyCharges, setMonthlyCharges] = useState(null);
    const [oneTime, setOneTime] = useState(null);
    const [retrieve, setRetrieve] = useState(false);
    const [expenseToggle, setExpenseToggle] = useState(false);

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

    const expenseInputToggle = () => {
        setExpenseToggle(!expenseToggle);
    }

    useEffect(() => {
        let expenseDiv = document.querySelector('#expenseInputPaper');
        if (expenseToggle === false) {
            expenseDiv.style.display = 'none'
        }
        if (expenseToggle === true) {
            expenseDiv.style.display = 'flex'
        }
    }, [expenseToggle]);

    useEffect(retrieveContent, [display, user, retrieve]);
    useEffect(sortExpenses, [content]);



    return (
        <>
            {display === 'home' ?
                <>
                    <Grid container id='addCont'>
                        <Grid item xs={12} id='addItem'>
                            <Paper id='addPaper'>
                                <Grid item xs={12} id='addExpenseSection'>
                                    <Button id='toggleExpenseBtn' onClick={expenseInputToggle}><p style={{ marginRight: 10 }}>Add Expense</p> <FaFolderPlus style={{ fontSize: 24 }} /> </Button>
                                </Grid>
                            </Paper>
                            <Paper id='expenseInputPaper'>
                                <Grid item xs={12} id='expenseInputSection'>
                                    {user ? <ExpenseForm user={user} update={() => retrieveContent()} /> : null}
                                </Grid>
                            </Paper>
                        </Grid>
                    </Grid>
                    <Paper>
                        <p>Home</p>
                    </Paper>
                </>
                :
                <>
                    <Grid container id='addCont'>
                        <Grid item xs={12} id='addItem'>
                            <Paper id='addPaper'>
                                <Grid item xs={12} id='addExpenseSection'>
                                    <Button id='toggleExpenseBtn' onClick={expenseInputToggle}><p style={{ marginRight: 10 }}>Add Expense</p> <FaFolderPlus style={{ fontSize: 24 }} /> </Button>
                                </Grid>
                            </Paper>
                            <Paper id='expenseInputPaper'>
                                <Grid item xs={12} id='expenseInputSection'>
                                    {user ? <ExpenseForm user={user} setRetrieve={setRetrieve} /> : null}
                                </Grid>
                            </Paper>
                        </Grid>
                    </Grid>
                    <Grid container id='contentContainer'>
                        <Grid item xs={12} lg={5}>
                            {monthlyCharges && monthlyCharges.length > 0 ? <h2 className='contentChargesHeader'>Monthly</h2> : <p>You haven't added any recurring expenses in this category.</p>}
                            {monthlyCharges ? monthlyCharges.map((item, index) => <ChargeItem data={item} key={index} setRetrieve={setRetrieve} />) : null}
                        </Grid>
                        <Grid item xs={12} lg={5}>
                            {oneTime && oneTime.length > 0 ? <h2 className='contentChargesHeader'>Non-Monthly</h2> : <p>You haven't added any non-recurring expenses in this category.</p>}
                            {oneTime !== null ? oneTime.map((item, index) => <ChargeItem data={item} key={index} setRetrieve={setRetrieve} />) : null}
                        </Grid>
                    </Grid>
                </>
            }
        </>
    )
}

export default Content;