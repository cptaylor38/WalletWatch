import API from '../../clientRoutes/API';

export const getData = (id) =>{
    return (dispatch)=> {
        return API.getHomeDisplay({id}).then(res => {
            dispatch(initUser(res.data))
        })
    }
}

export const initUser = (data) => {
    return {
        type: 'Init',
        payload: data
    }
}

export const updateProfile = (data) => {
    return {
        type: 'Update',
        payload: data
    }
}

export const filterExpenses = (expenses) => {
    function expenseDetail(expenseArr, total ){
        this.list = expenseArr;
        this.total = total;
    }
    
    let recurring = expenses.filter(expense => expense.recurring);
    let nonRecurring = expenses.filter(expense => !expense.recurring);

    function getTotal(arr){
        let total = 0;
        for(let expense of arr){
            total += expense.amount;
        }
        return total;
    }

    return {
        type: 'FilterExpenses',
        payload: {
            recDetal: new expenseDetail(recurring, getTotal(recurring)),
            nonRecDetail: new expenseDetail(nonRecurring, getTotal(nonRecurring))
        }
    }
}