import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import ProductItem from "./rowProductItem";

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

function ListProduct() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Mã sản phẩm</StyledTableCell>
            <StyledTableCell align="center">Tên sản phẩm</StyledTableCell>
            <StyledTableCell align="center">Phân loại</StyledTableCell>
            <StyledTableCell align="center">Giá</StyledTableCell>
            <StyledTableCell align="center">Phân loại hàng</StyledTableCell>
            <StyledTableCell align="center">Kho hàng</StyledTableCell>
            <StyledTableCell align="center">Sửa thông tin</StyledTableCell>
            <StyledTableCell align="center">Xóa</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <ProductItem></ProductItem>
          <ProductItem></ProductItem>
          <ProductItem></ProductItem>
        </TableBody>
      </Table>
    </Paper>
  );
}
export default ListProduct;
