import React, { useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import DeleteIcon from "@material-ui/icons/Delete";
import { createBrowserHistory } from "history";
import { Link } from "react-router-dom";
import "./style.css";

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: "#FAFAFA",
    color: theme.palette.common.black
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
  root: {
    width: "100%",
    marginTop: "20px",
    marginBottom: "80px",
    overflowX: "auto"
  },
  table: {
    minWidth: 700,
    marginTop: "20px"
  }
}));

function Carts() {
  const classes = useStyles();
  const history = createBrowserHistory();
  const buyProducts = id => {
    history.push("/product/purchase");
  };
  const [customer, setCustomer] = useState(true);
  return (
    <>
      <h6>DANH SÁCH SẢN PHẨM</h6>
      <div
        style={{
          width: "10%",
          height: "4px",
          backgroundColor: "#F75F00",
          marginBottom: "30px"
        }}
      ></div>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <StyledTableCell align="center"></StyledTableCell>
            <StyledTableCell align="center">SẢN PHẨM</StyledTableCell>
            <StyledTableCell align="center">GÍA</StyledTableCell>
            <StyledTableCell align="center">SỐ LƯỢNG</StyledTableCell>
            <StyledTableCell align="center">TỔNG CỘNG</StyledTableCell>
            <StyledTableCell align="center"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <StyledTableRow>
            {/* List product */}
            <StyledTableCell component="th" scope="row" align="center">
              <img
                alt=""
                src="http://img.mwc.com.vn/giay-thoi-trang?&w=80&h=80&FileInput=//Upload/2019/10/o1cn01q02zrl2bbuipbvi11-3535558301.jpg"
                className="img-fluid z-depth-0"
              />
            </StyledTableCell>
            <StyledTableCell align="center">DFGH</StyledTableCell>
            <StyledTableCell align="center">AAA</StyledTableCell>
            <StyledTableCell align="center">
              <label>1</label>
              <AddIcon
                className="amount"
                style={{
                  color: "#fff",
                  fontSize: "20px",
                  backgroundColor: "#c93838",
                  marginLeft: "5px",
                  borderBottomLeftRadius: "5px",
                  borderTopLeftRadius: "5px"
                }}
              ></AddIcon>
              <RemoveIcon
                className="amount"
                style={{
                  color: "#fff",
                  fontSize: "20px",
                  backgroundColor: "#c93838",
                  borderBottomRightRadius: "5px",
                  borderTopRightRadius: "5px"
                }}
              ></RemoveIcon>
            </StyledTableCell>
            <StyledTableCell align="center">LLLLLLL</StyledTableCell>
            <StyledTableCell align="center">
              <DeleteIcon></DeleteIcon>
            </StyledTableCell>
          </StyledTableRow>

          <StyledTableRow>
            <StyledTableCell colSpan={3}></StyledTableCell>
            <StyledTableCell
              align="center"
              style={{ fontSize: "20px", fontWeight: "600" }}
            >
              Tổng tiền
            </StyledTableCell>
            <StyledTableCell
              align="center"
              style={{ fontSize: "20px", fontWeight: "600" }}
            >
              100.000
            </StyledTableCell>
            <StyledTableCell align="center">
              {customer && (
                <Button
                  variant="contained"
                  color="primary"
                  style={{ backgroundColor: "#512c62" }}
                >
                  <Link
                    to="/product/purchase"
                    style={{ color: "#fff", textDecoration: "none" }}
                  >
                    Đặt hàng
                  </Link>
                </Button>
              )}
            </StyledTableCell>
          </StyledTableRow>
        </TableBody>
      </Table>
    </>
  );
}

export default Carts;
