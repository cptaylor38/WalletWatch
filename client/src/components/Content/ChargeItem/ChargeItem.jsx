import React, { useState } from 'react';
import './ChargeItem.css';
import moment from 'moment';
import { Grid, Button } from '@material-ui/core';
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
            <Grid container>
                {form === true && data ? <ExpenseForm propData={data} form={form} toggleForm={toggleForm} setRetrieve={setRetrieve} /> :
                    <>
                        <Grid item><p>{data.title}</p></Grid>
                        <Grid item><p>${data.amount}</p></Grid>
                        <Grid item><p>on {moment(data.date).format("dddd, MMMM Do YYYY")}</p></Grid>
                        <Button type='button' onClick={updateField}><FaEdit /></Button>
                        <Button type='button' onClick={deleteExpense}><FaCut /></Button>
                    </>}
            </Grid>
        </>
    )
}

export default ChargeItem;