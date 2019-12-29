import React, { useEffect, useState } from 'react';
import { Grid, Paper, Button } from '@material-ui/core';
import { FaFolderPlus } from 'react-icons/fa';
import CHeader from './ContentHeader/ContentHeader';
import Overview from './HomeOverview/HomeOverview';
import HelperText from './HelperText/HelperText';
import './Content.css';
import ExpenseForm from '../ExpenseForm/ExpenseForm';
import ChargeItem from './ChargeItem/ChargeItem';
import API from "../../clientRoutes/API";
import moment from 'moment';

const Content = ({ display, user }) => {
    const [content, setContent] = useState(null);
    const [monthlyCharges, setMonthlyCharges] = useState(null);
    const [oneTime, setOneTime] = useState(null);
    const [retrieve, setRetrieve] = useState(false);
    const [expenseToggle, setExpenseToggle] = useState(false);
    const [totalMonthly, setTotalMonthly] = useState(null);

    const retrieveContent = () => {
        if (display !== null && user !== null) {
            API.getCategoryData({ id: user, category: display })
                .then(response => { setContent(response.data); setRetrieve(false); });

        }
    }

    const sortExpenses = () => {
        if (content !== null && display !== 'home') {
            let sortedOneTime = content.filter(item => item.monthly === false);
            let sortedMonthly = content.filter(item => item.monthly === true);
            let datedOneTime = sortRecent(sortedOneTime);
            let datedMonthly = sortRecent(sortedMonthly);
            setMonthlyCharges(datedMonthly);
            setOneTime(datedOneTime);
        }
    }

    const sortRecent = array => {
        return array.sort((a, b) => moment(b.date).unix() - moment(a.date).unix())
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

    useEffect(() => {
        if (monthlyCharges !== null && monthlyCharges.length > 0) {
            let total = 0;
            monthlyCharges.map(item => total += item.amount);
            setTotalMonthly(total);
        }
    }, [monthlyCharges])

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
                                    {user ? <ExpenseForm user={user} update={() => retrieveContent()} setRetrieve={setRetrieve} /> : null}
                                </Grid>
                            </Paper>
                        </Grid>
                    </Grid>
                    <Grid container id='homeContentGrid'>
                        <Overview user={user} />
                    </Grid>
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
                            <Paper>
                                {monthlyCharges && monthlyCharges.length > 0 ? <CHeader message={'Monthly'} total={totalMonthly} /> : <HelperText monthly={true} display={display} />}
                                <Grid container className='expListCont'>
                                    {monthlyCharges ? monthlyCharges.map((item, index) => <ChargeItem data={item} key={index} setRetrieve={setRetrieve} />) : null}
                                </Grid>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} lg={5}>
                            <Paper>
                                {oneTime && oneTime.length > 0 ? <CHeader message={'Non-Monthly'} /> : <HelperText monthly={false} display={display} />}
                                <Grid container className='expListCont'>
                                    {oneTime !== null ? oneTime.map((item, index) => <ChargeItem data={item} key={index} setRetrieve={setRetrieve} />) : null}
                                </Grid>
                            </Paper>
                        </Grid>
                    </Grid>
                </>
            }
        </>
    )
}

export default Content;