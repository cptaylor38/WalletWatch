import React, { useState } from 'react';
import AmountInput from './Shared/AmountInput';
import CategorySelect from './Shared/CategorySelect';
import TextInput from './Shared/TextInput';
import DateInput from './Shared/DateInput';
import MultiLineInput from './Shared/MultiLineInput';

const NonRecurringForm = () => {
  const [category, set_category] = useState('living');
  const [charge_amount, set_charge_amount] = useState('');
  const [charge_title, set_charge_title] = useState('');
  const [purchase_location, set_purchase_location] = useState('');
  const [description, set_description] = useState('');
  const [purchase_date, set_purchase_date] = useState('');
  const [url, set_url] = useState('');

  const handleChargeAmount = (e) => {
    set_charge_amount(e.target.value);
  };

  const handleChange = (e) => {
    switch (e.target.name) {
      case 'category':
        return set_category(e.target.value);
      case 'charge_title':
        return set_charge_title(e.target.value);
      case 'purchase_location':
        return set_purchase_location(e.target.value);
      case 'description':
        return set_description(e.target.value);
      case 'purchase_date':
        return set_purchase_date(e.target.value);
      case 'url':
        return set_url(e.target.value);
      default:
        return;
    }
  };

  return (
    <>
      <CategorySelect
        value={category}
        name={'category'}
        changeHandler={handleChange}
      />
      <TextInput
        value={charge_title}
        name={'charge_title'}
        changeHandler={handleChange}
        labelText={'Name for this charge:'}
      />
      <MultiLineInput
        value={description}
        name={'description'}
        changeHandler={handleChange}
        labelText={'Description:'}
      />
      <DateInput
        value={purchase_date}
        name={'purchase_date'}
        changeHandler={handleChange}
        labelText={'Purchase date:'}
      />
      <TextInput
        value={purchase_location}
        name={'purchase_location'}
        changeHandler={handleChange}
        labelText={'Store purchased at:'}
      />
      <AmountInput
        labelText={'Charge Amount:'}
        value={charge_amount}
        changeHandler={handleChargeAmount}
      />
      <TextInput
        value={url}
        name={'url'}
        changeHandler={handleChange}
        labelText={'URL for store/product:'}
      />
    </>
  );
};

export default NonRecurringForm;
