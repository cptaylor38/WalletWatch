const loginReducer = (state = false, action) => {
    switch(action.type){
        case 'SignIn': 
            return state = true;
        case 'SignOut':
            return state = false;
        default:
            return state;
    }
}

export default loginReducer;