import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

function ProductItem(props) {
  const countDetail = props.product.Detail.length;
  var colorCount = new Set();
  var sizeCount = new Set();
  if (props.product.Detail.length && props.product.Detail.length > 0) {
    props.product.Detail.map((detail, index) => {
      colorCount.add(detail.color);
      sizeCount.add(detail.size);
    });
  }

  const renderRow = () => {
    var result = [];
    let item = (
      <TableRow>
        <TableCell rowSpan={countDetail}>Giày nữ> giày cao got</TableCell>
        <TableCell rowSpan={countDetail}>SP A</TableCell>
        <TableCell align="center" rowSpan={sizeCount.size}>
          Màu Hổng
        </TableCell>
        <TableCell align="center">39</TableCell>
        <TableCell align="center">100</TableCell>
      </TableRow>
    );
    result.push(item);
    var i = 0;
    for (i = 0; i < colorCount.size; i++) {
      var j=0;
      for(j=0; j<sizeCount.size;j++){
        if(i==0){
          
        }
      }
      
    }
  };
  return (
    <>
      <TableRow>
        <TableCell rowSpan={countDetail}>Giày nữ> giày cao got</TableCell>
        <TableCell rowSpan={countDetail}>SP A</TableCell>
        <TableCell align="center" rowSpan={sizeCount.size}>
          Màu Hổng
        </TableCell>
        <TableCell align="center">39</TableCell>
        <TableCell align="center">100</TableCell>
      </TableRow>

      <TableRow>
        <TableCell align="center">40</TableCell>
        <TableCell align="center">200</TableCell>
      </TableRow>

      <TableRow>
        <TableCell align="center" rowSpan={2}>
          Màu đỏ
        </TableCell>
        <TableCell align="center">39</TableCell>
        <TableCell align="center">50</TableCell>
      </TableRow>

      <TableRow>
        <TableCell align="center">40</TableCell>
        <TableCell align="center">10</TableCell>
      </TableRow>
    </>
  );
}
export default ProductItem;
