import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import OrderStockItem from '../orderStockItem'
import SearchBar from "material-ui-search-bar";



const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: "#F5F5F5",
    color: theme.palette.common.black
  },
  body: {
    fontSize: 14
  }
}))(TableCell);


const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  }
}));

function OrderStockList() {
  const classes = useStyles();

  return (
    <>
    <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "flex-start",
          marginBottom:'20px'
        }}
      >
        <div style={{ width: "400px" }}>
          <SearchBar
            hintText="Tìm kiếm sản phẩm"
            onChange={() => console.log("onChange")}
            onRequestSearch={() => console.log("onRequestSearch")}
            style={{
              margin: "0 auto",
              maxWidth: 400
            }}
          />
        </div>
      </div>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Mã nhập hàng</StyledTableCell>
            <StyledTableCell align="center">Nhà cung cấp</StyledTableCell>
            <StyledTableCell align="center">Địa chỉ</StyledTableCell>
            <StyledTableCell align="center">Số điện thoại</StyledTableCell>
          
            <StyledTableCell align="center">Tổng giá trị</StyledTableCell>
            <StyledTableCell align="center">
              Trạng thái đơn hàng
            </StyledTableCell>
            <StyledTableCell align="center">
              Chi tiết đơn hàng
            </StyledTableCell>
          
          </TableRow>
        </TableHead>
        <TableBody>
          <OrderStockItem></OrderStockItem>
          <OrderStockItem></OrderStockItem>
          <OrderStockItem></OrderStockItem>
        </TableBody>
      </Table>
      </>
  
  );
}
export default OrderStockList;
