import React, { useState } from 'react';
import AmountInput from './Shared/AmountInput';

const PrescriptionForm = () => {
  const [copay_amount, set_copay_amount] = useState(null);
  const handleCopayAmount = (e) => {
    set_copay_amount(e.target.value);
  };
  return (
    <>
      <div>Title</div>
      <div>Drug Name</div>
      <div>Treatment</div>
      <AmountInput
        labelText={'Your copay:'}
        value={copay_amount}
        changeHandler={handleCopayAmount}
      />
      <div>Pharmacy Name</div>
      <div>Purchase Date</div>
      <div>Drug Strength</div>
      <div>Directions</div>
      <div>Drug Quantity</div>
      <div>Day Supply</div>
      <div>Recurring Prescription</div>
      <div>Url</div>
    </>
  );
};

export default PrescriptionForm;
