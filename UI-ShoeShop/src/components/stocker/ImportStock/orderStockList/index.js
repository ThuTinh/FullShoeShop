import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import OrderStockItem from '../orderStockItem'


const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
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
    <Paper className={classes.root}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Mã nhập hàng</StyledTableCell>
            <StyledTableCell align="center">Nhà cung cấp</StyledTableCell>
            <StyledTableCell align="center">Địa chỉ</StyledTableCell>
            <StyledTableCell align="center">Số điện thoại</StyledTableCell>
            <StyledTableCell align="center">Thời gian tạo</StyledTableCell>
            <StyledTableCell align="center">Tổng giá trị</StyledTableCell>
            <StyledTableCell align="center">
              Chi tiết đơn hàng
            </StyledTableCell>
            <StyledTableCell align="center">
              Trạng thái đơn hàng
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <OrderStockItem></OrderStockItem>
          <OrderStockItem></OrderStockItem>
          <OrderStockItem></OrderStockItem>
        </TableBody>
      </Table>
    </Paper>
  );
}
export default OrderStockList;
