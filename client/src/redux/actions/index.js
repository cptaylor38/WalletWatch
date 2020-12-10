import API from '../../clientRoutes/API';

export const getData = (id) =>{
    return (dispatch)=> {
        return API.getHomeDisplay({id}).then(res => dispatch(initUser(res.data)))
    }
}

export const initUser = (data) => {
    return {
        type: 'Init',
        payload: data
    }
}

export const updateProfile = (data) => {
    return {
        type: 'Update',
        payload: data
    }
}