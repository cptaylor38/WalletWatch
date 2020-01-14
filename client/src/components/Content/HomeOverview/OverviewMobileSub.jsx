import React from 'react';

const OverviewMobileSub = ({ profile, nrTotal, rTotal }) => {
  return (
    <>
      <header>Your total projected monthly income is: </header>
      <p>{profile.salary / 12}</p>
      <header>Your current recurring monthly expenses: </header>
      <p>{rTotal}</p>
      <header>The total of your non-recurring purchases this month:</header>
      <p>{nrTotal}</p>
    </>
  );
};

export default OverviewMobileSub;
