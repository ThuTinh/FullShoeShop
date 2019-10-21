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


function ProductItem() {

  return (
    <StyledTableRow>
      <StyledTableCell component="th" scope="row">SP112 </StyledTableCell>
      <StyledTableCell align="center">Giày scandel AC</StyledTableCell>
      <StyledTableCell align="center">100</StyledTableCell>
      <StyledTableCell align="center">xóa</StyledTableCell>
    </StyledTableRow>
  );
}
export default ProductItem;
