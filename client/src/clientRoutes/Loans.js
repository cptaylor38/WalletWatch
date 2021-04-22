import axios from 'axios';

export default {
  addLoan: (data) => {
    return axios.post('/api/loan/create', data);
  },

  updateLoan: (data) => {
    return axios.post('/api/loan/update', data);
  },

  addLoans: (data) => {
    //data should be array of loan objects
    return axios.post('/api/loan/createmulti', data);
  },

  getHomeDisplay: (data) => {
    let id = data.id;
    return axios.get(`/api/home/${id}`);
  },

  //probably best to create separate modules for each route -
  //prescriptions, subscriptions, non-recurring, utility, loans, and need to flesh out idea for what to
  //do with savings and paid schemas.
};
