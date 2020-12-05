import loginReducer from './loginReducer';
import userReducer from './userReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    isAuthorized: loginReducer,
    user: userReducer
})

export default rootReducer;