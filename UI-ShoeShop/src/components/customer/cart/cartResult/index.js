import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

function CartResult() {
  return (
    <tr>
      <td colSpan="3"></td>
      <td>
        <h4>
          <strong>Tổng Tiền</strong>
        </h4>
      </td>
      <td>
        <h4>
          <strong>100.000</strong>
        </h4>
      </td>
      <td colSpan="3">
      <Button variant="contained"  style = {{backgroundColor :'#ff0000', color: '#ffffff'}}>
      Mua hàng
      </Button>
      </td>
    </tr>
  );

}

export default CartResult;
