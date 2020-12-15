const userReducer = (state = {}, action)=> {
    switch(action.type){
        case 'Init':
            return action.payload;
        case 'Update':
            return action.payload;
        default:
            return state;
    }
}

export default userReducer;