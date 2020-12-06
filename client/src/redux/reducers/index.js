import contentReducer from './contentReducer';
import userReducer from './userReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    content: contentReducer,
    user: userReducer
})

export default rootReducer;