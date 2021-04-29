import React, { useState, useEffect } from 'react';
import AmountInput from './Shared/AmountInput';
import TextInput from './Shared/TextInput';
import DateInput from './Shared/DateInput';
import MultiLineInput from './Shared/MultiLineInput';

const PrescriptionForm = () => {
  const [copay_amount, set_copay_amount] = useState('');
  const [rx_title, set_rx_title] = useState('');
  const [treatment, set_treatment] = useState('');
  const [pharmacy_name, set_pharmacy_name] = useState('');
  const [purchase_date, set_purchase_date] = useState('');
  const [directions, set_directions] = useState('');
  const [url, set_url] = useState('');

  const handleChange = (e) => {
    switch (e.target.name) {
      case 'rx_title':
        return set_rx_title(e.target.value);
      case 'treatment':
        return set_treatment(e.target.value);
      case 'pharmacy_name':
        return set_pharmacy_name(e.target.value);
      case 'purchase_date':
        return set_purchase_date(e.target.value);
      case 'directions':
        return set_directions(e.target.value);
      case 'url':
        return set_url(e.target.value);
      default:
        return;
    }
  };

  const handleAmount = (e) => {
    set_copay_amount(e.target.value);
  };

  // const handleWidget = (d, t) => {
  //   let g = d.createElement(t),
  //     s = d.getElementsByTagName(t)[0];
  //   g.src = '//s3.amazonaws.com/assets.goodrx.com/static/widgets/search.min.js';
  //   s.parentNode.insertBefore(g, s);
  // };

  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      '//s3.amazonaws.com/assets.goodrx.com/static/widgets/search.min.js';
    script.async = true;
    script.innerHTML = `var _grxdn = "lipitor";
    (function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
    g.src="//s3.amazonaws.com/assets.goodrx.com/static/widgets/search.min.js";
        s.parentNode.insertBefore(g,s)}(document,"script"));`;
    document.getElementById('goodrx_search_widget').appendChild(script);
  }, []);

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
      <DateInput
        name={'purchase_date'}
        labelText={'Purchase date:'}
        value={purchase_date}
        changeHandler={handleChange}
      />
      <div id='goodrx_search_widget'></div>
      <div>Drug Strength</div>
      <MultiLineInput
        value={directions}
        name={'directions'}
        changeHandler={handleChange}
        labelText={"Prescriber's directions:"}
      />
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
