import React from "react";
import ImportStockDetail from "../makeOrderImport/importStockDetail";
import Checkbox from "@material-ui/core/Checkbox";


function OrderStockDetail() {
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
      <div style={{ display: "flex", justifyContent: 'flex-start'  , width: '100%', marginBottom: '20px', marginTop: '20px'}}>
        <div style = {{width: '50%'}}>
          <div style = {{display: 'flex'}}>
            <div  style = {{width: '150px'}}>Mã đơn hàng :</div>
            <p> <b>ABC11122</b></p>
          </div>
          <div style = {{display: 'flex'}}>
            <div style = {{width: '150px'}}>Nhà cung cấp:</div>
            <p> <b>Nhà CC 1 </b></p>
          </div>
          <div style = {{display: 'flex'}}>
            <div style = {{width: '150px'}}>Người tạo:</div>
            <p><b>Trần Thị Bánh Bèo</b></p>
          </div>
        </div>
        <div style = {{width: '50%'}}>
          <div style = {{display: 'flex'}}>
            <div style = {{width: '150px'}}>Thời gian: </div>
            <p><b>25/10/2019 </b></p>
          </div>
          <div style = {{display: 'flex'}}>
            <div style = {{width: '150px'}}>Trạng thái:</div>
            <p><b>Đã duyệt</b></p>
          </div>
          <div style = {{display: 'flex'}}>
            <div style = {{width: '150px'}}>Tổng công:</div>
            <p><b>1000.000</b></p>
          </div>
        </div>
      </div>
      <h6>THÔNG TIN CHI TIẾT ĐƠN HÀNG</h6>
      <div style = {{width: '10%', height: '4px', backgroundColor: "#F75F00", marginBottom: '30px'}}></div>
      <ImportStockDetail></ImportStockDetail>
    </div>
  );
}
export default OrderStockDetail;
