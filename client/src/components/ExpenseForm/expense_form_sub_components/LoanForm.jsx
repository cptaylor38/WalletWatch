import React, { useState } from 'react';
import AmountInput from './Shared/AmountInput';
import TextInput from './Shared/TextInput';

const LoanForm = () => {
  const [loan_amount, set_loan_amount] = useState(null);
  const [monthly_payment, set_monthly_payment] = useState(null);
  const [servicer, set_servicer] = useState(null);
  const [title, set_title] = useState(null);
  const [url, set_url] = useState(null);

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
      <div>Due date</div>
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
      <div>Notes</div>
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
