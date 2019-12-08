import React, { useState, useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import TableRow from "@material-ui/core/TableRow";
import { Link } from "react-router-dom";
import TableCell from "@material-ui/core/TableCell";
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom'
import {
  atcTotalPrice,
  atcGetCurentUserRequest,
  atcMakeOrderCustomer
} from "../../../../actions";

const StyledTableRow = withStyles(theme => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  }
}))(TableRow);

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: "#FAFAFA",
    color: theme.palette.common.black
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

function CartResult(props) {
  const [user, setUser] = useState(props.currentUser);
  const [ordered, setOrdered] = useState(false);
  useEffect(() => {
    const productOrders = props.productOrders;
    let total = 0;
    if (productOrders && productOrders.length > 0) {
      productOrders.map((productOrder, index) => {
        total += parseInt(productOrder.price) * parseInt(productOrder.quantity);
      });

      props.calculateTotalPrice(total);
    }

    const token = localStorage.getItem("token");
    props.getCurrentUser(token);
  }, []);

  useEffect(() => {
    setUser(props.currentUser);
  }, [props.currentUser]);

  const makePurchase = () => {
    const temp = JSON.parse(localStorage.getItem("ProductOrders"));
    let products = [];
    if (temp && temp.length > 0) {
      products = temp.map((item, index) => {
        return {
          productId: item.productId,
          color: item.color,
          size: item.size,
          price: item.price,
          quantity: item.quantity
        };
      });
    }
    const order = {
      products: products,
      totalPrice: props.totalPrice,
      userId: user._id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      shipAddress: user.shipAddress
    };
    props.makeOrderCumtomer(order);
    localStorage.removeItem("ProductOrders");
    setOrdered(true);
    console.log("order", order);
  };
  return (
    <StyledTableRow>
      <StyledTableCell colSpan={3}></StyledTableCell>
      <StyledTableCell
        align="center"
        style={{ fontSize: "20px", fontWeight: "600" }}
      >
        Tổng tiền
      </StyledTableCell>
      <StyledTableCell
        align="center"
        style={{ fontSize: "20px", fontWeight: "600" }}
      >
        {props.totalPrice}
      </StyledTableCell>
      <StyledTableCell align="center">
        {!props.buy && (
          <button className="fill-button">
            <Link
              to="/product/purchase"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              Mua hàng
            </Link>
          </button>
        )}
        {props.buy && (
          <button className="fill-button" onClick={makePurchase}>
            Đặt hàng
          </button>
        )}
        {ordered && <Redirect to='/my-acount/orders' />}
      </StyledTableCell>
    </StyledTableRow>
  );
}

const stateMapToProps = (state, props) => {
  return {
    totalPrice: state.totalPrice,
    currentUser: state.user
  };
};
const dispatchMapToProps = (dispatch, props) => {
  return {
    calculateTotalPrice: price => {
      dispatch(atcTotalPrice(price));
    },
    getCurrentUser: token => {
      dispatch(atcGetCurentUserRequest(token));
    },
    makeOrderCumtomer: order => {
      dispatch(atcMakeOrderCustomer(order));
    }
  };
};
export default connect(stateMapToProps, dispatchMapToProps)(CartResult);
