const initialState = {
    filteredExpenses: {},
    categoryData: {}
}

const expenseReducer = (state = initialState, action) => {
    switch(action.type){
        case 'FilterExpenses':
            return {...state, filteredExpenses: action.payload};
        case 'Categorize':
            return {...state, categoryData: action.payload};
        default:
            return state;
    }
}

export default expenseReducer;