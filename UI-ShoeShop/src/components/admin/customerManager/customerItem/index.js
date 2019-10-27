import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import {Redirect, Link} from "react-router-dom";
import DeleteIcon from '@material-ui/icons/Delete';

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
  detail: { color:"#512C62" , "&:hover": { color: "#f75f00", cursor: "pointer" } },
  icon: {
    color:"#512C62" ,
    "&:hover":{
      color: "#f75f00",
      cursor: 'pointer'
    }
  }
}));

function CustomerItem(props) {
  const classes = useStyles();
  const {customer} = props;
  return (
    <StyledTableRow>
      <StyledTableCell component="th" scope="row">
        1122435123{" "}
      </StyledTableCell>
      <StyledTableCell align="center">{customer.name}</StyledTableCell>
      <StyledTableCell align="center">{customer.address}</StyledTableCell>
      <StyledTableCell align="center">{customer.phone}</StyledTableCell>
      <StyledTableCell align="center" className={classes.detail} >
        <Link to = "/admin/customerDetail" className={classes.detail}> chi tiết</Link>
       
      </StyledTableCell>
      <StyledTableCell align="center">
        <select>
          <option>Customer</option>
          <option>Thủ kho</option>
          <option>Shiper</option>
        </select>
      </StyledTableCell>
      <StyledTableCell align="center"><DeleteIcon className = {classes.icon}></DeleteIcon></StyledTableCell>
    </StyledTableRow>
  );
}
const detailCustomer = (id)=>{
  console.log("ahihi");
  return 
}
export default CustomerItem;
