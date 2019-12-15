import React, { useState } from 'react';
import './ChargeItem.css';
import moment from 'moment';
import { Grid, Button, Paper } from '@material-ui/core';
import { FaEdit, FaCut } from 'react-icons/fa';
import ExpenseForm from '../../ExpenseForm/ExpenseForm';
import API from '../../../clientRoutes/API';

const ChargeItem = ({ data, setRetrieve }) => {
    const [form, toggleForm] = useState(false);
    const updateField = () => {
        toggleForm(true);
    }

    const deleteExpense = () => {
        API.deleteExpense({ id: data._id })
            .then(setRetrieve(true));
    }

    return (
        <>
            <Paper className='contentChargesPaper'>
                <Grid container className='chargeItem'>
                    {form === true && data ? <ExpenseForm propData={data} form={form} toggleForm={toggleForm} setRetrieve={setRetrieve} /> :
                        <>
                            <Grid item xs={3}><p>{data.title}</p></Grid>
                            <Grid item xs={1}><p>${data.amount}</p></Grid>
                            <Grid item xs={3}><p>{moment(data.date).format("MM/DD/YYYY")}</p></Grid>
                            <Grid item xs={1}>
                                <Button type='button' onClick={updateField}><FaEdit /></Button>
                            </Grid>
                            <Grid item xs={1}>
                                <Button type='button' onClick={deleteExpense}><FaCut /></Button>
                            </Grid>
                        </>}
                </Grid>
            </Paper>
        </>
    )
}

export default ChargeItem;