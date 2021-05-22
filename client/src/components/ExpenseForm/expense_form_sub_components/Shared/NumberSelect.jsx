import React from 'react';

const NumberSelect = ({ value, changeHandler, labelText, name, min, max }) => {
  return (
    <div>
      <label htmlFor={name}>{labelText} </label>
      <input
        type='number'
        id={name}
        name={name}
        value={value}
        onChange={changeHandler}
        min={min}
        max={max}
      />
    </div>
  );
};

export default NumberSelect;
