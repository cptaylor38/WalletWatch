import API from '../../clientRoutes/API';

export const getData = (id) => {
  return (dispatch) => {
    return API.getHomeDisplay({ id }).then((res) => {
      dispatch(updateProfile(res.data));
    });
  };
};

export const updateProfile = (data) => {
  return {
    type: 'Update',
    payload: data,
  };
};
