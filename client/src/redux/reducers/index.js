import userReducer from './userReducer';
import expenseReducer from './expenseReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  user: userReducer,
  expenseDetails: expenseReducer,
});

export default rootReducer;
