import React, { useState } from 'react';
import AmountInput from './Shared/AmountInput';

const LoanForm = () => {
  const [loan_amount, set_loan_amount] = useState(null);
  const [monthly_payment, set_monthly_payment] = useState(null);
  const handleLoanAmount = (e) => {
    set_loan_amount(e.target.value);
  };
  const handleMonthlyAmount = (e) => {
    set_monthly_payment(e.target.value);
  };
  return (
    <>
      <div>Servicer</div>
      <div>Due date</div>
      <div>Title</div>
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
      <div>Url</div>
      <div>Interest Rate</div>
    </>
  );
};

export default LoanForm;
