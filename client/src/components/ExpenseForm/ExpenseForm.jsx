import React, { useState } from 'react';
import './ExpenseForm.scss';
import { Container, Button } from '@material-ui/core';
import { FaPlus } from 'react-icons/fa';
import ExpenseFormBase from './expense_form_sub_components/ExpenseFormBase';

const ExpenseForm = () => {
  const [form_array, set_form_array] = useState([{}]);
  const increment_form_count = () => {
    set_form_array([...form_array, {}]);
  };
  return (
    <Container className='expense__form'>
      <main className='expense__form--main'>
        {form_array.map((item) => (
          <ExpenseFormBase />
        ))}
        <Button onClick={increment_form_count}>
          <FaPlus />
        </Button>
      </main>
    </Container>
  );
};

export default ExpenseForm;
