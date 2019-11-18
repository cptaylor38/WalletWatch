import axios from "axios";

export default {
    adjustSalary: data => {
        return axios.post('/api/salary/update', data);
    },

    getCategoryData: data => {
        let id = data.id;
        return axios.get(`/api/expense/${id}/${data.category}`);
    },

    getHomeDisplay: data => {
        let id = data.id;
        return axios.get(`/api/home/${id}`);
    },

    createExpense: data => {
        return axios.post('/api/expense/create', data);
    }
};