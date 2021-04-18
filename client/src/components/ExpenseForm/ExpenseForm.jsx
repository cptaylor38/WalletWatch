import React from 'react';
import './ExpenseForm.scss';
import { Container, Button } from '@material-ui/core';
import { expenseFormToggle } from '../../redux/actions';
import { useDispatch } from 'react-redux';

const ExpenseForm = () => {
  const dispatch = useDispatch();
  const toggle_expense_form = () => {
    dispatch(expenseFormToggle());
  };
  return (
    <Container className='expense__form'>
      <h1>Form to design goes here</h1>
      <p>Hello, I'm going to be a form.</p>
      <Button onClick={() => toggle_expense_form()}>Close</Button>
    </Container>
  );
};

export default ExpenseForm;
