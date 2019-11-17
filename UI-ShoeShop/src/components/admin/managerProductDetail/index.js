import React, { useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import ProducDetailtItem from "./productDetailItem";
import { atcGetProductsRequest } from "../../../actions";
import { connect } from "react-redux";
import SearchBar from "material-ui-search-bar";


const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: "#F5F5F5",
    color: theme.palette.common.black
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

function ManagerProductDetail(props) {
  const classes = useStyles();

  useEffect(() => {
    props.getProducts();
  }, []);

  const renderProductItem = () => {
    var result = "";
    if (props.products && props.products.length > 0) {
      result = props.products.map((product, index) => {
        return (
          <ProducDetailtItem
            key={index}
            product={product}
            index={index}
          ></ProducDetailtItem>
        );
      });
    }
    return result;
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "flex-start",
          marginBottom:'20px'
        }}
      >
        <div style={{ width: "400px" }}>
          <SearchBar
            hintText="Tìm kiếm sản phẩm"
            onChange={() => console.log("onChange")}
            onRequestSearch={() => console.log("onRequestSearch")}
            style={{
              margin: "0 auto",
              maxWidth: 400
            }}
          />
        </div>
      </div>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Mã sản phẩm</StyledTableCell>
            <StyledTableCell align="center">Tên sản phẩm</StyledTableCell>
            <StyledTableCell align="center"> Loại sản phẩm</StyledTableCell>
            <StyledTableCell align="center">Số lượng tồn kho</StyledTableCell>
            <StyledTableCell align="center">Chi tiết</StyledTableCell>
            <StyledTableCell align="center">Trạng Thái</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>{renderProductItem()}</TableBody>
      </Table>
    </>
  );
}

const stateMapToProps = (state, props) => {
  return {
    products: state.products
  };
};
const dispatchMapToProps = (dispatch, props) => {
  return {
    getProducts: () => {
      dispatch(atcGetProductsRequest());
    }
  };
};
export default connect(
  stateMapToProps,
  dispatchMapToProps
)(ManagerProductDetail);
