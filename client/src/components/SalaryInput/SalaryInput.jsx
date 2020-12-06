import React, { useState, useEffect } from 'react';
import { Checkbox, Button, FormControlLabel } from '@material-ui/core';
import API from '../../clientRoutes/API';
import SalarySub from './SalarySub/SalarySub';
import HourlySub from './HourlySub/HourlySub';
import './SalaryInput.css';

const SalaryInput = ({ user, setSelected, setSalarySection }) => {

    const [salary, setSalary] = useState('');
    const [incomeRate, setincomeRate] = useState(null);
    const [hourly, setHourly] = useState('');
    const [weekly, setWeekly] = useState('');
    const [inputAlert, setInputAlert] = useState('')

    const onSubmit = event => {
        event.preventDefault();
        if (incomeRate === 'hourly' && !hourly || incomeRate === 'hourly' && !weekly) {
            return setInputAlert('Both your hourly rate and weekly hours must be entered.');
        }
        else {
            API.adjustSalary({
                id: user._id,
                salary: salary
            }).then(res => { setSelected(res.data); console.log(res.data); setSalarySection(false) })
                .catch(err => console.log(err));
        }
    }

    const clearAlerts = () => {
        setInputAlert(null);
    }

    const cancelUpdate = () => {
        setincomeRate(null)
        setSalarySection(false);
    }

    const rateSubmit = rate => {
        setincomeRate(rate)
    }

    useEffect(() => {
        setSalary(hourly * weekly * 4 * 12);
    }, [hourly, weekly])

    const handleHourly = (e) => {
        setHourly(e.target.value);
    }

    const handleWeekly = (e) => {
        setWeekly(e.target.value);
    }

    const handleSalary = (e) => {
        setSalary(e.target.value);
    }

    const displayForm = () => {
        if (incomeRate === 'salaried') {
            return (
                <SalarySub handleChange={handleSalary} onSubmit={onSubmit} clearAlerts={clearAlerts} salary={salary} />
            )
        }
        if (incomeRate === 'hourly') {
            return (
                <HourlySub handleHourly={handleHourly} handleWeekly={handleWeekly} onSubmit={onSubmit} clearAlerts={clearAlerts} hourly={hourly} weekly={weekly} salary={salary} />
            )
        }
    }

    return (
        <>
            {inputAlert ? <p>{inputAlert}</p> : null}
            {!incomeRate ? <>
                <FormControlLabel
                    value={'hourly'}
                    control={<Checkbox color="primary" />}
                    label="Hourly"
                    labelPlacement="start"
                    onClick={() => rateSubmit('hourly')}
                />
                <FormControlLabel
                    value={'salaried'}
                    control={<Checkbox color="primary" />}
                    label="Salaried"
                    labelPlacement="start"
                    onClick={() => rateSubmit('salaried')}
                />
            </> : displayForm()}
            <Button id='salaryBackBtn' onClick={() => cancelUpdate()}>Cancel</Button>
        </>
    )
}

export default SalaryInput;

