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

export const categorizeAndFilter = (nonRecurring, recurring) => {

    function CategoryObj(list, total){
        this.list = list;
        this.total = total;
    }

    function FilteredObj(finances, living, health, leisure, travel){
        this.financesDetails = finances;
        this.livingDetails = living;
        this.healthDetails = health;
        this.leisureDetails = leisure;
        this.travelDetails = travel;
    }

    function filterCategories(expenses){
        let financesObj = new CategoryObj([], 0)
        let livingObj = new CategoryObj([], 0)
        let healthObj = new CategoryObj([], 0)
        let leisureObj = new CategoryObj([], 0)
        let travelObj = new CategoryObj([], 0)

        expenses.map(item => {
            switch (item.category) {
                case 'finances':
                    financesObj.list.push(item);
                    financesObj.total += item.amount;
                    return;
                case 'living':
                    livingObj.list.push(item);
                    livingObj.total += item.amount;
                    return;
                case 'health':
                    healthObj.list.push(item);
                    healthObj.total += item.amount;
                    return;
                case 'leisure':
                    leisureObj.list.push(item);
                    leisureObj.total += item.amount;
                    return;
                case 'travel':
                    travelObj.list.push(item);
                    travelObj.total += item.amount;
                    return;
                default:
                    return item;
             }
        })

        return new FilteredObj(financesObj, livingObj, healthObj, leisureObj, travelObj);
    }

    return {
        type: 'categorizeAndFilter',
        payload: {
            categorizedNonRecurring: filterCategories(nonRecurring),
            categorizedRecurring: filterCategories(recurring)
        }
    }
}

export const expenseAdjuster = (expense, action){
    if(action === 'add'){
        return {
            type: 'addExpenseToUser',
            payload: expense
        }
    }

    if(action === 'update'){
        return {
            type: 'addExpenseToUser',
            payload: expense
        }
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

