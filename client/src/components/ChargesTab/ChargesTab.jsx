import React from 'react';
import './ChargesTab.scss';
import { Container, Button, Typography } from '@material-ui/core';
import { FaPlus } from 'react-icons/fa';

const ChargesTab = () => {
  return (
    <div className='charges__tab'>
      <Button className='charges__form__toggle'>Recurring</Button>
      <br />
      <Button className='charges__form__toggle'>Non-Recurring</Button>
      <br />
      <Button className='charges__form__toggle'>Prescription</Button>
    </div>
  );
};

export default ChargesTab;
