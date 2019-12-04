import React, { useState, useEffect } from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import callApi from "../../../../../utils/apiCaller";

function ProductItem(props) {
  var prices = [];
  const [arrPrice, setArrPrince] = useState([]);
  useEffect(() => {
    if (props.isSave) {
      // prices.map(async (price, index) => {
      //   let reponse = await callApi(
      //     `products/update-price-detail/${props.product._id}`,
      //     "PUT",
      //     price
      //   );
      //   console.log("12345", reponse);
      // });

      console.log("alalal", props.prices);
    }
  }, [props.isSave]);

  let sColor = new Set();

  let sizes = [];
  console.log("aaqqqqqqqq", props.prices[2]);

  if (props.product.detail && props.product.detail.length > 0) {
    props.product.detail.map((item, index) => {
      sColor.add(item.color);
    });
  }
  let colors = Array.from(sColor);
  for (let j = 0; j < colors.length; j++) {
    let tempsizes = [];
    for (let i = 0; i < props.product.detail.length; i++) {
      if (colors[j] == props.product.detail[i].color) {
        tempsizes.push(props.product.detail[i].size);
      }
    }
    sizes.push(tempsizes);
  }

  const addPrice = (id, index, e) => {
    props.prices[index] = e.target.value;
    console.log("lalala", props.prices);
    props.recive(props.prices);
  };

  const renderRow = () => {
    let span = 0;
    let result = [];
    for (let i = 0; i < sizes.length; i++) {
      span += sizes[i].length;
    }
    let index = 0;
    for (let k = 0; k < colors.length; k++) {
      for (let m = 0; m < sizes[k].length; m++) {
        console.log("sizes", sizes);
        console.log("sizesd", sizes[k][m]);
        if (k == 0 && m == 0) {
          let id = props.product.detail[index]._id;
          let ind = index;
          let item = (
            <TableRow>
              <TableCell rowSpan={span}>{props.product.name}</TableCell>
              <TableCell align="center" rowSpan={sizes[k].length}>
                {colors[k]}
              </TableCell>
              <TableCell align="center">{sizes[k][m]}</TableCell>
              <TableCell align="center">
                <input
                  placeholder="Nhập giá"
                  onChange={e => addPrice(id, ind, e)}
                  placeholder={props.product.detail[index].price}
                  disabled={props.disable}
                />
              </TableCell>
              <TableCell align="center">
                {props.product.detail[index].inventory}
              </TableCell>
              <TableCell align="center">
                {props.product.detail[index].amountSold}
              </TableCell>
            </TableRow>
          );
          result.push(item);
          ++index;
        } else {
          if ((k != 0) & (m == 0)) {
            let id = props.product.detail[index]._id;
            let ind = index;

            let item = (
              <TableRow>
                <TableCell align="center" rowSpan={sizes[k].length}>
                  {colors[k]}
                </TableCell>
                <TableCell align="center">{sizes[k][m]}</TableCell>
                <TableCell align="center">
                  <input
                    key={new Date() + index}
                    onChange={e => addPrice(id, ind, e)}
                    placeholder={props.product.detail[index].price}
                    disabled={props.disable}
                  />
                </TableCell>
                <TableCell align="center">
                  {props.product.detail[index].inventory}
                </TableCell>
                <TableCell align="center">
                  {props.product.detail[index].amountSold}
                </TableCell>
              </TableRow>
            );
            result.push(item);
            ++index;
          } else {
            let id = props.product.detail[index]._id;
            let ind = index;

            let item = (
              <TableRow>
                <TableCell align="center">{sizes[k][m]}</TableCell>
                <TableCell align="center">
                  <input
                    key={new Date() + index}
                    onChange={e => addPrice(id, ind, e)}
                    placeholder={props.product.detail[index].price}
                    disabled={props.disable}
                  />
                </TableCell>
                <TableCell align="center">
                  {props.product.detail[index].inventory}
                </TableCell>
                <TableCell align="center">
                  {props.product.detail[index].amountSold}
                </TableCell>
              </TableRow>
            );
            result.push(item);
            ++index;
          }
        }
      }
    }

    // const colors = Array.from(sColor);
    // const sizes = Array.from(sSize);
    // let result = [];

    // for (var i = 0; i < colors.length; i++) {
    //   for (var j = 0; j < sizes.length; j++) {
    //     if (i == 0 && j == 0) {
    //       let index = 0;
    //       for (let k = 0; k < props.product.detail.length; k++) {
    //         if (
    //           colors[0] == props.product.detail[k].color &&
    //           sizes[0] == props.product.detail[0].size
    //         ) {
    //           index = k;
    //           break;
    //         }
    //       }
    //       console.log("index", index);
    //       let item = (
    //         <TableRow>
    //           <TableCell rowSpan={span}>{props.product.name}</TableCell>
    //           <TableCell align="center" rowSpan={sizes.length}>
    //             {colors[i]}
    //           </TableCell>
    //           <TableCell align="center">{sizes[j]}</TableCell>
    //           <TableCell align="center">
    //             {props.product.detail[index].price}
    //           </TableCell>
    //           <TableCell align="center">
    //             {props.product.detail[index].inventory}
    //           </TableCell>
    //           <TableCell align="center">
    //             {props.product.detail[index].amountSold}
    //           </TableCell>
    //         </TableRow>
    //       );
    //       result.push(item);
    //     } else {
    //       if (j == 0) {
    //         let item = (
    //           <TableRow>
    //             <TableCell align="center" rowSpan={sizes.length}>
    //               {colors[i]}
    //             </TableCell>
    //             <TableCell align="center">{sizes[j]}</TableCell>
    //             <TableCell align="center">100.000</TableCell>
    //             <TableCell align="center">50</TableCell>
    //             <TableCell align="center">50</TableCell>
    //           </TableRow>
    //         );
    //         result.push(item);
    //       } else {
    //         let item = (
    //           <TableRow>
    //             <TableCell align="center">{sizes[j]}</TableCell>
    //             <TableCell align="center">100.000</TableCell>
    //             <TableCell align="center">10</TableCell>
    //             <TableCell align="center">40</TableCell>
    //           </TableRow>
    //         );
    //         result.push(item);
    //       }
    //     }
    //   }
    // }
    return result;
  };
  return (
    <>
      {/* <TableRow>
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
      </TableRow>
      <TableRow>
        <TableCell align="center">40</TableCell>
        <TableCell align="center">100.000</TableCell>
        <TableCell align="center">200</TableCell>
        <TableCell align="center">300</TableCell>
        <TableCell align="center">100</TableCell>
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
      </TableRow>
      <TableRow>
        <TableCell align="center">40</TableCell>
        <TableCell align="center">100.000</TableCell>
        <TableCell align="center">10</TableCell>
        <TableCell align="center">50</TableCell>
        <TableCell align="center">40</TableCell>
      </TableRow> */}
      {renderRow()}
    </>
  );
}
export default ProductItem;
