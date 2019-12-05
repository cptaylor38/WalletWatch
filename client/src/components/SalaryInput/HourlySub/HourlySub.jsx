import React from 'react';
import './HourlySub.css';
import { Grid, Button, TextField, FormControl } from '@material-ui/core'
import NumberFormatCustom from '../../ExpenseForm/NumberFormatCustom';

const HourlySub = ({ handleWeekly, handleHourly, onSubmit, clearAlerts, hourly, weekly }) => {
    return (
        <form onSubmit={onSubmit} onFocus={clearAlerts}>
            <Grid container id='hourlyContainer'>
                <Grid item xl id='hourlyWageGrid'>
                    <FormControl fullWidth >
                        <TextField
                            label="Hourly Average"
                            className='hourlyWageInput'
                            name='hourly'
                            value={hourly}
                            onChange={handleHourly}
                            id="formatted-numberformat-input"
                            InputProps={{
                                inputComponent: NumberFormatCustom
                            }}
                        />
                    </FormControl>
                </Grid>
                <Grid item xl id='weeklyGrid'>
                    <TextField
                        id="outlined-adornment-amount"
                        className='weeklyAverageInput'
                        name='weekly'
                        variant="outlined"
                        value={weekly}
                        label="Average Weekly Hours:"
                        onChange={handleWeekly}
                    />
                </Grid>
                <Grid item xs={12} id='hourlySubmit'>
                    <Button variant="outlined" type='submit'>Submit</Button>
                </Grid>
            </Grid>
        </form>
    )
}

export default HourlySub;

