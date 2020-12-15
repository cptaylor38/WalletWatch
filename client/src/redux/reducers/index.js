import contentReducer from './contentReducer';
import userReducer from './userReducer';
import expenseReducer from './expenseReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    content: contentReducer,
    user: userReducer,
    expenseDetails: expenseReducer
})

export default rootReducer;