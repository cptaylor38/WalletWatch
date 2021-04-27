import React, { useState } from 'react';
import AmountInput from './Shared/AmountInput';
import CategorySelect from './Shared/CategorySelect';
import TextInput from './Shared/TextInput';

const SubscriptionForm = () => {
  const [subscription_amount, set_subscription_amount] = useState(null);
  const [category, set_category] = useState('living');
  const [subscription_title, set_subscription_title] = useState(null);
  const [url, set_url] = useState(null);

  const handleSubscriptionAmount = (e) => {
    set_subscription_amount(e.target.value);
  };

  const handleChange = (e) => {
    switch (e.target.name) {
      case 'category':
        return set_category(e.target.value);
      case 'subscription_title':
        return set_subscription_title(e.target.value);
      case 'url':
        return set_url(e.target.value);
      default:
        return;
    }
  };

  return (
    <>
      <CategorySelect
        name={'category'}
        value={category}
        changeHandler={handleChange}
      />
      <TextInput
        name={'subscription_title'}
        labelText={'Title of subscription:'}
        value={subscription_title}
        changeHandler={handleChange}
      />
      <AmountInput
        value={subscription_amount}
        changeHandler={handleSubscriptionAmount}
        labelText={'Subscription Amount:'}
      />
      <div>Renewal Date</div>
      <div>Description</div>
      <TextInput
        name={'url'}
        labelText={'Url for subscription:'}
        value={url}
        changeHandler={handleChange}
      />
    </>
  );
};

export default SubscriptionForm;
