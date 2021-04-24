import axios from 'axios';

export default {
  adjustSalary: (data) => {
    return axios.post('/api/salary/update', data);
  },

  getHomeDisplay: (data) => {
    return axios.get(`/api/home/${data.id}`);
  },

  //probably best to create separate modules for each route -
  //prescriptions, subscriptions, non-recurring, utility, loans, and need to flesh out idea for what to
  //do with savings and paid schemas.
};
