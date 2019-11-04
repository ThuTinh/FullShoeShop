import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { Input } from "@material-ui/core";

function RowProduct() {
  return (
    <>
      <TableRow>
        <TableCell rowSpan={4}>SP A</TableCell>
        <TableCell align="center" rowSpan={2}>
          Màu Hổng
        </TableCell>
        <TableCell align="center">39</TableCell>
        <TableCell align="center">
          {" "}
          <Input value="100000000000" style={{ width: "150px" }} />
        </TableCell>
        <TableCell align="center">
          {" "}
          <Input value="10" style={{ width: "150px" }} />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell align="center">40</TableCell>
        <TableCell align="center">
          {" "}
          <Input value="100000000000" style={{ width: "150px" }} />
        </TableCell>
        <TableCell align="center">
          {" "}
          <Input value="100" style={{ width: "150px" }} />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell align="center" rowSpan={2}>
          Màu đỏ
        </TableCell>
        <TableCell align="center">39</TableCell>
        <TableCell align="center">
          <Input value="100000000000" style={{ width: "150px" }} />
        </TableCell>
        <TableCell align="center">
          {" "}
          <Input value="10" style={{ width: "150px" }} />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell align="center">40</TableCell>
        <TableCell align="center">
          {" "}
          <Input value="100000000000" style={{ width: "150px" }} />
        </TableCell>
        <TableCell align="center">
          {" "}
          <Input value="100" style={{ width: "150px" }} />
        </TableCell>
      </TableRow>
    </>
  );
}
export default RowProduct;
