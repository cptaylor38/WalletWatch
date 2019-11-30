import React from 'react';
import './ChargeItem.css';

const ChargeItem = ({ data }) => {
    return (
        <>
            <p>{data.title} - {data.amount} on {data.date}</p>
        </>
    )
}

export default ChargeItem;