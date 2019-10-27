import React from "react";
import OrderList from "../../../customer/orderManager/orderList";
import Button from "@material-ui/core/Button";
import "./style.css"

function DetailEmployee() {
  return (
    <div>
       <div style = {{display :'flex', justifyContent: 'flex-end'}}>
        <Button variant="contained" color="primary" style = {{backgroundColor: "#512c62", marginRight: '10px'}} >
         Lưu
        </Button>
        <Button variant="contained" color="primary" style = {{backgroundColor: "#512c62"}} >
          Sửa
        </Button>
        </div>
        <div>
            <h6 style = {{color:"#512c62"}}>THÔNG TIN NHÂN VIÊN</h6>
        </div>
        <div style = {{width: '10%', height: '4px', backgroundColor: "#F75F00"}}></div>
      <div style = {{display :'flex', justifyItems: 'center', justifyContent: 'flex-start', width: '100%', marginTop: '20px'}}>
          
        <div className = "info-customer" >
          <label>Tên</label>
          <h6>Trần Thị Hoa</h6>
          <label>Địa chỉ</label>
          <h6>Thôn 3 xã Thị Nghè</h6>
          <label>Địa chỉ ship</label>
          <h6>Thủ Đức, TP HCM</h6>
        </div>
        <div className = "info-customer">
            <label>Email</label>
            <h6>abc@gmail.com</h6>
            <label>SDT</label>
            <h6>098765432</h6>
            <label>Tình trạng</label>
            <div>
            <select>
              <option>Đang hoạt động</option>
              <option>Tạm nghỉ</option>
            </select>
            </div>
            <label>Quyền</label>
            <div>
            <select>
              <option>Shipper</option>
              <option>Saleman</option>
              <option>customer</option>
            </select>
            </div>
            
        </div>
      </div>
      <div>
        <OrderList></OrderList>
      </div>
    </div>
  );
}
export default DetailEmployee;
