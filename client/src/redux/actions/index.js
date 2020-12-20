import API from '../../clientRoutes/API';
import moment from 'moment';

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

    const thisMonth = (date) => {
         return moment(date).format('MMMM') === moment(Date.now()).format('MMMM') ? true : false;
    }

    let recurring = expenses.filter(expense => expense.monthly);
    let nonRecurring = expenses.filter(expense => !expense.monthly && thisMonth(expense.date));

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
            recDetail: new expenseDetail(recurring, getTotal(recurring)),
            nonRecDetail: new expenseDetail(nonRecurring, getTotal(nonRecurring))
        }
    }
}

export const selectView = (view)=> {
    return {
        type: 'SelectView',
        payload: view
    }
}

