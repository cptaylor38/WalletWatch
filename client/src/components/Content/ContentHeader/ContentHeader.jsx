import React from 'react';
import './ContentHeader.css';
import { Paper } from '@material-ui/core';

const Header = ({ message, total }) => {
    return (
        <h3 className='contentHeader'>{message} {total ?
            <>{total.toLocaleString("en-US", {
                style: "currency",
                currency: "USD"
            })}</> : null}</h3>
    )
}
export default Header;