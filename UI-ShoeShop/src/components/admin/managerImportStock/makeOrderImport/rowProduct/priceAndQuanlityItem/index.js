import React, { useState } from "react";
import TableCell from "@material-ui/core/TableCell";
import { Input } from "@material-ui/core";
function PriceAndQualityItem(props) {
  console.log("kkakaka",  props.detail);
  const [content, setContent] = useState({
    price:  props.detail?props.detail.price:0,
    inventory: props.detail?props.detail.inventory:0
  });

  const onChange = e => {
    setContent({
      ...content,
      [e.target.name]: e.target.value
    });
    console.log("content", content)
    
  };

const leave =()=>{
  props.onRecive(props.index,props.indexColor,props.indexSize, content);
}

  return (
    <>
      <TableCell align="center">
       
        <Input
        type="number"
          value={content.price}
          style={{ width: "150px" }}
          name="price"
          onChange={e => onChange(e)}
          onBlur = {leave}
        />
      </TableCell>
      <TableCell align="center">
 
        <Input
        onMouseMove={leave}
         type="number"
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
