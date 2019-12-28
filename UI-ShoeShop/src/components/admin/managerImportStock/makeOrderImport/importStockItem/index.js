import React, { useState, useEffect } from "react";
import { Grid, makeStyles } from "@material-ui/core";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import InputItem from "./subItem";
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
  const [sizes, setSizes] = useState(
    props.product.classification ? props.product.classification.size : []
  );
  const [colors, setColors] = useState(
    props.product.classification ? props.product.classification.color : []
  );
  const [idSanPham, setIdSanPham] = useState("");

  const onRemove = () => {
    props.onRemove(props.index);
  };

  const reciveProduct = (index, product) => {
    props.reciveProduct(index, product);
  };

  const addSize = () => {
    let arrSize = sizes;
    let item = "";
    arrSize.push(item);
    setSizes([...arrSize]);
  };

  const addColor = () => {
    let arrColor = colors;
    let item = "";
    arrColor.push(item);

    setColors([...arrColor]);
  };

  const renderColorItem = () => {
    var result = "";
    if (colors && colors.length > 0) {
      result = colors.map((color, index) => {
        return (
          <InputItem
            input={color}
            key={index + new Date()}
            index={index}
            onRemove={onSubColorRemove}
            reciveContentInput={reciveContentInputColor}
            type = "text"
          />
        );
      });
    }
    return result;
  };

  const reciveContentInputColor = (index, contentInput) => {
    let arrColor = colors;
    arrColor[index] = contentInput;
    setColors(arrColor);

    // let product = {
    //   maSanPham: "",
    //   classification: {
    //     color: colors,
    //     size: sizes
    //   }
    // };
    // props.reciveProduct(props.index, product);
  };
  const renderSizeItem = () => {
    var result = "";
    if (sizes && sizes.length > 0) {
      result = sizes.map((size, index) => {
        return (
          <InputItem
            input={size}
            key={index + new Date()}
            index={index}
            onRemove={onSubSizeRemove}
            reciveContentInput={reciveContentInputSize}
            type = "number"
          />
        );
      });
    }
    return result;
  };
  const reciveContentInputSize = (index, contentInput) => {
    let arrSize = sizes;
    arrSize[index] = contentInput;
    setSizes(arrSize);
    // let product = {
    //   maSanPham: "",
    //   classification: {
    //     color: colors,
    //     size: sizes
    //   }
    // };
    // props.reciveProduct(props.index, product);
  };

  const onSubColorRemove = index => {
    let arrColor = colors;
    arrColor.splice(index, 1);
    setColors([...arrColor]);
  };

  const onSubSizeRemove = index => {
    let arrSize = sizes;
    arrSize.splice(index, 1);
    setSizes([...arrSize]);
  };

  const renderOption = () => {
    var result = "";
    if(props.suplierProducts && props.suplierProducts.length>0){
      result = props.suplierProducts.map((suplierProduct, index)=>{
      return  <option value = {suplierProduct._id}>{suplierProduct.name}</option>
      })
    }
    return result;
  };

  useEffect(()=>{
    if(props.suplierProducts && props.suplierProducts.length>0){
      setIdSanPham(props.suplierProducts[0]._id);
    }
  },[props.suplierProducts])

  const confirmInfoProductDetail = ()=>{
    let product = {
      maSanPham: idSanPham,
      classification: {
        color: colors,
        size: sizes
      },
      
    };
    props.reciveProduct(props.index, product);
  }

  const selectMaSanPham = (e)=>{
    setIdSanPham(e.target.value);
  }
  return (
    <div style={{ marginBottom: "100px", paddingLeft: "15%" , border:'1px solid #C4C4C4', backgroundColor:'#F0F0F0', paddingTop:'10px'}}>
      <Grid container>
        <Grid
          container
          xs={12}
          direction="row"
          justify="space-between"
          alignItems="flex-start"
         
        >
          <Grid item >
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
              <select style={{ width: "200px", height: "40px" }}  onChange = {(e)=>selectMaSanPham(e)}>
                {renderOption()}
              </select>
            </div>
          </Grid>
          <Grid item style={{marginTop:'-10px'}}>
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
              {renderColorItem()}

              <Grid item alignItems="flex-end">
                <button
                  className="outline-button"
                  style={{
                    fontSize: "11px",
                    marginTop: "10px"
                  }}
                  onClick={addColor}
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
              {renderSizeItem()}

              <Grid>
                <button
                  onClick={addSize}
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
        <Grid sm = {8}>  
        <Grid container justify = "center">
        <button className = "outline-button" onClick = {confirmInfoProductDetail}>Xác nhận</button>
        </Grid>
        </Grid>
       
      </Grid>
    </div>
  );
}

export default ImportStockItem;
