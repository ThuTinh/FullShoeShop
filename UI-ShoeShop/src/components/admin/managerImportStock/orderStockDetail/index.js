import React, {useState, useEffect} from "react";
import ImportStockDetail from "../makeOrderImport/importStockDetail";
import { connect } from "react-redux";
import {Checkbox} from "@material-ui/core"
import {atcGetDetailOrderSuplierRequest} from "../../../../actions"
function OrderStockDetail(props) {

  const [order, setOrder] = useState(props.order);
//const order = props.order
  var products = [];
  if(order.products && order.products.length>0){
    for(var i = 0; i<order.products.length; i++){
      var color = new Set();
      var size = new Set();

      for(var m = 0; m<order.products[i].detail.length; m++){
        color.add(order.products[i].detail[m].color);
        size.add(order.products[i].detail[m].size);
      }
      let product = {
        maSanPham: order.products[i]._id,
        classification: { color:Array.from(color), size: Array.from(size) }
      }
      products.push(product);
    }
  }
  useEffect(()=>{
    let id = props.match.params.id;
    props.getOrder(id);
    console.log("11", props.order);
  },[]);

  useEffect(()=>{
    console.log("order nè",props.order );
    setOrder(props.order);
  },[props.order])

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <h6>Trạng thái đơn hàng: Đã duyệt</h6>
        </div>

        <div>
          <Checkbox color="primary" /> Duyệt
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          width: "100%",
          marginBottom: "20px",
          marginTop: "20px"
        }}
      >
        <div style={{ width: "50%" }}>
          <div style={{ display: "flex" }}>
            <div style={{ width: "150px" }}>Mã đơn hàng :</div>
            <p>
              {" "}
              <b>ABC11122</b>
            </p>
          </div>
          <div style={{ display: "flex" }}>
            <div style={{ width: "150px" }}>Nhà cung cấp:</div>
            <p>
              {" "}
              <b>{order.suplierId.name} </b>
            </p>
          </div>
          <div style={{ display: "flex" }}>
            <div style={{ width: "150px" }}>Người tạo:</div>
            <p>
              <b>{order.employee.name}</b>
            </p>
          </div>
        </div>
        <div style={{ width: "50%" }}>
          <div style={{ display: "flex" }}>
            <div style={{ width: "150px" }}>Thời gian: </div>
            <p>
              <b>{order.createdAt} </b>
            </p>
          </div>
          <div style={{ display: "flex" }}>
            <div style={{ width: "150px" }}>Trạng thái:</div>
            <p>
              <b>Đã duyệt</b>
            </p>
          </div>
          <div style={{ display: "flex" }}>
            <div style={{ width: "150px" }}>Tổng công:</div>
            <p>
              <b>{order.totalPrice}</b>
            </p>
          </div>
        </div>
      </div>
      <h6>THÔNG TIN CHI TIẾT ĐƠN HÀNG</h6>
      <div
        style={{
          width: "10%",
          height: "4px",
          backgroundColor: "#F75F00",
          marginBottom: "30px"
        }}
      ></div>
      <ImportStockDetail products={products}/>
    </div>
  );
}
const stateMapToProps = (state, props) => {
  return {
    order: state.detailOrderSuplier
  };
};

const dispatchMapToProps = (dispatch, props)=>{
  return {
    getOrder: (id)=>{
      dispatch(atcGetDetailOrderSuplierRequest(id));
    }
  }
}
export default connect(stateMapToProps, dispatchMapToProps)(OrderStockDetail);
