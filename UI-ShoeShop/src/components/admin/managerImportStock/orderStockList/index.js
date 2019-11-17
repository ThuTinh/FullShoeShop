import React, { useState, useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import OrderStockItem from "../orderStockItem";
import SearchBar from "material-ui-search-bar";
import { connect } from "react-redux";
import {
  atcGetOrderSuplierRequest,
  atcGetDetailOrderSuplier,
  atcDeleteOrderSuplier
} from "../../../../actions/";

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

function OrderStockList(props) {
  const classes = useStyles();
  const [filter, setFilter] =useState("");

  useEffect(() => {
    props.getOrdersSuplier("An");
  }, []);

  useEffect(() => {
    console.log("ordersSuplier ne", props.ordersSuplier);
  }, [props.ordersSuplier]);

  const renderOrderStockItem = () => {
    var result = "";
    var orders = props.ordersSuplier;
    if (orders && orders.length > 0) {
      result = orders.map((order, index) => {
        return (
          <OrderStockItem
            order={order}
            index={index}
            key={index}
            getDetailOrderSuplier={props.getDetailOrderSuplier}
            deleteOrderSuplier={props.deleteOrderSuplier}
            status = {props.status}
          />
        );
      });
    }
    return result;
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "flex-start",
          marginBottom: "20px"
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
            <StyledTableCell>STT</StyledTableCell>
            <StyledTableCell align="center">Nhà cung cấp</StyledTableCell>
            <StyledTableCell align="center">Số điện thoại</StyledTableCell>
            <StyledTableCell align="center">Tổng giá trị</StyledTableCell>
            <StyledTableCell align="center">Người tạo</StyledTableCell>
            <StyledTableCell align="center">
              Trạng thái đơn hàng
            </StyledTableCell>
            <StyledTableCell align="center">Chi tiết đơn hàng</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>{renderOrderStockItem()}</TableBody>
      </Table>
    </>
  );
}

const stateMapToProps = (state, props) => {
  return {
    ordersSuplier: state.ordersSuplier
  };
};

const dispatchMapToProps = (dispatch, props) => {
  return {
    getOrdersSuplier: (filter) => {
      dispatch(atcGetOrderSuplierRequest(filter));
    },
    getDetailOrderSuplier: order => {
      dispatch(atcGetDetailOrderSuplier(order));
    },
    deleteOrderSuplier: id => {
      dispatch(atcDeleteOrderSuplier(id));
    }
  };
};
export default connect(stateMapToProps, dispatchMapToProps)(OrderStockList);
