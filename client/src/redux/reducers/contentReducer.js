const contentReducer = (state = 'Home', action) => {
    switch(action.type){
        case 'SelectView':
            return action.payload;
        default:
            return 'Home';
    }
}

export default contentReducer;