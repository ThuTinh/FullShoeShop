import React, { useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { connect } from "react-redux";
import { atcGetSuplierRequest } from "../../../../actions";
import SuplierItem from "../suplierItem";

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
  }
}));

function ListSuplier(props) {
  const classes = useStyles();
  const supliers = props.supliers;
  const renderSuplierItem = () => {
    var result = "";
    if (supliers && supliers.length > 0) {
      result = supliers.map((suplier, index) => {
        return (
          <SuplierItem
            key={index}
            suplier={suplier}
            index={index}
          ></SuplierItem>
        );
      });
    }
    return result;
  };

  useEffect(() => {
    props.getSupliers();
  }, []);
  return (
    <Paper className={classes.root}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">STT</StyledTableCell>
            <StyledTableCell align="center">Tên nhà cung cấp</StyledTableCell>
            <StyledTableCell align="center">Địa chỉ</StyledTableCell>
            <StyledTableCell align="center">SDT</StyledTableCell>
            <StyledTableCell align="center">email</StyledTableCell>
            <StyledTableCell align="center">Sản phẩm</StyledTableCell>
            <StyledTableCell align="center"> Xóa</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>{renderSuplierItem()}</TableBody>
      </Table>
    </Paper>
  );
}

const stateMapToProps = state => {
  return {
    supliers: state.supliers
  };
};

const dispatchMapToProps = (dispatch, state) => {
  return {
    getSupliers: () => {
      dispatch(atcGetSuplierRequest());
    }
  };
};

export default connect(
  stateMapToProps,
  dispatchMapToProps
)(ListSuplier);
