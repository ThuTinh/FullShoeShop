import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import EmployeeItem from "../employeeItem";

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

function ListEmployee() {
  const classes = useStyles();

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
          </TableRow>
        </TableHead>
        <TableBody>
          <EmployeeItem></EmployeeItem>
          <EmployeeItem></EmployeeItem>
          <EmployeeItem></EmployeeItem>
          <EmployeeItem></EmployeeItem>
        </TableBody>
      </Table>
    </Paper>
  );
}
export default ListEmployee;
