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
    }
  }
}))(TableRow);
const useStyles = makeStyles(theme => ({
  detail: { "&:hover": { color: "#f75f00", cursor: "pointer" } }
}));

function ProducDetailtItem(props) {
  const classes = useStyles();
  return (
    <StyledTableRow>
      <StyledTableCell component="th" scope="row">
        {props.index + 1}
      </StyledTableCell>
      <StyledTableCell align="center">{props.product.name}</StyledTableCell>
      <StyledTableCell align="center"> Giày nữ > Giày cao got</StyledTableCell>
      <StyledTableCell align="center">
        {props.product.inventory}
      </StyledTableCell>
      <StyledTableCell align="center" className={classes.detail}>
        {" "}
        <Link to="/admin/productInforDetail">Chi tiết</Link>
      </StyledTableCell>
      <StyledTableCell align="center">
        {props.product.status ? "Đang hoạt động" : "Ngừng kinh doanh"}
      </StyledTableCell>
    </StyledTableRow>
  );
}
export default ProducDetailtItem;
