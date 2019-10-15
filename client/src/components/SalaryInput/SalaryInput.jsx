import React, { useState, useEffect } from 'react';
import { Grid, Container, Paper, Checkbox, Button, FormControlLabel } from '@material-ui/core';
import API from '../../clientRoutes/API';
import SalarySub from './SalarySub/SalarySub';
import HourlySub from './HourlySub/HourlySub';
import './SalaryInput.css';

const SalaryInput = ({ selected, setSelected, setSalarySection }) => {

    const [salary, setSalary] = useState('');
    const [incomeRate, setincomeRate] = useState(null);
    const [hourly, setHourly] = useState('');
    const [cents, setCents] = useState('');
    const [weekly, setWeekly] = useState('');
    const [inputAlert, setInputAlert] = useState('')

    const onSubmit = event => {
        console.log(incomeRate);
        event.preventDefault();
        if (incomeRate === 'hourly' && !hourly || incomeRate === 'hourly' && !weekly || incomeRate === 'hourly' && !cents) {
            return setInputAlert('Both your hourly rate and weekly hours must be entered.');
        }
        else {
            API.adjustSalary({
                id: selected._id,
                salary: salary
            }).then(res => { setSelected(res.data); console.log(res.data); setSalarySection(false) })
                .catch(err => console.log(err));
        }
    }

    const clearAlerts = () => {
        setInputAlert(null);
    }

    useEffect(() => {
        if (incomeRate === 'hourly') {
            setSalary(parseFloat(`${hourly}.${cents}`).toFixed(2) * weekly * 4 * 12);
        }
        else if (incomeRate === 'salaried') {
            setSalary(parseFloat(`${salary}`));
        }
    }, [hourly, weekly, incomeRate, cents, salary])

    const cancelUpdate = () => {
        setincomeRate(null)
        setSalarySection(false);
    }

    const rateSubmit = rate => {
        setincomeRate(rate)
    }

    const handleChange = e => {
        switch (e.target.name) {
            case 'salary':
                setSalary(e.target.value);
                break;
            case 'hourly':
                setHourly(e.target.value);
                break;
            case 'hourlyCents':
                if (e.target.value.length < 3) {
                    setCents(e.target.value);
                }
                else e.target.value = ''
                break;
            case 'weekly':
                setWeekly(e.target.value);
                break;
            default:
                break;
        }
    }

    const displayForm = () => {
        if (incomeRate === 'salaried') {
            return (
                <SalarySub handleChange={handleChange} onSubmit={onSubmit} clearAlerts={clearAlerts} salary={salary} />
            )
        }
        if (incomeRate === 'hourly') {
            return (
                <HourlySub handleChange={handleChange} onSubmit={onSubmit} clearAlerts={clearAlerts} cents={cents} hourly={hourly} weekly={weekly} />
            )
        }
    }

    return (
        <>
            {inputAlert ? <p>{inputAlert}</p> : null}
            {salary && hourly && weekly && cents ? <p>{salary.toLocaleString("en-US", {
                style: "currency",
                currency: "USD"
            })}</p> : null}
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

