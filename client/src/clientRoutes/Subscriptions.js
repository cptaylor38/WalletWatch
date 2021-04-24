import axios from 'axios';

export default {
  addSubscription: (data) => {
    return axios.post('/api/subscription/create', data);
  },

  updateSubscription: (data) => {
    return axios.post('/api/subscription/update', data);
  },

  deleteSubscription: (data) => {
    return axios.post(`/api/subscription/delete/${data.id}`);
  },

  addSubscriptions: (data) => {
    return axios.post('/api/subscription/createmulti', data);
  },
};
