import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import ProducDetailtItem from './productDetailItem'

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: "#43ab92",
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #Fff",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  },
  input: {
    marginLeft: "50px",
    width: "300px",
    height: "30px"
  }
}));

function ManagerProductDetail() {
  const classes = useStyles();

  return (
    <>
      <Paper className={classes.root}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Mã sản phẩm</StyledTableCell>
              <StyledTableCell align="center">Tên sản phẩm</StyledTableCell>
              <StyledTableCell align="center"> Loại sản phẩm</StyledTableCell>
              <StyledTableCell align="center">Số lượng tồn kho</StyledTableCell>
              <StyledTableCell align="center">
                Chi tiết 
              </StyledTableCell>
              <StyledTableCell align="center">Trạng Thái</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
              <ProducDetailtItem></ProducDetailtItem>
              <ProducDetailtItem></ProducDetailtItem>
              <ProducDetailtItem></ProducDetailtItem>
          </TableBody>
        </Table>
      </Paper>
    </>
  );
}
export default ManagerProductDetail;
