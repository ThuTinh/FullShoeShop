import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
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

function ProductItem() {
  const classes = useStyles();
  return (
    <>
      <StyledTableRow>
        <StyledTableCell component="th" scope="row" rowSpan={4}>
          MaSP1122
        </StyledTableCell>
        <StyledTableCell align="center" rowSpan={4}>
          Giày cao got MTT
        </StyledTableCell>
        <StyledTableCell align="center" rowSpan={4}>
          Giày nữ>Giày cao got
        </StyledTableCell>
        <StyledTableCell align="center">100000</StyledTableCell>
        <StyledTableCell align="center">mau đỏ ,37</StyledTableCell>
        <StyledTableCell align="center" className={classes.detail}>
          100
        </StyledTableCell>
        <StyledTableCell align="center" className={classes.detail}>
          Sửa thông tin
        </StyledTableCell>
        <StyledTableCell align="center" className={classes.detail}>
          Xóa
        </StyledTableCell>
      </StyledTableRow>
      <StyledTableRow>
        <StyledTableCell align="center">100000</StyledTableCell>
        <StyledTableCell align="center">mau do, 39</StyledTableCell>
        <StyledTableCell align="center" className={classes.detail}>
          100
        </StyledTableCell>
        <StyledTableCell align="center" className={classes.detail}>
          Sửa thông tin
        </StyledTableCell>
        <StyledTableCell align="center" className={classes.detail}>
          Xóa
        </StyledTableCell>
      </StyledTableRow>
      <StyledTableRow>
        <StyledTableCell align="center">100000</StyledTableCell>
        <StyledTableCell align="center">mau xanh, 37</StyledTableCell>
        <StyledTableCell align="center" className={classes.detail}>
          100
        </StyledTableCell>
        <StyledTableCell align="center" className={classes.detail}>
          Sửa thông tin
        </StyledTableCell>
        <StyledTableCell align="center" className={classes.detail}>
          Xóa
        </StyledTableCell>
      </StyledTableRow>
      <StyledTableRow>
        <StyledTableCell align="center">100000</StyledTableCell>
        <StyledTableCell align="center">mau xanh,39</StyledTableCell>
        <StyledTableCell align="center" className={classes.detail}>
          100
        </StyledTableCell>
        <StyledTableCell align="center" className={classes.detail}>
          Sửa thông tin
        </StyledTableCell>
        <StyledTableCell align="center" className={classes.detail}>
          Xóa
        </StyledTableCell>
        
      </StyledTableRow>
    </>
  );
}
export default ProductItem;
