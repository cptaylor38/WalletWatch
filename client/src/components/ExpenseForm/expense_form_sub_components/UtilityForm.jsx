import React, { useState } from 'react';
import AmountInput from './Shared/AmountInput';
import TextInput from './Shared/TextInput';
import DateInput from './Shared/DateInput';

const UtilityForm = () => {
  const [utility_amount, set_utility_amount] = useState('');
  const [utility_title, set_utility_title] = useState('');
  const [utility_company, set_utility_company] = useState('');
  const [due_date, set_due_date] = useState('');
  const [url, set_url] = useState('');

  const handleUtilityChange = (e) => {
    set_utility_amount(e.target.value);
  };

  const handleChange = (e) => {
    switch (e.target.name) {
      case 'utility_title':
        return set_utility_title(e.target.value);
      case 'utility_company':
        return set_utility_company(e.target.value);
      case 'due_date':
        return set_due_date(e.target.value);
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
      <DateInput
        value={due_date}
        changeHandler={handleChange}
        labelText={'Due date:'}
        name={'due_date'}
      />
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
