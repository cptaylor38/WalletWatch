import axios from 'axios';

export default {
  addLoan: (data) => {
    return axios.post('/api/loan/create', data);
  },

  updateLoan: (data) => {
    return axios.post('/api/loan/update', data);
  },

  deleteLoan: (data) => {
    return axios.post(`/api/loan/delete/${data.id}`);
  },

  addLoans: (data) => {
    //data should be array of loan objects.
    //also need user id passed in
    //endpoint expecting object of
    // {id: user _id, loans_array [{data}, {data}, {data}]}
    return axios.post('/api/loan/createmulti', data);
  },
};
