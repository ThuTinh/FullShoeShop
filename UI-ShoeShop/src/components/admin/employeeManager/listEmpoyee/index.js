import React , {useEffect}from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import {connect} from 'react-redux';
import EmployeeItem from '../employeeItem';
import { actGetCustomerRequest} from '../../../../actions'

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

function ListEmployee(props) {
  const classes = useStyles();
  const employees = props.employees
  useEffect(()=>{
    props.getCustomers();
  },[])
  return (
    <Paper className={classes.root}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Mã nhân viên</StyledTableCell>
            <StyledTableCell align="center">Tên nhân viên</StyledTableCell>
            <StyledTableCell align="center">Địa chỉ</StyledTableCell>
            <StyledTableCell align="center">SDT</StyledTableCell>
            <StyledTableCell align="center">Chi tiết việc làm</StyledTableCell>
            <StyledTableCell align="center">Quyền</StyledTableCell>
            <StyledTableCell align="center">Tình trạng</StyledTableCell>
            <StyledTableCell align="center"> Xóa</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rendeEmployeeItem(employees)}
        </TableBody>
      </Table>
    </Paper>
  );
}

const rendeEmployeeItem = employees => {
  var result = "";

  if (employees && employees.length > 0) {
    result = employees.map((employee, index) => {
      return <EmployeeItem key={index} employee={employee}></EmployeeItem>;
    });
  }
  return result;
};
const stateMapToProps = state => {
  return {
    employees: state.customers
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
)(ListEmployee);