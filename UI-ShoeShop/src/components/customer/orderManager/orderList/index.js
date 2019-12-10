import React, { useEffect, useState } from "react";
import "./style.css";
import OrderItem from "../orderItem";
import { connect } from "react-redux";
import {
  atcGetOrderCustomersRequest,
  atcGetCurentUserRequest,
  atcRemoveProductItemInOrderRequest
} from "../../../../actions";

function OrderList(props) {
  const [orders, setOrders] = useState(props.orders);
  useEffect(() => {
    props.getOrderCumtomers(props.currentUser._id);
  }, [props.currentUser]);

  useEffect(() => {
    setOrders( [...props.orderCustomer]);
  }, [props.orderCustomer]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    props.getCurrentUser(token);
  }, []);

  const cancelProductOrderItem = (orderId, productOrderId) => {
    props.cancelProductOrderItem(orderId, productOrderId,props.currentUser._id );
   
  };
  const renderOrderItem = () => {
    let result = [];
    if (orders && orders.length > 0) {
      orders.map((order, index) => {
        if (order.products && order.products.length > 0) {
          order.products.map((item, ind) => {
            const orderItem = (
              <OrderItem
                key={index + new Date() + ind}
                orderItem={item}
                status={order.status}
                orderId={order._id}
                cancelProductOrderItem={cancelProductOrderItem}
                updatedAt = {order.updatedAt}
              />
            );
            result.push(orderItem);
          });
        }
      });
    }
    return result;
  };
  return (
    <div style={{ marginTop: "40px" }}>
      <h6 style={{ color: "#2b2b28" }}>DANH SÁCH ĐƠN HÀNG</h6>
      {renderOrderItem()}
    </div>
  );
}
const stateMapToProps = (state, props) => {
  return {
    currentUser: state.user,
    orderCustomer: state.orderCustomer
  };
};

const dispatchMapToProps = (dispatch, props) => {
  return {
    getOrderCumtomers: id => {
      dispatch(atcGetOrderCustomersRequest(id));
    },
    getCurrentUser: token => {
      dispatch(atcGetCurentUserRequest(token));
    },
    cancelProductOrderItem: (orderId, productOrderId, userId) => {
      dispatch(atcRemoveProductItemInOrderRequest(orderId, productOrderId, userId));
    }
  };
};

export default connect(stateMapToProps, dispatchMapToProps)(OrderList);
