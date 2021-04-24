import axios from 'axios';

export default {
  addPrescription: (data) => {
    return axios.post('/api/prescription/create', data);
  },

  updatePrescription: (data) => {
    return axios.post('/api/prescription/update', data);
  },

  deletePrescription: (data) => {
    return axios.post(`/api/prescription/delete/${data.id}`);
  },

  addPrescriptions: (data) => {
    return axios.post('/api/prescription/createmulti', data);
  },
};
