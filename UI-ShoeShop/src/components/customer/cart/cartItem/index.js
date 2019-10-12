import React from "react";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import "./style.css";

 function CartItem(){

   const useStyles = makeStyles(theme =>({
    button:{
      backgroundColor :'#ff0000', color: '#ffffff'

    }
  }))
  const classes = useStyles();

    return (
      <tr>
        <th scope="row">
          <img
            alt=""
            src="http://img.mwc.com.vn/giay-thoi-trang?&w=80&h=80&FileInput=//Upload/2019/10/o1cn01q02zrl2bbuipbvi11-3535558301.jpg"
            className="img-fluid z-depth-0"
          />
        </th>
        <td>
          <h5>Giày convert</h5>
        </td>
        <td>100.000đ</td>
        <td style = {{display: 'flex'}}>
          <span> 1 </span>
          <div style = {{marginLeft:'5px' }}>
            <Button variant="contained"  className = {classes.button} >
             —
            </Button>
            <Button  variant="contained" className = {classes.button} >
              +
            </Button>
          </div>
        </td>
        <td>100.000đ</td>
        <td>
        <Button variant="contained"  className = {classes.button}>
        x
      </Button>
        </td>
      </tr>
    );
  }

  // DeleteProductInCart = (product) => {
  //     // console.log('kkk', product);

  //     // this.props.DeleteProductInCart(product);
  //     // this.props.onChangeMessage(Msg.MSG_DELETE_PRODUCT_IN_CART_SUCCESS);

  // }
  // UpdateProduct = (product, quality) => {
  //     // if (quality > 0) {
  //     //     this.props.UpDateProductInCart(product, quality);
  //     //     this.props.onChangeMessage(Msg.MSG_UPDATE_CART_SUCCESS);
  //     // }

  // }

export default CartItem;
