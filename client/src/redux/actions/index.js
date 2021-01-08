import API from '../../clientRoutes/API';
import moment from 'moment';

export const getData = (id) =>{
    return (dispatch)=> {
        return API.getHomeDisplay({id}).then(res => {
            dispatch(updateProfile(res.data))
        })
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

export const categorize = (recurring, nonRecurring) => {
    function CategoryObj(list, total){
        this.list = list;
        this.total = total;
    }

    let financesDetails = new CategoryObj([], 0);
    let healthDetails = new CategoryObj([], 0);
    let leisureDetails = new CategoryObj([], 0);
    let travelDetails = new CategoryObj([], 0);
    let livingDetails = new CategoryObj([], 0);

    function categoryHelper(expenses){
        expenses.map(expense => {
            switch(expense.category){
                case 'health':
                    healthDetails.list.push(expense);
                    healthDetails.total += expense.amount;
                    return expense;
                case 'leisure':
                    leisureDetails.list.push(expense);
                    leisureDetails.total += expense.amount;
                    return expense;
                case 'travel':
                    travelDetails.list.push(expense);
                    travelDetails.total += expense.amount;
                    return expense;
                case 'living':
                    livingDetails.list.push(expense);
                    livingDetails.total += expense.amount;
                    return expense;
                case 'finances':
                    financesDetails.list.push(expense);
                    financesDetails.total += expense.amount;
                    return expense;
                default:
                    return expense;
            }
        })
    }

    if(recurring.length > 0) categoryHelper(recurring);
    if(nonRecurring.length > 0) categoryHelper(nonRecurring);

    let categoryObj = {
        financesDetails,
        healthDetails,
        livingDetails,
        leisureDetails,
        travelDetails
    }
    return {
        type: 'Categorize',
        payload: categoryObj
    }
}

export const selectView = (view)=> {
    return {
        type: 'SelectView',
        payload: view
    }
}

