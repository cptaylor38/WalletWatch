const userReducer = (state = {}, action) => {
    console.log(state, action);
    switch(action){
        case 'Initialize':
            return {...action.payload};
        default: 
            return state;
    }
}

export default userReducer;