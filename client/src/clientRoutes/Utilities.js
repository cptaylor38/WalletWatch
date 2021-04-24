import axios from 'axios';

export default {
  addUtility: (data) => {
    return axios.post('/api/utility/create', data);
  },

  updateUtility: (data) => {
    return axios.post('/api/utility/update', data);
  },

  deleteUtility: (data) => {
    return axios.post(`/api/utility/delete/${data.id}`);
  },

  addUtilities: (data) => {
    return axios.post('/api/utility/createmulti', data);
  },
};
