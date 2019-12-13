import React, { useState, useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import OrderItem from "../orderItem";
import { Box } from "@material-ui/core";
import SearchBar from "material-ui-search-bar";
import { atcGetListOrderRequest,atcDeleteOrder } from "../../../../actions";
import { connect } from "react-redux";
import { ReactMUIDatatable } from "react-material-ui-datatable";
import { IconButton } from "@material-ui/core";
import VisibilityIcon from "@material-ui/icons/Visibility";
import DeleteIcon from "@material-ui/icons/Delete";
import { Link } from "react-router-dom";

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

function ListOrder(props) {
  const classes = useStyles();
  const [orders, setOrders] = useState(props.orders);

  useEffect(() => {
    setOrders([...props.orders]);
  }, [props.orders]);

  useEffect(() => {
    props.getOrders();
  }, []);

  const renderOrderItem = () => {
    var result = [];
    console.log("oo", orders);
    if (orders && orders.length > 0) {
      result = orders.map((order, index) => {
        if (order.products.length > 0)
          return (
            <OrderItem
              key={index}
              order={order}
              index={index}
              status={props.status}
            />
          );
      });
    }
    return result;
  };

  const columns = [
    {
      name: "name",
      label: "Tên khách hàng"
    },
    {
      name: "shipAddress",
      label: "Địa chỉ"
    },
    {
      name: "updatedAt",
      label: "Thời gian"
    },
    {
      name: "status",
      label: "Trạng thái"
    }
  ];
  const RenderDataTable = () => {
    console.log("order-detail", orders);
    let data = [];
    if (orders && orders.length > 0) {
      data = orders.filter(
        order => props.status == order.status || props.status == "ALL"
      );
    }
    return (
      <ReactMUIDatatable
        data={data}
        columns={columns}
        rowActions={({ row, rowIndex }) => (
          <React.Fragment>
            <IconButton
              onClick={() => {
                console.log("Xóa nè 2", row);
              }}
            >
              <Link
                to={{
                  pathname: `/admin/order-detail/${row._id}`
                }}
                style={{ color: "#6c6c6c" }}
              >
                <VisibilityIcon />
              </Link>
            </IconButton>
            <IconButton
              onClick={() => {
                props.deleteOrder(row._id);
              }}
            >
              <DeleteIcon />
            </IconButton>
          </React.Fragment>
        )}
      />
    );
  };
  return (
    <div>
      {/* <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "flex-end"
        }}
      >
        <div style={{ width: "400px" }}>
          <SearchBar
            hintText="Tìm kiếm đơn hàng"
            onChange={() => console.log("onChange")}
            onRequestSearch={() => console.log("onRequestSearch")}
            style={{
              margin: "0 auto",
              maxWidth: 400
            }}
          />
        </div>
      </div>

      <Box pt={3}>
        <h5>{orders.length} đơn hàng</h5>
      </Box>
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
        <TableBody>{renderOrderItem()}</TableBody>
      </Table> */}
      <RenderDataTable/>
    </div>
  );
}
const stateMapToProps = (state, props) => {
  return {
    orders: state.orders
  };
};
const dispatchMapToProps = (dispatch, props) => {
  return {
    getOrders: () => {
      dispatch(atcGetListOrderRequest());
    },
    deleteOrder: id => {
      dispatch(atcDeleteOrder(id));
    }
  };
};
export default connect(stateMapToProps, dispatchMapToProps)(ListOrder);
