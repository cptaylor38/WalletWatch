import React from 'react';
import './ContentHeader.css';
import { Paper } from '@material-ui/core';

const Header = ({ message, total }) => {
    return (
        <Paper className='contentChargesHeader'>
            <h3>{message} {total ?
                <>{total.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD"
                })}</> : null}</h3>
        </Paper>
    )
}
export default Header;