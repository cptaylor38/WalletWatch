const formReducer = (state = false, action) => {
  switch (action.type) {
    case 'ExpenseFormToggle':
      return !state;
    default:
      return false;
  }
};

export default formReducer;
