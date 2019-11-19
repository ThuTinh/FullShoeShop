import * as Types from "../constants/actionType";
import callApi from "../utils/apiCaller";

export const actloginRequest = login => {
  return dispatch => {
    return callApi("auth/login", "POST", login).then(res => {
      dispatch(actlogin(res.data.payload));
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

export const atcSearchUserRequets = filter => {
  return dispatch => {
    return callApi(`users/search?q=${filter}`, "GET").then(res => {
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

export const atcGetProduct = product => {
  return {
    type: Types.GET_PRODUCT,
    product: product
  };
};

export const atcGetProductRequest = id => {
  return dispatch => {
    return callApi(`products/${id}`, "GET").then(res => {
      console.log("1111", res);
      dispatch(atcGetProduct(res.data.payload));
    });
  };
};

export const atcAddDetailItemProductRequets = (id, detail) => {
  return dispatch => {
    return callApi(`products/add-detail-item/${id}`, "PUT", detail)
      .then(res => {})
      .catch(err => {
        console.log("lỗi", err);
      });
  };
};

export const atcUpdateDetailItemProductRequets = (id, idItem, inventoryAdd) => {
  return dispatch => {
    return callApi(
      `products/update-detail-item/${id}`,
      "PUT",
      `{"id": "${idItem}", "inventory":"${inventoryAdd}"}`
    )
      .then(res => {})
      .catch(err => {
        console.log("lỗi", err);
      });
  };
};
export const atcGetProductsRequest = () => {
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
      dispatch(atcGetProductsRequest());
    });
  };
};

export const atcDeleteProductRequest = id => {
  return dispatch => {
    return callApi("products", "DELETE", `{"id": "${id}"}`).then(res => {
      console.log("dataDeleteProduct", res.data.payload);
      dispatch(atcGetProductsRequest());
    });
  };
};

export const atcUpdateProductRequest = (id, product) => {
  return dispatch => {
    return callApi(`products/${id}`, "PUT", product)
      .then(res => {
        dispatch(atcGetProductsRequest());
      })
      .catch(err => {
        console.log("lỗi", err);
      });
  };
};

export const atcGetDetailProductRequest = id => {
  return async dispatch => {
    return await callApi(`products/detail/${id}`, "GET");
  };
};

export const atcGetDetailProduct = detailProduct => {
  return {
    type: Types.GET_DETAIL_PRODUCT,
    detailProduct: detailProduct
  };
};
export const atcGetSupliers = supliers => {
  return {
    type: Types.GET_SUPLIERS,
    supliers: supliers
  };
};

export const atcCreateOrderSuplierRequest = order => {
  return dispatch => {
    return callApi("order-suplier", "POST", order).then(res => {
      console.log("order-suplier", res);
    });
  };
};

export const atcGetDetailOrderSuplierRequest = id => {
  return dispatch => {
    return callApi(`order-suplier/${id}`, "GET").then(res => {
      dispatch(atcGetDetailOrderSuplier(res.data.payload));
    });
  };
};

export const atcGetDetailOrderSuplier = order => {
  console.log("1111ss", order);
  return {
    type: Types.GET_DETAIL_ORDER_SUPLIER,
    detailOrderSuplier: order
  };
};

export const atcDeleteOrderSuplier = id => {
  return dispatch => {
    return callApi(`order-suplier`, "DELETE", `{"id": "${id}"}`).then(res => {
      dispatch(atcGetOrderSuplierRequest());
    });
  };
};

export const atcGetOrderSuplierRequest = filter => {
  return dispatch => {
    return callApi(`order-suplier?filter=&${filter}`, "GET").then(res => {
      console.log("ác", res);
      dispatch(atcGetOrderSuplier(res.data.payload));
    });
  };
};

export const atcGetOrderSuplier = orders => {
  return {
    type: Types.GET_ORDERS_SUPLIER,
    ordersSuplier: orders
  };
};

export const atcGetSuplier = suplier => {
  return {
    type: Types.GET_SUPLIER,
    suplier: suplier
  };
};

export const atcGetSuplierRequest = () => {
  return dispatch => {
    return callApi("brands", "GET").then(res => {
      console.log(res.data.payload);
      dispatch(atcGetSupliers(res.data.payload));
    });
  };
};

export const atcSearchSuplierRequest = filter => {
  return dispatch => {
    return callApi(`brands/search?q=${filter}`, "GET").then(res => {
      dispatch(atcGetSupliers(res.data.payload));
    });
  };
};
export const atcCreateSuplierRequest = suplier => {
  return dispatch => {
    return callApi("brands", "POST", suplier).then(res => {
      dispatch(atcGetSuplierRequest());
    });
  };
};
export const atcDeleteSuplierRequest = id => {
  return dispatch => {
    return callApi(`brands/${id}`, "DELETE").then(res => {
      dispatch(atcGetSuplierRequest());
    });
  };
};
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

export const atcChangeRoleRequest = (id, role) => {
  return dispatch => {
    callApi(`users/role/${id}`, "PUT", `{"role": "${role}"}`).then(res => {
      console.log("role chảng", res.data.payload);
    });
  };
};

export const atcGetUserByIdRequest = id => {
  return dispatch => {
    return callApi(`users/${id}`, "GET").then(res => {
      dispatch(atcGetUserById(res.data.payload));
    });
  };
};

export const atcGetUserById = user => {
  return {
    type: Types.GET_USER,
    user: user
  };
};
