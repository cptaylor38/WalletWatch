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
    function CategoryConstructor(list, total){
        this.list = list;
        this.total = total;
    }

    function CategoryListConstructor(finances, health, leisure, travel, living, total){
        this.financesDetails = finances;
        this.healthDetails = health;
        this.leisureDetails = leisure;
        this.travelDetails = travel;
        this.livingDetails = living;
        this.total = total;
    }

    let recurringCategoryList = new CategoryListConstructor(
        new CategoryConstructor([], 0), 
        new CategoryConstructor([], 0), 
        new CategoryConstructor([], 0), 
        new CategoryConstructor([], 0), 
        new CategoryConstructor([], 0), 
        0)
    
    let nonRecurringCategoryList = new CategoryListConstructor(
        new CategoryConstructor([], 0), 
        new CategoryConstructor([], 0), 
        new CategoryConstructor([], 0), 
        new CategoryConstructor([], 0), 
        new CategoryConstructor([], 0), 
        0)

    let categoryObj = {
        recurringCategoryData: recurringCategoryList,
        nonRecurringCategoryData: nonRecurringCategoryList
    }

    function expenseHelper(objToUpdate, category, expense){
        objToUpdate[category].list.push(expense)
        objToUpdate[category].total += expense.amount
        objToUpdate.total += expense.amount
    }

    function categoryHelper(expenses, objToUpdate){
        expenses.map(expense => {
            switch(expense.category){
                case 'health':
                    expenseHelper(objToUpdate, 'healthDetails', expense)
                    return expense;
                case 'leisure':
                    expenseHelper(objToUpdate, 'leisureDetails', expense)
                    return expense;
                case 'travel':
                    expenseHelper(objToUpdate, 'travelDetails', expense)
                    return expense;
                case 'living':
                    expenseHelper(objToUpdate, 'livingDetails', expense)
                    return expense;
                case 'finances':
                    expenseHelper(objToUpdate, 'financesDetails', expense)
                    return expense;
                default:
                    return expense;
            }
        })
    }

    if(recurring.length > 0) categoryHelper(recurring, recurringCategoryList);
    else {
        categoryObj.recurringCategoryList = null;
    }
    if(nonRecurring.length > 0) categoryHelper(nonRecurring, nonRecurringCategoryList);
    else {
        categoryObj.nonRecurringCategoryList = null;
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

