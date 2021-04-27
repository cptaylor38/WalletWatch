import React, { useState } from 'react';
import AmountInput from './Shared/AmountInput';
import TextInput from './Shared/TextInput';

const PrescriptionForm = () => {
  const [copay_amount, set_copay_amount] = useState(null);
  const [rx_title, set_rx_title] = useState(null);
  const [treatment, set_treatment] = useState(null);
  const [pharmacy_name, set_pharmacy_name] = useState(null);
  const [url, set_url] = useState(null);

  const handleChange = (e) => {
    switch (e.target.name) {
      case 'rx_title':
        return set_rx_title(e.target.value);
      case 'treatment':
        return set_treatment(e.target.value);
      case 'pharmacy_name':
        return set_pharmacy_name(e.target.value);
      case 'url':
        return set_url(e.target.value);
      default:
        return;
    }
  };

  const handleAmount = (e) => {
    set_copay_amount(e.target.value);
  };

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
      <div>Purchase Date</div>
      <div>Drug Strength</div>
      <div>Directions</div>
      <div>Drug Quantity</div>
      <div>Day Supply</div>
      <div>Recurring Prescription</div>
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
