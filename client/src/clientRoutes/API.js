import axios from "axios";

export default {
    adjustSalary: data => {
        console.log('api reached' + data.id, data.salary)
        return axios.get('/api/user/salary', data);
    }
};