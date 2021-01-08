import React, { useState } from 'react';
import './ChargeItem.css';
import moment from 'moment';
import { Grid, Button } from '@material-ui/core';
import { FaEdit, FaCut } from 'react-icons/fa';
import ExpenseForm from '../ExpenseForm/ExpenseForm';
import API from '../../clientRoutes/API';
import { useDispatch} from 'react-redux';
import { updateProfile } from '../../redux/actions';

const ChargeItem = ({ data }) => {
  const [form, toggleForm] = useState(false);
  const dispatch = useDispatch();
  const updateField = () => {
    toggleForm(true);
  };

  const deleteExpense = () => {
    document.querySelectorAll('.expenseDeleteBtn').disabled = true;
    API.deleteExpense({ id: data._id }).then(res => {
      document.querySelectorAll('.expenseDeleteBtn').disabled = false;
      console.log(res);
      dispatch(updateProfile(res));
    });
  };

  return (
    <>
      <Grid container className='chargeItem'>
        {form === true && data ? (
          <ExpenseForm
            propData={data}
            form={form}
            toggleForm={toggleForm}
          />
        ) : (
          <>
            <Grid item xs={3} className='gridICharge'>
              <p>{data.title}</p>
            </Grid>
            <Grid item xs={1} className='gridICharge'>
              <p>${data.amount}</p>
            </Grid>
            <Grid item xs={3} className='gridICharge'>
              <p>{moment(data.date).format('MM/DD/YYYY')}</p>
            </Grid>
            <Grid item xs={1} className='gridICharge'>
              <Button type='button' onClick={updateField}>
                <FaEdit />
              </Button>
            </Grid>
            <Grid item xs={1} className='gridICharge'>
              <Button
                type='button'
                className='expenseDeleteBtn'
                onClick={deleteExpense}
              >
                <FaCut />
              </Button>
            </Grid>
          </>
        )}
      </Grid>
    </>
  );
};

export default ChargeItem;
