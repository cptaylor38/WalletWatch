import React, { useState, useEffect } from 'react';
import { Grid, Container, Paper } from '@material-ui/core';
import API from '../../clientRoutes/API';
import './SalaryInput.css';

const SalaryInput = ({ selected, setSelected }) => {

    const [salary, setSalary] = useState('');

    const onSubmit = event => {
        event.preventDefault();
        API.adjustSalary({
            id: selected._id,
            salary: salary
        }).then(res => setSelected(res.data))
            .catch(err => console.log(err));
    }

    return (
        <>
            <h1>What is your yearly salary?</h1>
            <form onSubmit={onSubmit}>
                <div className='container'>
                    <label> salary: </label>
                    <input type="text" className='inputField' onChange={event => setSalary(event.target.value)} name="salary" placeholder="salary" value={salary} />
                </div>
                <button className="button-default" type="submit">Submit</button>
            </form>
            <div className='logoutSection'>
                <a href='/auth/logout'>Log out</a>
            </div>
        </>
    )
}

export default SalaryInput;