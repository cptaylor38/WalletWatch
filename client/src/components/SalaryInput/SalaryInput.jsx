import React, { useState, useEffect } from 'react';
import { Grid, Container, Paper, Checkbox } from '@material-ui/core';
import API from '../../clientRoutes/API';
import './SalaryInput.css';

const SalaryInput = ({ selected, setSelected, setSalarySection }) => {

    const [salary, setSalary] = useState('');
    const [incomeRate, setincomeRate] = useState(null);
    const [hourly, setHourly] = useState('');
    const [cents, setCents] = useState('');
    const [weekly, setWeekly] = useState('');
    const [inputAlert, setInputAlert] = useState('')

    const onSubmit = event => {
        event.preventDefault();
        if (incomeRate === 'hourly' && !hourly || !weekly || !cents) {
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
            console.log(salary);

        }
    }, [hourly, weekly, incomeRate])

    const cancelUpdate = () => {
        setSalarySection(false);
    }

    const rateSubmit = rate => {
        setincomeRate(rate)
    }

    const handleChange = e => {
        if (/^[0-9]{1,10}$/.test(e.target.value)) {
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
        else {
            e.target.value = '';
        }
    }

    const displayForm = () => {
        if (incomeRate === 'salaried') {
            return (
                <form onSubmit={onSubmit} onFocus={clearAlerts}>
                    <div className='container'>
                        <label> Yearly salary: </label>
                        <input type="text" className='inputField' onChange={e => handleChange(e)} name="salary" placeholder="salary" value={salary} />
                    </div>
                    <button className="button-default" type="submit">Submit</button>
                </form>
            )
        }
        if (incomeRate === 'hourly') {
            return (
                <form onSubmit={onSubmit} onFocus={clearAlerts}>
                    <div className='container'>
                        <label>Hourly wage:</label>
                        <input type='text' className='inputField' onChange={e => handleChange(e)} name='hourly' placeholder='hourlyDollar' value={hourly} />
                        .
                        <input type='text' className='inputField' onChange={e => handleChange(e)} name='hourlyCents' placeholder='cents' value={cents} />
                        <label>Average weekly hours:</label>
                        <input type='text' className='inputField' onChange={e => handleChange(e)} name='weekly' placeholder='weekly' value={weekly} />
                    </div>
                    <button className='button-default' type='submit'>Submit</button>
                </form>
            )
        }
    }

    return (
        <>
            {inputAlert ? <p>{inputAlert}</p> : null}
            {salary && hourly && weekly && cents ? <p>{salary.toFixed(2)}</p> : null}
            {!incomeRate ? <>
                <label>Hourly</label>
                <Checkbox value={'hourly'} className='cbox' onClick={() => rateSubmit('hourly')} />
                <label>Salaried</label>
                <Checkbox value={'salaried'} className='cbox' onClick={() => rateSubmit('salaried')} />
            </> : displayForm()}
            <button className='button-default' type='button' onClick={() => cancelUpdate()}>Cancel</button>
        </>
    )
}

export default SalaryInput;

