import userReducer from './userReducer';
import expenseReducer from './expenseReducer';
import formReducer from './formReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  user: userReducer,
  expenseDetails: expenseReducer,
  formToggle: formReducer,
});

export default rootReducer;
