import React, { useState } from 'react';
import AmountInput from './Shared/AmountInput';
import CategorySelect from './Shared/CategorySelect';
import TextInput from './Shared/TextInput';

const NonRecurringForm = () => {
  const [category, set_category] = useState('living');
  const [charge_amount, set_charge_amount] = useState(null);
  const [charge_title, set_charge_title] = useState(null);
  const [purchase_location, set_purchase_location] = useState(null);
  const [url, set_url] = useState(null);

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
      <div>Description</div>
      <div>Purchase Date</div>
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
