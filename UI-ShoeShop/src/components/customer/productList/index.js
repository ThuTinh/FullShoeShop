import React, { useEffect, useState } from "react";
import "./style.css";
import ProductItem from "../prodcutItem";
import { connect } from "react-redux";
import {
  atcGetProductsRequest,
  atcGetCurentUserRequest,
  atcAddProductFavourite
} from "../../../actions/index";
import CircularProgress from "@material-ui/core/CircularProgress";

function ProductList(props) {
  const [user, setUser] = useState(props.currentUser);
  const [isLoading, setIsLoading] = useState(true);
  const RenderProductList = () => {
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
    console.log("body", body);
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
    if (props.products && props.products.length > 0) {
      setIsLoading(false);
    }
  }, [props.products]);

  useEffect(() => {
    setUser(props.currentUser);
    console.log("oaoaooa", props.currentUser);
  }, [props.currentUser]);
  return (
    <>
      {isLoading && (
        <div style = {{width: '100%', textAlign:'center'}}>
          <CircularProgress style = {{width:'100px', height:'100px', color:'#5A3D6C'}} />
        </div>
      )}
      <div className="row ">{!isLoading && <RenderProductList />}</div>
    </>
  );
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
    addFaccvourite: data => {
      dispatch(atcAddProductFavourite(data));
    }
  };
};
export default connect(stateMapToProps, dispatchMapToProps)(ProductList);
