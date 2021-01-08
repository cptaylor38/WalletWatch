const initialState = {
    filteredExpenses: {},
    categoryData: {}
}

const expenseReducer = (state = initialState, action) => {
    console.log(action.payload, action.type)
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