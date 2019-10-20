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

function OrderStockItem() {
  return (
    <StyledTableRow>
      <StyledTableCell component="th" scope="row">
        Ma don hang{" "}
      </StyledTableCell>
      <StyledTableCell align="center">Công ty TNHH </StyledTableCell>
      <StyledTableCell align="center">Thủ đức TPHCM</StyledTableCell>
      <StyledTableCell align="center">0981853641</StyledTableCell>
      <StyledTableCell align="center">12:00 15/10/2019</StyledTableCell>
      <StyledTableCell align="center">1000.000</StyledTableCell>
      <StyledTableCell align="center">Chi tiết</StyledTableCell>
      <StyledTableCell align="center">Duyệt</StyledTableCell>
    </StyledTableRow>
  );
}
export default OrderStockItem;
