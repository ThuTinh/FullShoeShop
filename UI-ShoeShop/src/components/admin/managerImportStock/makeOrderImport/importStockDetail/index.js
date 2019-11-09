import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import RowProduct from "../rowProduct";

function ImportStockDetail() {
  return (
    <div>
      <Table aria-label="simple table">
        <TableHead style={{ backgroundColor: "#F5F5F5" }}>
          <TableRow>
            <TableCell >Tên sản phẩm</TableCell>
            <TableCell align="center">
              Màu sắc
            </TableCell>
            <TableCell align="center">
              Size
            </TableCell>
            <TableCell  align="center">
              Giá
            </TableCell>
            <TableCell  align="center">
              Số lượng
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <RowProduct></RowProduct>
          <RowProduct></RowProduct>
          <RowProduct></RowProduct>
          <TableRow>
            <TableCell
              colSpan={5}
              style={{ textAlign: "end", fontSize: "25px", color: "#2a1a5e" }}
            >
              Tổng cộng: 1000000000
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
export default ImportStockDetail;
