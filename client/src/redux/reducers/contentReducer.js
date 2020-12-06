const loginReducer = (state = 'Home', action) => {
    switch(action.type){
        case 'SignIn':
            return true;
        case 'SignOut':
            return false;
        default:
            return state;
    }
}

export default loginReducer;