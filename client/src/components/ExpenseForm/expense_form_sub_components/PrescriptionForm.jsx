import React, { useState, useEffect } from 'react';
import AmountInput from './Shared/AmountInput';
import TextInput from './Shared/TextInput';
import DateInput from './Shared/DateInput';
import MultiLineInput from './Shared/MultiLineInput';
import NumberSelect from './Shared/NumberSelect';
import { FormControlLabel, Checkbox } from '@material-ui/core';

const PrescriptionForm = ({ toggleWidget }) => {
  const [copay_amount, set_copay_amount] = useState('');
  const [rx_title, set_rx_title] = useState('');
  const [treatment, set_treatment] = useState('');
  const [pharmacy_name, set_pharmacy_name] = useState('');
  const [purchase_date, set_purchase_date] = useState('');
  const [directions, set_directions] = useState('');
  const [url, set_url] = useState('');
  const [recurring_rx, set_recurring_rx] = useState(false);
  const [quantity, set_quantity] = useState('');
  const [day_supply, set_day_supply] = useState('');

  const handleChange = (e) => {
    switch (e.target.name) {
      case 'rx_title':
        return set_rx_title(e.target.value);
      case 'treatment':
        return set_treatment(e.target.value);
      case 'pharmacy_name':
        return set_pharmacy_name(e.target.value);
      case 'purchase_date':
        return set_purchase_date(e.target.value);
      case 'quantity':
        return set_quantity(e.target.value);
      case 'day_supply':
        return set_day_supply(e.target.value);
      case 'directions':
        return set_directions(e.target.value);
      case 'url':
        return set_url(e.target.value);
      default:
        return;
    }
  };

  const handleAmount = (e) => {
    set_copay_amount(e.target.value);
  };

  useEffect(() => {
    toggleWidget(true);
    return () => {
      toggleWidget(false);
    };
  }, [toggleWidget]);

  return (
    <>
      <TextInput
        name={'rx_title'}
        labelText={'Drug Name:'}
        changeHandler={handleChange}
        value={rx_title}
      />
      <TextInput
        name={'treatment'}
        labelText={'Reason for taking:'}
        changeHandler={handleChange}
        value={treatment}
      />
      <AmountInput
        labelText={'Your copay:'}
        value={copay_amount}
        changeHandler={handleAmount}
      />
      <TextInput
        name={'pharmacy_name'}
        labelText={'Pharmacy purchased at:'}
        changeHandler={handleChange}
        value={pharmacy_name}
      />
      <DateInput
        name={'purchase_date'}
        labelText={'Purchase date:'}
        value={purchase_date}
        changeHandler={handleChange}
      />
      <MultiLineInput
        exempt_class={'rx__directions'}
        value={directions}
        name={'directions'}
        changeHandler={handleChange}
        labelText={'Directions, Strength, etc: '}
      />
      <NumberSelect
        labelText='Quantity: '
        name='quantity'
        value={quantity}
        changeHandler={handleChange}
        min='1'
        max='1000'
      />
      <NumberSelect
        labelText='Day Supply: '
        name='day_supply'
        value={day_supply}
        changeHandler={handleChange}
        min='1'
        max='360'
      />
      <FormControlLabel
        control={
          <Checkbox
            className='e__form--cbox'
            checked={recurring_rx}
            onChange={() => set_recurring_rx(!recurring_rx)}
            name='recurring'
            color='primary'
          />
        }
        label='Frequent:'
      />
      <TextInput
        name={'url'}
        labelText={'url'}
        changeHandler={handleChange}
        value={url}
      />
    </>
  );
};

export default PrescriptionForm;
