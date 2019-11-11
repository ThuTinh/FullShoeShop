import React, { useState } from "react";
import TableCell from "@material-ui/core/TableCell";
import { Input } from "@material-ui/core";
function PriceAndQualityItem(props) {
  const [content, setContent] = useState({
    price: 0,
    inventory: 0
  });

  const onChange = e => {
    setContent({
      ...content,
      [e.target.name]: e.target.value
    });
    console.log("price", content);
    props.onRecive(props.index, content);
  };

  return (
    <>
      <TableCell align="center">
        {" "}
        <Input
          value={content.price}
          style={{ width: "150px" }}
          name="price"
          onChange={e => onChange(e)}
        />
      </TableCell>
      <TableCell align="center">
        {" "}
        <Input
          value={content.inventory}
          style={{ width: "150px" }}
          name="inventory"
          onChange={e => onChange(e)}
        />
      </TableCell>
    </>
  );
}
export default PriceAndQualityItem;
