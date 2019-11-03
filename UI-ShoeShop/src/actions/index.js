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
    return callApi(
      "users?page=&per_page=&_return_fields=email%2Cname%2Cpassword%2CfacebookId%2Croles%2Cphone%2Caddress%2CshipAddresses%2CfavoriteProducts",
      "GET"
    ).then(res => {
      console.log(res.data.payload, "Test Res");
      dispatch(actCustomer(res.data.payload));
    });
  };
};

export const atcDeleteCustomerRequest = id => {
  return dispatch => {
    return callApi("users", "DELETE", `{"id": "${id}"}`).then(res => {
      dispatch(actGetCustomerRequest());
    });
  };
};

export const actCustomer = customers => {
  return {
    type: Types.GET_CUSTOMERS,
    customers: customers
  };
};

export const actCategory = categories => {
  return {
    type: Types.GET_CATEGORYS,
    categories: categories
  };
};
export const atcGetCategoryRequest = () => {
  return dispatch => {
    return callApi("categories/group", "GET").then(res => {
      console.log("catelogy", res.data.payload);
      dispatch(actCategory(res.data.payload));
    });
  };
};

export const atcDeleteCaregoryRequest = id => {
  return dispatch => {
    return callApi("categories", "DELETE", `{"id": "${id}"}`).then(res => {
      dispatch(atcGetCategoryRequest());
    });
  };
};

export const atcCreateCaregoryRequest = category => {
  return dispatch => {
    return callApi("categories", "POST", category).then(res => {
      console.log(res.data.payload);
      dispatch(atcGetCategoryRequest());
    });
  };
};

export const atcUpdateCaregoryRequest = (id, category) => {
  return dispatch => {
    return callApi(`categories/${id}`, "PUT", category).then(res => {
      console.log(res);
      dispatch(atcGetCategoryRequest());
    });
  };
};

export const atcGetProducts = products => {
  return {
    type: Types.GET_PRODUCTS,
    products: products
  };
};

export const atcGetProduct = product =>{
  return {
    type: Types.GET_PRODUCT,
    product: product
  }

}

export const atcGetProductRequest = () => {
  return dispatch => {
    return callApi("products", "GET").then(res => {
      console.log(res.data.payload);
      dispatch(atcGetProducts(res.data.payload));
    });
  };
};

export const atcCreateProductRequest = product => {
  console.log("product:", product);
  return dispatch => {
    return callApi("products", "POST", product).then(res => {
      console.log(res.data.payload);
      dispatch(atcGetProductRequest());
    });
  };
};

export const atcDeleteProductRequest = id => {
  return dispatch => {
    return callApi("products", "DELETE", `{"id": "${id}"}`).then(res => {
      console.log("dataDeleteProduct", res.data.payload);
      dispatch(atcGetProductRequest());
    });
  };
};

export const atcUpdateProductRequest = (id, product) => {
  return dispatch => {
    return callApi(`products/${id}`, "PUT", product).then(res => {
      dispatch(atcGetProductRequest());
    });
  };
};

export const atcGetSupliers = supliers => {
  return {
    type: Types.GET_SUPLIERS,
    supliers: supliers
  };
};

export const atcGetSuplier = suplier =>{
  return {
    type: Types.GET_SUPLIER,
    suplier: suplier
  }

}

export const atcGetSuplierRequest = () => {
  return dispatch => {
    return callApi("brands", "GET").then(res => {
      console.log(res.data.payload);
      dispatch(atcGetSupliers(res.data.payload));
    });
  };
};

export const atcCreateSuplierRequest = (suplier)=>{
  return dispatch=>{
    return callApi("brands", "POST" , suplier).then(res=>{
      dispatch(atcGetSuplierRequest());
    })
  }

}
export const atcDeleteSuplierRequest = (id)=>{
  return dispatch =>{
    return callApi(`brands/${id}`, 'DELETE' ).then(res=>{
      dispatch(atcGetSuplierRequest());
    })
  }
}
export const atcCreateProdctSuplierRequest = (id, productId) => {
  return dispatch => {
    return callApi(
      `brands/add-product/${id}`,
      "PUT",
      `{"addProductId": "${productId}"}`
    ).then(res => {
      dispatch(atcGetProductSuplierRequest(id));
    });
  };
};

export const atcGetProductSuplier = productSupliers => {
  return {
    type: Types.GET_PRODUCT_SUPLIER,
    productSupliers: productSupliers
  };
};

export const atcGetProductSuplierRequest = id => {
  return dispatch => {
    return callApi(`brands/list-product/${id}`, "GET").then(res => {
      var products = [];
      if (res.data.payload && res.data.payload.products.length > 0) {
        products = res.data.payload.products;
        console.log("product-suplier", res.data.payload.products);
      }
      console.log("product-suplier", products);
      dispatch(atcGetProductSuplier(products));
    });
  };
};

export const atcDeletProductSuplierRequest = (id, productId) => {
  console.log("LLLL", id + "-" + productId);
  return dispatch => {
    return callApi(
      `brands/remove-product/${id}`,
      "PUT",
      `{"removeProductId": "${productId}"}`
    ).then(res => {
      dispatch(atcGetProductSuplierRequest(id));
    });
  };
};
