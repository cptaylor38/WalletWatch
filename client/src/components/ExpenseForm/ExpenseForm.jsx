import React, { useState } from 'react';
import './ExpenseForm.scss';
import { Container, Button } from '@material-ui/core';
import { FaPlus } from 'react-icons/fa';
import ExpenseFormBase from './expense_form_sub_components/ExpenseFormBase';
import GoodRxWidget from '../GoodRxWidget';

const ExpenseForm = () => {
  const [form_array, set_form_array] = useState([{}]);
  const [show_widget, set_show_widget] = useState(false);
  const increment_form_count = () => {
    set_form_array([...form_array, {}]);
  };
  return (
    <Container className='expense__form'>
      <main className='expense__form--main'>
        {form_array.map((item, index) => (
          <ExpenseFormBase key={index} toggleWidget={set_show_widget} />
        ))}
        <Button onClick={increment_form_count}>
          <FaPlus />
        </Button>
      </main>
      {show_widget ? <GoodRxWidget toggleWidget={set_show_widget} /> : null}
    </Container>
  );
};

export default ExpenseForm;
