import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { Link } from "react-router-dom";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import VisibilityIcon from "@material-ui/icons/Visibility";
import "./style.css";

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
const useStyles = makeStyles(theme => ({
  icon: {
    color: "#512C62",
    marginRight: "5px",
    "&:hover": {
      color: "#f75f00",
      cursor: "pointer"
    }
  }
}));

function OrderStockItem() {
  const classes = useStyles();
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
      <StyledTableCell align="center">Duyệt</StyledTableCell>
      <StyledTableCell align="center">
        <Link to="/admin/orderStockDetail" className={classes.icon}>
          <VisibilityIcon></VisibilityIcon>
        </Link>{" "}
        <DeleteIcon className={classes.icon}></DeleteIcon>{" "}
        <EditIcon className={classes.icon}></EditIcon>
      </StyledTableCell>
    </StyledTableRow>
  );
}
export default OrderStockItem;
