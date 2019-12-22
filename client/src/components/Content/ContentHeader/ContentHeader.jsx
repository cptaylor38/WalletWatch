import React from 'react';
import './ContentHeader.css';
import { Paper } from '@material-ui/core';

const Header = ({ message }) => {
    return (
        <Paper className='contentChargesHeader'>
            <h3>{message}</h3>
        </Paper>
    )
}
export default Header;