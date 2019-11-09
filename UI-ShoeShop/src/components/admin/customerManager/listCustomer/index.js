import React, { useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import CustomerItem from "../customerItem";
import { connect } from "react-redux";
import SearchBar from "material-ui-search-bar";

import {
  actGetCustomerRequest,
  atcDeleteCustomerRequest
} from "../../../../actions/index";
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
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  }
}));

function ListCustomer(props) {
  const classes = useStyles();
  const customers = props.customers;
  console.log(props.customers, "2222");

  useEffect(() => {
    props.getCustomers();
  }, []);
  const rendeCustomerItem = customers => {
    var result = "";

    if (customers && customers.length > 0) {
      console.log(customers, "ne");
      result = customers.map((customer, index) => {
        return (
          <CustomerItem
            key={index}
            customer={customer}
            index={index}
            deleteCustomer={props.deleteCustomer}
          ></CustomerItem>
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
            hintText="Tìm kiếm nhà cung cấp"
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
            <StyledTableCell align="center">Tên Khách hàng</StyledTableCell>
            <StyledTableCell align="center">Địa chỉ</StyledTableCell>
            <StyledTableCell align="center">SDT</StyledTableCell>
            <StyledTableCell align="center">Chi tiết</StyledTableCell>
            <StyledTableCell align="center">Edit</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>{rendeCustomerItem(customers)}</TableBody>
      </Table>
      </>
  );
}

const stateMapToProps = state => {
  return {
    customers: state.customers
  };
};

const dispatchMapToProps = (dispatch, state) => {
  return {
    getCustomers: () => {
      dispatch(actGetCustomerRequest());
    },
    deleteCustomer: id => {
      dispatch(atcDeleteCustomerRequest(id));
    }
  };
};
export default connect(
  stateMapToProps,
  dispatchMapToProps
)(ListCustomer);
