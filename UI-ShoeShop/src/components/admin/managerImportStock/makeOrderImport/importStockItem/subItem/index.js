import React from "react";
import { Grid } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
function InputItem(props) {
    const onRemove = ()=>{
        props.onRemove(props.index);
    }
  return (
    <Grid item>
      <input  />
      <DeleteIcon onClick = {onRemove}></DeleteIcon>
    </Grid> 
  );
}
export default InputItem;
