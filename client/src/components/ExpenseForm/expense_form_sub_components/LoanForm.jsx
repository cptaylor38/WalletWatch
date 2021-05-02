import React, { useState } from 'react';
import AmountInput from './Shared/AmountInput';
import TextInput from './Shared/TextInput';
import DateInput from './Shared/DateInput';
import MultiLineInput from './Shared/MultiLineInput';

const LoanForm = () => {
  const [loan_amount, set_loan_amount] = useState('');
  const [monthly_payment, set_monthly_payment] = useState('');
  const [servicer, set_servicer] = useState('');
  const [notes, set_notes] = useState('');
  const [title, set_title] = useState('');
  const [due_date, set_due_date] = useState('');
  const [url, set_url] = useState('');

  const handleLoanAmount = (e) => {
    set_loan_amount(e.target.value);
  };

  const handleMonthlyAmount = (e) => {
    set_monthly_payment(e.target.value);
  };

  const handleChange = (e) => {
    switch (e.target.name) {
      case 'servicer':
        return set_servicer(e.target.value);
      case 'title':
        return set_title(e.target.value);
      case 'due_date':
        return set_due_date(e.target.value);
      case 'notes':
        return set_notes(e.target.value);
      case 'url':
        return set_url(e.target.value);
      default:
        return;
    }
  };

  return (
    <>
      <TextInput
        value={servicer}
        name={'servicer'}
        changeHandler={handleChange}
        labelText={'Loan Servicer:'}
      />
      <DateInput
        value={due_date}
        name={'due_date'}
        changeHandler={handleChange}
        labelText={'Payment due:'}
      />
      <TextInput
        value={title}
        name={'title'}
        changeHandler={handleChange}
        labelText={'Loan Purpose:'}
      />
      <AmountInput
        labelText={'Loan Total:'}
        value={loan_amount}
        changeHandler={handleLoanAmount}
      />
      <MultiLineInput
        labelText={'Special notes:'}
        value={notes}
        name={'notes'}
        changeHandler={handleChange}
      />
      <AmountInput
        labelText={'Monthly Payment:'}
        value={monthly_payment}
        changeHandler={handleMonthlyAmount}
      />
      <TextInput
        value={url}
        name={'url'}
        changeHandler={handleChange}
        labelText={'URL for Servicer:'}
      />
      <div>Interest Rate</div>
    </>
  );
};

export default LoanForm;
