import React from "react";
import { withStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  }
}))(TableRow);


function EmployeeItem() {

  return (
    <StyledTableRow>
      <StyledTableCell component="th" scope="row">1122435123 </StyledTableCell>
      <StyledTableCell align="center">Nguyễn Văn B</StyledTableCell>
      <StyledTableCell align="center">Thủ đức</StyledTableCell>
      <StyledTableCell align="center">0981853641</StyledTableCell>
      <StyledTableCell align="center">chi tiết</StyledTableCell>
      <StyledTableCell align="center">Chưa có quyền</StyledTableCell>     
      <StyledTableCell align="center">Đang hoạt động</StyledTableCell>
    </StyledTableRow>
  );
}
export default EmployeeItem;
