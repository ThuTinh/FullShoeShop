import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { Link } from "react-router-dom";

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
    },
    width: "100%"
  }
}))(TableRow);

const useStyles = makeStyles(theme => ({
  detail: {
    "&:hover": {
      cursor: "pointer",
      color: "red"
    }
  }
}));

function OrderItem() {
  const classes = useStyles();
  return (
    <StyledTableRow>
      <StyledTableCell component="th" scope="row">
        1122435{" "}
      </StyledTableCell>
      <StyledTableCell align="center">Ngọc</StyledTableCell>
      <StyledTableCell align="center">Thủ đức TPHCM</StyledTableCell>
      <StyledTableCell align="center">0981853641</StyledTableCell>
      <StyledTableCell align="center">12:00 15/10/2019</StyledTableCell>
      <StyledTableCell align="center" className={classes.detail}>
        {/* <Link to="/admin/orderDetail">Chi tiết</Link> */}
        <Link to="/admin/orderDetail">Chi tiết</Link>
      </StyledTableCell>
      <StyledTableCell align="center">Duyệt</StyledTableCell>
    </StyledTableRow>
  );
}
export default OrderItem;
