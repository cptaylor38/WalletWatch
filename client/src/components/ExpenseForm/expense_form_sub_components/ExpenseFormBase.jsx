import React, { useState } from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Paper,
} from '@material-ui/core';
import UtilityForm from './UtilityForm';
import NonRecurringForm from './NonRecurringForm';
import PrescriptionForm from './PrescriptionForm';
import SubscriptionForm from './SubscriptionForm';
import LoanForm from './LoanForm';

const ExpenseFormBase = () => {
  const [form_chargeType, set_form_chargeType] = useState('nonRecurring');

  const handleChargeSelect = (event) => {
    set_form_chargeType(event.target.value);
  };

  const formManager = () => {
    switch (form_chargeType) {
      case 'nonRecurring':
        return <NonRecurringForm />;
      case 'loan':
        return <LoanForm />;
      case 'subscription':
        return <SubscriptionForm />;
      case 'prescription':
        return <PrescriptionForm />;
      case 'utility':
        return <UtilityForm />;
      default:
        return <NonRecurringForm />;
    }
  };

  return (
    <Paper className='expense__form__base'>
      <form>
        <FormControl
          variant='outlined'
          className='e__form--control e__form--chargeType'
        >
          <InputLabel id='demo-simple-select-outlined-label'>
            Charge Type
          </InputLabel>
          <Select
            labelid='demo-simple-select-outlined-label'
            id='demo-simple-select-outlined'
            value={form_chargeType}
            onChange={handleChargeSelect}
            label='Charge Type'
            className='e__form--select'
          >
            <MenuItem value={'loan'}>Loan</MenuItem>
            <MenuItem value={'subscription'}>Subscription</MenuItem>
            <MenuItem value={'prescription'}>Prescription</MenuItem>
            <MenuItem value={'utility'}>Utility</MenuItem>
            <MenuItem value={'nonRecurring'}>Non-Recurring</MenuItem>
          </Select>
        </FormControl>
        {formManager()}
      </form>
    </Paper>
  );
};

export default ExpenseFormBase;
