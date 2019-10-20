import React from "react";
import ImportStockDetail from '../makeOrderImport/importStockDetail'
import Checkbox from '@material-ui/core/Checkbox'
import Button from '@material-ui/core/Button'

function OrderStockDetail() {
  return (
    <div>
      <div style = {{display:'flex', justifyContent:'space-between'}}>
        <div ><h6>Trạng thái đơn hàng: Đã duyệt</h6></div>
       
        <div><Checkbox
            color="primary"
          /> Duyệt</div>
      </div>
      <ImportStockDetail></ImportStockDetail>
      <Button>Quay lại</Button>
    </div>
  );
}
export default OrderStockDetail;
