import React from 'react';
import './HourlySub.css';
import { Grid, Paper, Button, InputAdornment, TextField } from '@material-ui/core'

const HourlySub = ({ handleChange, onSubmit, clearAlerts, cents, hourly, weekly }) => {
    return (
        <form onSubmit={onSubmit} onFocus={clearAlerts}>
            <Grid container id='hourlyContainer'>
                <Grid item xl id='hourlyWageGrid'>
                    <TextField
                        id="outlined-adornment-amount"
                        className='hourlyWageInput dollarField'
                        type='number'
                        name='hourly'
                        variant="outlined"
                        label="Hourly Wage:"
                        value={hourly}
                        onChange={e => handleChange(e)}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">$</InputAdornment>,
                        }}
                    />
                    <TextField
                        id="outlined-adornment-amount"
                        className='hourlyWageInput centsField'
                        name='hourlyCents'
                        type='number'
                        variant="outlined"
                        label="Cents:"
                        value={cents}
                        onChange={e => handleChange(e)}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">.</InputAdornment>,
                        }}
                    />
                </Grid>
                <Grid item xl id='weeklyGrid'>
                    <TextField
                        id="outlined-adornment-amount"
                        className='hourlyAverage'
                        name='weekly'
                        variant="outlined"
                        label="Average Weekly Hours:"
                        value={weekly}
                        onChange={e => handleChange(e)}
                        InputProps={{
                            startAdornment: <InputAdornment position="start"></InputAdornment>,
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

export default HourlySub;

