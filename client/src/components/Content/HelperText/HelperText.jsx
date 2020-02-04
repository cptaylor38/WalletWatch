import React, { useState, useEffect } from 'react';
import './HelperText.css';
import { Paper } from '@material-ui/core';

const Header = ({ monthly, display }) => {
  const [text, setText] = useState('...');
  useEffect(() => {
    if (monthly === true) {
      switch (display) {
        case 'finances':
          setText('Ex. Loans, credit card payments, etc.');
          break;
        case 'living':
          setText('Ex. Electric bill, phone bill, etc.');
          break;
        case 'health':
          setText('Ex. Gym membership, Health Insurance, Medical bills, etc.');
          break;
        case 'leisure':
          setText(
            'Ex. Entertainment subscriptions, Cable bill, Internet bill, etc.'
          );
          break;
        case 'travel':
          setText('Ex. Car Payments, Auto Insurance, etc.');
          break;
        default:
          setText('...');
          break;
      }
    } else {
      switch (display) {
        case 'finances':
          setText('Ex. Taxes, Donations, etc.');
          break;
        case 'living':
          setText('Ex. Home Improvements, Appliances, etc.');
          break;
        case 'health':
          setText('Ex. Food, Spa days, Prescriptions, etc.');
          break;
        case 'leisure':
          setText('Ex. Video games, movie tickets, concerts, etc.');
          break;
        case 'travel':
          setText(
            'Ex. renewal, vehicle purchases, plane tickets, vacations, etc.'
          );
          break;
        default:
          setText('No expenses found for this category.');
          break;
      }
    }
  }, [display, monthly]);

  return (
    <div className='helperPaper'>
      <h2>No expenses found for this category. Try adding one...</h2>
      <h4>{text}</h4>
    </div>
  );
};
export default Header;
