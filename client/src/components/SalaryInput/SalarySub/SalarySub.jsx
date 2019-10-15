import React from 'react';
import './SalarySub.css';
import { Grid, TextField, Button, InputAdornment } from '@material-ui/core';
import './SalarySub.css';

const SalarySub = ({ handleChange, onSubmit, clearAlerts, salary }) => {
    return (
        <form onSubmit={onSubmit} onFocus={clearAlerts}>
            <Grid container id='salaryContainer'>
                <Grid item xl id='salaryPreview'>
                    {salary && salary !== NaN ? <p>{salary.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD"
                    })}</p> : null}
                </Grid>
                <Grid item xl id='salaryGrid'>
                    <TextField
                        id="outlined-adornment-amount"
                        className='hourlyWageInput salaryField'
                        type='number'
                        name='salary'
                        variant="outlined"
                        label="Salary:"
                        value={salary}
                        onChange={e => handleChange(e)}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">$</InputAdornment>,
                        }}
                    />
                </Grid>
                <Grid item xs={12} id='hourlySubmit'>
                    <Button variant="outlined" type='submit'>Submit</Button>
                </Grid>
            </Grid>
        </form>
    )
}

export default SalarySub;