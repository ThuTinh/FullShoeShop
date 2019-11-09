import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import ProductItem from "./productItem";
import { Button } from "@material-ui/core";
function ProductDetail() {
  return (
    <div>
      <div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button
           className = "outline-button"
          >
            Lưu
          </button>
          <button
           className = "outline-button"
          >
            Sửa
          </button>
        </div>
        <h6>THÔNG TIN CHI TIẾT</h6>
        <div
          style={{
            width: "10%",
            height: "4px",
            backgroundColor: "#F75F00",
            marginBottom: "30px"
          }}
        ></div>
        <div
          style={{ display: "flex", marginTop: "60px", marginBottom: "50px" }}
        >
          <div style={{ marginRight: "20px" }}>
            <label style={{ marginRight: "20px" }}> Loại cha: </label>
            <label></label>
          </div>
          <div>
            <label style={{ marginRight: "20px" }}>Loại Con: </label>
            <select style={{ width: "200px", height: "40px" }}>
              <option>Con1</option>
              <option>COn4</option>
              <option>Con3</option>
              <option>Con2</option>
            </select>
          </div>
        </div>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Loại</TableCell>
              <TableCell>Tên sản phẩm</TableCell>
              <TableCell align="center">Màu sắc</TableCell>
              <TableCell align="center">Size</TableCell>
              <TableCell align="center">Sl tồn kho</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <ProductItem></ProductItem>
          </TableBody>
        </Table>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginRight: "50px",
            marginTop: "20px",
            width: "100%"
          }}
        >
          <div>
            {" "}
            <h5>Tổng tồn kho: 10000</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductDetail;
