import React from "react";
import "./style.css";
import OrderItem from "../orderItem";

function OrderList() {
  return (
    <div style = {{marginTop:'40px'}}>
      <h6 style = {{color:"#2b2b28"}}>DANH SÁCH ĐƠN HÀNG</h6>
      <div style = {{width: '10%', height: '4px', backgroundColor: "#d9a128", marginBottom: '30px'}}></div>
      <OrderItem></OrderItem>
      <OrderItem></OrderItem>
      <OrderItem></OrderItem>
      <OrderItem></OrderItem>
      <OrderItem></OrderItem>
    </div>
  );
}

export default OrderList;
