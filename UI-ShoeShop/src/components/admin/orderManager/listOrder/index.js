import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import OrderItem from "../orderItem";

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: "#43ab92",
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

function ListOrder() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Mã đơn hàng</StyledTableCell>
            <StyledTableCell align="center">Tên khách hàng</StyledTableCell>
            <StyledTableCell align="center">Địa chỉ</StyledTableCell>
            <StyledTableCell align="center">SDT</StyledTableCell>
            <StyledTableCell align="center">Thời gian</StyledTableCell>
            <StyledTableCell align="center">Chi tiết đơn hàng</StyledTableCell>
            <StyledTableCell align="center">
              Trạng thái đơn hàng
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <OrderItem></OrderItem>
          <OrderItem></OrderItem>
          <OrderItem></OrderItem>
        </TableBody>
      </Table>
    </Paper>
  );
}
export default ListOrder;
