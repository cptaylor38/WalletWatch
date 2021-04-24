import axios from 'axios';

export default {
  addNonRecurring: (data) => {
    return axios.post('/api/nonRecurring/create', data);
  },

  updateNonRecurring: (data) => {
    return axios.post('/api/nonRecurring/update', data);
  },

  deleteNonRecurring: (data) => {
    return axios.post(`/api/nonRecurring/delete/${data.id}`);
  },

  addNRCharges: (data) => {
    return axios.post('/api/nonRecurring/createmulti', data);
  },
};
