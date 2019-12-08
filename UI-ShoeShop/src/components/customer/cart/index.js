import React, { useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { createBrowserHistory } from "history";
import { Link } from "react-router-dom";
import CartResult from "./cartResult"
import "./style.css";
import CartItem from "./cartItem";

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: "#FAFAFA",
    color: theme.palette.common.black
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: "20px",
    marginBottom: "80px",
    overflowX: "auto"
  },
  table: {
    minWidth: 700,
    marginTop: "20px"
  }
}));

function Carts(props) {
  const classes = useStyles();
  const history = createBrowserHistory();
  const buyProducts = id => {
    history.push("/product/purchase");
  };
  const [productOrders,setProductOrders]=useState(JSON.parse(localStorage.getItem("ProductOrders")));
  const [customer, setCustomer] = useState(true);

  const removeProductOrder = ()=>{
    const temp = JSON.parse(localStorage.getItem("ProductOrders"));
    setProductOrders([...temp])
  }

  const renderProductItem = () => {
    var result = [];
    if(productOrders && productOrders.length>0){
     result= productOrders.map((product, index)=>{
      return <CartItem productOrder = {product} key = {index} index = {index} remove = {removeProductOrder} buy = {props.buy} />
      })
    }
    return result;
  };
  return (
    <>
      <h6>DANH SÁCH SẢN PHẨM</h6>
      <div
        style={{
          width: "10%",
          height: "4px",
          backgroundColor: "#F75F00",
          marginBottom: "30px"
        }}
      ></div>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <StyledTableCell align="center"></StyledTableCell>
            <StyledTableCell align="center">SẢN PHẨM</StyledTableCell>
            <StyledTableCell align="center">GÍA</StyledTableCell>
            <StyledTableCell align="center">SỐ LƯỢNG</StyledTableCell>
            <StyledTableCell align="center">TỔNG CỘNG</StyledTableCell>
            <StyledTableCell align="center"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {renderProductItem()}
          <CartResult  productOrders={productOrders} buy = {props.buy}/>
        </TableBody>
      </Table>
    </>
  );
}

export default Carts;
