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

export const actGetCustomerRequest = () => {
  return dispatch => {
   
    return callApi("users?page=&per_page=&_return_fields=email%2Cname%2Cpassword%2CfacebookId%2Croles%2Cphone%2Caddress%2CshipAddresses%2CfavoriteProducts", "GET").then(res => {
      console.log(res.data.payload, "Test Res");
      dispatch(actCustomer(res.data.payload));
    });
  };
};

export const actCustomer = (customers)=>{
  return {
    type: Types.GET_CUSTOMER,
    customers : customers
  }
}

export const actCategory = (categories) =>{
  return {
    type: Types.GET_CATEGORY,
    categories: categories
  }
}
export const atcGetCategoryRequest = ()=>{
  return dispatch =>{
    return callApi("categories/group","GET").then(res=>{
      console.log("catelogy",res.data.payload )
      dispatch(actCategory(res.data.payload));
    })

  }
}

export const atcDeleteCaregoryRequest = (id) =>{
  return dispatch=>{
    return callApi("categories", "DELETE", `{"id": "${id}"}`).then(res=>{
    //  console.log("Delete", res.data.payload);
      dispatch(atcGetCategoryRequest());
    });
  }
}
