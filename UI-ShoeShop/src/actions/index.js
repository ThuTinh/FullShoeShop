import * as Types from '../constants/actionType'
import callApi from '../utils/apiCaller'

export const actloginRequest = (login) => {
    return (dispatch) => {
        return callApi('/api/v1/auth/login', 'POST', login).then(res => {
            dispatch(actlogin(res.data));
            console.log(res);

        });

    }
}

export const actlogin = (login) => {
    return {
        type: Types.LOGIN,
        login
    }

}
