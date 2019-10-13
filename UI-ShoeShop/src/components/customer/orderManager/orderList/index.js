import React from "react";
import "./style.css";
import OrderItem from "../orderItem";

function OrderList() {
  return (
    <div style = {{marginTop:'40px'}}>
      <h4 style = {{marginBottom: '40px', color: '#F75F00'}}>Danh sách các đơn hàng</h4>
      <OrderItem></OrderItem>
      <OrderItem></OrderItem>
      <OrderItem></OrderItem>
      <OrderItem></OrderItem>
      <OrderItem></OrderItem>
    </div>
  );
}

export default OrderList;
