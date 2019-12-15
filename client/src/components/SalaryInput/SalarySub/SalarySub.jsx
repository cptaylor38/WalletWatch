import React from 'react';
import './SalarySub.css';
import { Grid, TextField, Button, FormControl } from '@material-ui/core';
import NumberFormatCustom from '../../ExpenseForm/NumberFormatCustom';
import './SalarySub.css';

const SalarySub = ({ handleChange, onSubmit, clearAlerts, salary }) => {

    return (
        <form onSubmit={onSubmit} onFocus={clearAlerts}>
            <Grid container id='salaryContainer'>
                <Grid item xl id='salaryGrid'>
                    <FormControl fullWidth >
                        <TextField
                            label="Salary"
                            value={salary !== 0 ? salary : ''}
                            onChange={handleChange}
                            className='hourlyWageInput salaryField'
                            id="formatted-numberformat-input"
                            InputProps={{
                                inputComponent: NumberFormatCustom
                            }}
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={12} id='hourlySubmit'>
                    <Button variant="outlined" type='submit'>Submit</Button>
                </Grid>
            </Grid>
        </form>
    )
}

export default SalarySub;