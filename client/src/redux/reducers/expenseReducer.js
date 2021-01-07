const initialState = {
    filteredExpenses: {},
    filteredCategoryData: {}
}

const expenseReducer = (state = initialState, action) => {
    switch(action.type){
        case 'FilterExpenses':
            return {...state, filteredExpenses: action.payload};
        case 'GetFilteredCategoryData':
            return {...state, filteredCategoryData: action.payload};
        default:
            return state;
    }
}

export default expenseReducer;