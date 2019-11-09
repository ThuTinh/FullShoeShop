import React, { useState } from "react";
import { Grid, makeStyles } from "@material-ui/core";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import DeleteIcon from "@material-ui/icons/Delete";
import InputItem from "./subItem"

const useStyles = makeStyles(them => ({
  deleteIcon: {
    color: "#512C62",
    "&:hover": {
      color: "red",
      cursor: "pointer"
    }
  }
}));

function ImportStockItem(props) {
  const classes = useStyles();

  const [sizes, setSizes] = useState([]);
  const [contentSize, setContentSize] = useState("");
  const [colors, setColors] = useState([]);
  const [contentColor, setContentColor] = useState("");

  const onRemove = () => {
    console.log("remove index ", props.index);
    props.onRemove(props.index);
  };

  const addSize = ()=>{
    let arrSize = sizes;
    let item = "";
    arrSize.push(item);
    setSizes(arrSize);
    renderSizeItem();
  }

  const addColor = ()=>{
    let arrColor = colors;
    let item = "";
    arrColor.push(item);
    setColors(arrColor);
    renderColorItem();
  }

  const renderColorItem = ()=>{
      var result = "";
      if(colors && colors.length>0){
        result = colors.map((color, index)=>{
          return <InputItem color ={color} key = {index} index = {index} onRemove ={onSubColorRemove}/>
        })
      }
      setContentColor(result);
  }
  const renderSizeItem = ()=>{
    var result = "";
    if(sizes && sizes.length>0){
      result = sizes.map((size, index)=>{
        return <InputItem size={size} key = {index} index = {index} onRemove = {onSubSizeRemove}/>
      })
    }
    setContentSize(result);
  }

  const onSubColorRemove = (index)=>{
    let arrColor = colors;
    arrColor.splice(index,1);
    setColors(arrColor);
    renderColorItem();
  }

  const onSubSizeRemove = (index)=>{
    let arrSize = sizes;
    arrSize.splice(index,1);
    setSizes(arrSize);
    renderSizeItem();
  }

  return (
    <div style={{ marginBottom: "100px", marginLeft: "15%" }}>
      <Grid container>
        <Grid
          container
          xs={12}
          md={9}
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Grid item>
            <div style={{ marginBottom: "30px" }}>
              <label
                style={{
                  fontSize: "15px",
                  marginRight: "20px",
                  width: "120px"
                }}
              >
                Tên Sản phẩm:{" "}
              </label>
              <select style={{ width: "200px", height: "40px" }}>
                <option>SP1</option>
                <option>SP 2</option>
                <option>Sp3</option>
                <option>Sp 4</option>
              </select>
            </div>
          </Grid>
          <Grid item>
            <div>
              <HighlightOffIcon
                onClick={onRemove}
                className={classes.deleteIcon}
              ></HighlightOffIcon>
            </div>
          </Grid>
        </Grid>

        <Grid item md={6}>
          <Grid item>
            <h6>MÀU SẮC: </h6>
          </Grid>
          <Grid item>
            <Grid
              container
              spacing={1}
              direction="column"
              alignItems="flex-start"
            >
             {contentColor}
              
              <Grid item alignItems="flex-end">
                <button
                  className="outline-button"
                  style={{
                    fontSize: "11px",
                    marginTop: "10px"
                  }}
                  onClick = {addColor}
                >
                  Thêm màu
                </button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={6}>
          <Grid item>
            <div>
              <h6>SIZE: </h6>
            </div>
          </Grid>
          <Grid item>
            <Grid
              container
              spacing={1}
              direction="column"
              alignItems="flex-start"
              item
            >
             {contentSize}
             
              <Grid>
                <button
                onClick = {addSize}
                  className="outline-button"
                  style={{
                    fontSize: "11px",
                    marginTop: "10px"
                  }}
                >
                  Thêm size
                </button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default ImportStockItem;
