const userReducer = (state = {}, action)=> {
    switch(action.type){
        case 'Update':
            return action.payload;
        default:
            return state;
    }
}

export default userReducer;