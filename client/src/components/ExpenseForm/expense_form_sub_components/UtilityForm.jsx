import React, { useState } from 'react';
import AmountInput from './Shared/AmountInput';
import TextInput from './Shared/TextInput';

const UtilityForm = () => {
  const [utility_amount, set_utility_amount] = useState(null);
  const [utility_title, set_utility_title] = useState(null);
  const [utility_company, set_utility_company] = useState(null);
  const [url, set_url] = useState(null);

  const handleUtilityChange = (e) => {
    set_utility_amount(e.target.value);
  };

  const handleChange = (e) => {
    switch (e.target.name) {
      case 'utility_title':
        return set_utility_title(e.target.value);
      case 'utility_company':
        return set_utility_company(e.target.value);
      case 'url':
        return set_url(e.target.value);
      default:
        return;
    }
  };

  return (
    <>
      <TextInput
        name={'utility_title'}
        value={utility_title}
        changeHandler={handleChange}
        labelText={'Title for utility:'}
      />
      <TextInput
        name={'utility_company'}
        value={utility_company}
        changeHandler={handleChange}
        labelText={'Utility Provider:'}
      />
      <AmountInput
        value={utility_amount}
        changeHandler={handleUtilityChange}
        labelText={'Utility Amount:'}
      />
      <div>Due Date</div>
      <TextInput
        name={'url'}
        value={url}
        changeHandler={handleChange}
        labelText={'Url for provider:'}
      />
    </>
  );
};

export default UtilityForm;
