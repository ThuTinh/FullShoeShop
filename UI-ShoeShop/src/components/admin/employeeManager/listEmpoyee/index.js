import React, { useEffect, useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { connect } from "react-redux";
import EmployeeItem from "../employeeItem";
import {
  actGetCustomerRequest,
  atcSearchUserRequets
} from "../../../../actions";
import SearchBar from "material-ui-search-bar";

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: "#f5f5f5",
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

function ListEmployee(props) {
  const classes = useStyles();
  const [filter, setFilter] = useState("");

  const employees = props.employees;
  const search = () => {
    props.search(filter);
  };

  const clearSearch = () => {
    props.getCustomers();
    setFilter("");
  };
  useEffect(() => {
    props.getCustomers();
  }, []);
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
            hintText="Tìm kiếm nhân viên"
            onChange={text => setFilter(text)}
            onRequestSearch={search}
            style={{
              margin: "0 auto",
              maxWidth: 400
            }}
            value={filter}
          />
        </div>
      </div>
      <div>
        <button className="outline-button" onClick={clearSearch}>
          Hủy
        </button>
      </div>
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
        <TableBody>{rendeEmployeeItem(employees)}</TableBody>
      </Table>
    </>
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
    },
    search: filter => {
      dispatch(atcSearchUserRequets(filter));
    }
  };
};

export default connect(stateMapToProps, dispatchMapToProps)(ListEmployee);
