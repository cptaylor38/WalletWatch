import API from '../../clientRoutes/API';

const userReducer = (state = {}, action)=> {
    switch(action.type){
        case 'Init':
            return action.payload;
        default:
            return state;
    }
}

export default userReducer;