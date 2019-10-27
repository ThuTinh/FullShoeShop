import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { Input } from "@material-ui/core";

function ProductItem() {
  return (
    <>
      <TableRow>
        <TableCell rowSpan={4}>Giày nữ> giày cao got</TableCell>
        <TableCell rowSpan={4}>SP A</TableCell>
        <TableCell align="center" rowSpan={2}>
          Màu Hổng
        </TableCell>
        <TableCell align="center">39</TableCell>
        <TableCell align="center">100.000</TableCell>
        <TableCell align="center">100</TableCell>
        <TableCell align="center">200</TableCell>
        <TableCell align="center">100</TableCell>
        <TableCell align="center">
          {" "}
          <select>
            <option>Ẩn</option>
            <option>Hiện</option>
          </select>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell align="center">40</TableCell>
        <TableCell align="center">100.000</TableCell>
        <TableCell align="center">200</TableCell>
        <TableCell align="center">300</TableCell>
        <TableCell align="center">100</TableCell>
        <TableCell align="center">
          {" "}
          <select>
            <option>Ẩn</option>
            <option>Hiện</option>
          </select>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell align="center" rowSpan={2}>
          Màu đỏ
        </TableCell>
        <TableCell align="center">39</TableCell>
        <TableCell align="center">100.000</TableCell>
        <TableCell align="center">50</TableCell>
        <TableCell align="center">100</TableCell>
        <TableCell align="center">50</TableCell>

        <TableCell align="center">
          {" "}
          <select>
            <option>Ẩn</option>
            <option>Hiện</option>
          </select>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell align="center">40</TableCell>
        <TableCell align="center">100.000</TableCell>
        <TableCell align="center">10</TableCell>
        <TableCell align="center">50</TableCell>
        <TableCell align="center">40</TableCell>
        <TableCell align="center">
          <select>
            <option>Ẩn</option>
            <option>Hiện</option>
          </select>
        </TableCell>
      </TableRow>
    </>
  );
}
export default ProductItem;
