import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import {Link} from 'react-router-dom'
import DeleteIcon from '@material-ui/icons/Delete';
const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  },

}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  }
}))(TableRow);
const useStyles = makeStyles(theme => ({
  detail: {  "&:hover": { color: "#f75f00", cursor: "pointer" } },
  icon:{
    color: '#512C62',
    "&:hover":{
      color: '#f75f00',
      cursor: 'pointer'

    }
  }
}));

function ProductItem() {
  const classes = useStyles();
  return (
    <StyledTableRow>
      <StyledTableCell component="th" scope="row">
        SP112{" "}
      </StyledTableCell>
      <StyledTableCell align="center">Giày scandel AC</StyledTableCell>
      <StyledTableCell align="center"> Giày nữ > Giày cao got</StyledTableCell>
      <StyledTableCell align="center">100</StyledTableCell>
      <StyledTableCell align="center" className = {classes.detail}> <Link to = "/admin/productDetail" className = {classes.icon}>Chi tiết</Link></StyledTableCell>
      <StyledTableCell align="center" className={classes.icon}><DeleteIcon ></DeleteIcon></StyledTableCell>
    </StyledTableRow>
  );
}
export default ProductItem;
