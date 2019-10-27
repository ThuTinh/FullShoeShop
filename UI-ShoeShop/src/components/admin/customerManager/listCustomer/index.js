import React, { useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import CustomerItem from "../customerItem";
import { connect } from "react-redux";
import { actGetCustomerRequest } from "../../../../actions/index";
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

function ListCustomer(props) {
  const classes = useStyles();
  const customers = props.customers;
  console.log(props.customers, "2222");
  useEffect(() => {
    props.getCustomers();
  }, []);
  return (
    <Paper className={classes.root}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Mã khách hàng</StyledTableCell>
            <StyledTableCell align="center">Tên Khách hàng</StyledTableCell>
            <StyledTableCell align="center">Địa chỉ</StyledTableCell>
            <StyledTableCell align="center">SDT</StyledTableCell>
            <StyledTableCell align="center">Chi tiết</StyledTableCell>
            <StyledTableCell align="center">Quyền</StyledTableCell>
            <StyledTableCell align="center">Edit</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>{rendeCustomerItem(customers)}</TableBody>
      </Table>
    </Paper>
  );
}

const rendeCustomerItem = customers => {
  var result = "";

  if (customers && customers.length > 0) {
    console.log(customers, "ne");
    result = customers.map((customer, index) => {
      return <CustomerItem key={index} customer={customer}></CustomerItem>;
    });
  }
  return result;
};
const stateMapToProps = state => {
  return {
    customers: state.customers
  };
};

const dispatchMapToProps = (dispatch, state) => {
  return {
    getCustomers: () => {
      dispatch(actGetCustomerRequest());
    }
  };
};
export default connect(
  stateMapToProps,
  dispatchMapToProps
)(ListCustomer);
