import React from "react";
import "./style.css";
import OrderItem from "../orderItem";

function OrderList() {
  return (
    <div style = {{marginTop:'40px'}}>
      <h6 style = {{color:"#512c62"}}>DANH SÁCH ĐƠN HÀNG</h6>
      <div style = {{width: '10%', height: '4px', backgroundColor: "#F75F00", marginBottom: '30px'}}></div>
      <OrderItem></OrderItem>
      <OrderItem></OrderItem>
      <OrderItem></OrderItem>
      <OrderItem></OrderItem>
      <OrderItem></OrderItem>
    </div>
  );
}

export default OrderList;
