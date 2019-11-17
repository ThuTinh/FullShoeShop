import React from "react";
import { withStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import PriceAndQualityItem from "./priceAndQuanlityItem";

const StyledTableRow = withStyles(theme => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    },
    width: "100%"
  }
}))(TableRow);
function RowProduct(props) {
  const onRecive = (index, content) => {};

  const renderProduct = () => {
    var result = [];
    var rowSpanProductName = props.product.classification
      ? props.product.classification.color.length *
        props.product.classification.size.length
      : 0;
    var rowSpanSize = props.product.classification
      ? props.product.classification.size.length
      : 0;
    var i = 1;
    var color = 0;
    var size = 0;
    var check = 1;
    for (i = 1; i <= rowSpanProductName; i++) {
      console.log("i", i);
      if (i === 1) {
        let item = (
          <StyledTableRow>
            <TableCell rowSpan={rowSpanProductName}>SP A</TableCell>
            <TableCell align="center" rowSpan={rowSpanSize}>
              {props.product.classification.color[0]}
            </TableCell>
            <TableCell align="center">
              {" "}
              {props.product.classification.size[0]}
            </TableCell>
            <PriceAndQualityItem
              key={i}
              index={props.index}
              onRecive={onRecive}
            />
          </StyledTableRow>
        );
        result.push(item);
      } else {
        if (i % rowSpanSize === 1) {
          var item = (
            <StyledTableRow>
              <TableCell align="center" rowSpan={rowSpanSize}>
                {props.product.classification.color[color]}
              </TableCell>
              <TableCell align="center">
                {" "}
                {props.product.classification.size[size]}
              </TableCell>
              <PriceAndQualityItem
                key={i + new Date()}
                index={props.index}
                onRecive={onRecive}
              />
            </StyledTableRow>
          );
          result.push(item);
        } else {
          var item = (
            <StyledTableRow>
              <TableCell align="center">
                {" "}
                {props.product.classification.size[size]}
              </TableCell>
              <PriceAndQualityItem
                key={i + new Date()}
                index={props.index}
                onRecive={onRecive}
              />
            </StyledTableRow>
          );
          result.push(item);
        }
      }

      ++size;
      if (check == props.product.classification.size.length) {
        ++color;
        check = 1;
      } else ++check;

      if (size == props.product.classification.size.length) {
        size = 0;
      }
    }
    console.log("KQ", result);
    return result;
  };

  return <>{renderProduct()}</>;
}
export default RowProduct;
