import React, { useEffect, useState } from "react";
import "./style.css";
import ProductItem from "../prodcutItem";
import { connect } from "react-redux";
import {
  atcGetProductsRequest,
  atcGetCurentUserRequest,
  atcAddProductFavourite
} from "../../../actions/index";

function ProductList(props) {
  const [user, setUser] = useState(props.currentUser);
  const renderProductList = () => {
    console.log("ls products", props.products);
    var result = [];
    const products = props.products;
    if (products && products.length > 0) {
      result = products.map((product, index) => {
        return (
          <div className="col-4" key={index}>
            <ProductItem product={product} addFavourite={addFaccvourite} />
          </div>
        );
      });
    }
    return result;
  };

  const addFaccvourite = productId => {
    let body = {
      productId: productId,
      id: user._id
    };
    console.log("body",body);
    props.addFaccvourite(body);
  };
  useEffect(() => {
    props.getProducts();
    const token = localStorage.getItem("token");
    console.log("token111", token);
    if (token && token.length > 0) {
      console.log("token", token);
      props.getCurentUser(token);
    }
  }, []);

  useEffect(() => {
    setUser(props.currentUser);
    console.log("oaoaooa",props.currentUser);

  }, [props.currentUser]);
  return <div className="row ">{renderProductList()}</div>;
}
const stateMapToProps = (state, props) => {
  return {
    products: state.products,
    currentUser: state.user
  };
};
const dispatchMapToProps = (dispatch, props) => {
  return {
    getProducts: () => {
      dispatch(atcGetProductsRequest());
    },
    getCurentUser: token => {
      dispatch(atcGetCurentUserRequest(token));
    },
    addFaccvourite: data =>{
      dispatch(atcAddProductFavourite(data));
    }
  };
};
export default connect(stateMapToProps, dispatchMapToProps)(ProductList);
