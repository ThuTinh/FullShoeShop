import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { Link } from "react-router-dom";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
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
  detail: { "&:hover": { color: "#f75f00", cursor: "pointer" } },
  icon: {
    color: "#512C62",
    "&:hover": {
      color: "#f75f00",
      cursor: "pointer"
    }
  }
}));

function ProductItem(props) {
  const classes = useStyles();

  const deleteProduct = () => {
    props.deleteProduct(props.product._id);
  };

  const editProduct = ()=>{
    props.editProduct(props.product)
  }
  return (
    <StyledTableRow>
      <StyledTableCell component="th" scope="row">
        {props.index + 1}
      </StyledTableCell>
      <StyledTableCell align="center">{props.product.name}</StyledTableCell>
      <StyledTableCell align="center"> Giày nữ > Giày cao got</StyledTableCell>
      <StyledTableCell align="center">100</StyledTableCell>
      <StyledTableCell align="center" className={classes.detail}>
        {" "}
        <Link to="/admin/productDetail" className={classes.icon}>
          Chi tiết
        </Link>
      </StyledTableCell>
      <StyledTableCell align="center" >
        <DeleteIcon className={classes.icon}
          style={{ marginRight: "10px" }}
          onClick={deleteProduct}
        ></DeleteIcon>{" "}
        <EditIcon  className={classes.icon} onClick={editProduct}></EditIcon>
      </StyledTableCell>
    </StyledTableRow>
  );
}
export default ProductItem;
