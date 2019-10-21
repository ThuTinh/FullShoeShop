import * as Types from "../constants/actionType";
import callApi from "../utils/apiCaller";

export const actloginRequest = login => {
  return dispatch => {
    return callApi("auth/login", "POST", login).then(res => {
      dispatch(actlogin(res.data.payload));
      console.log(res);
    });
  };
};

export const actlogin = login => {
  return {
    type: Types.LOGIN,
    login
  };
};

export const actSignRequest = sign => {
  return dispatch => {
    return callApi("users", "POST", sign).then(res => {
      dispatch(actSign(res.data.payload));
      
    });
  };
};

export const actSign = sign => {
  return {
    type: Types.SIGN,
    sign
  };
};
