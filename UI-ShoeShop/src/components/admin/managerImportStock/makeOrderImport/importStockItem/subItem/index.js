import React , {useState} from "react";
import { Grid } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

function InputItem(props) {

    const onRemove = ()=>{
        props.onRemove(props.index);
    }

    const [content, setContent] = useState(props.input);

    const onChange = (e)=>{
      props.reciveContentInput(props.index, e.target.value);
      setContent(e.target.value);

    }
  return (
    <Grid item>
      <input  value = {content} onChange= {(e)=>onChange(e)} on/>
      <DeleteIcon onClick = {onRemove}></DeleteIcon>
    </Grid> 
  );
}
export default InputItem;
