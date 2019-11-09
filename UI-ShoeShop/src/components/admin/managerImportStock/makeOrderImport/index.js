/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImportStockItem from "./importStockItem";
import ImportStockDetail from "../makeOrderImport/importStockDetail";
import addImg from "../../../../assets/image/addImg.png";
import { atcGetSuplierRequest } from "../../../../actions";

import { connect } from "react-redux";

const useStyles = makeStyles(theme => ({
  btnAddInfo: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    marginRight: "10%",
    marginBottom: "40px"
  },
  image: {
    display: "flex"
  },
  imageItem: {
    width: "150xp",
    height: "150px"
  }
}));
function OrderImport(props) {
  const classes = useStyles();
  useEffect(() => {
    props.getSupliers();
  }, []);


  const [suplier, setSuplier] = useState({});
  const [classifications, setClassifications] = useState([
    // { color: [], size: [] }
  ]);
  const [contentRender , setContentRender] = useState("");
  const supliers = props.supliers;

  const renderOptionSuplier = () => {
    var result = "";
    if (supliers && supliers.length > 0) {
      result = supliers.map((suplier, index) => {
        return (
          <option key={index} value={suplier}>
            {suplier.name}
          </option>
        );
      });
    }
    return result;
  };

  const onSelectSuplier = e => {
    setSuplier(e.target.value);
    // renderOptionProduct(suplier.product);
  };

  const addCatelogyElement = () => {
    let arr = classifications;
    let item = {
      color: [],
      size: []
    };
    arr.push(item);
     setClassifications(arr);
    renderImportStockItem();
  };

  const renderImportStockItem = () => {
    var result = "";
    if (classifications && classifications.length > 0) {
      result = classifications.map((classification, index) => {
        console.log("classification", classification)
        return (
          <ImportStockItem
            key={index}
            index ={index}
            classification={classification}
            onRemove = {removeImportStockItem}
          ></ImportStockItem>
        );
      });
    }   
    setContentRender(result);
  };

  const removeImportStockItem= (index)=>{
    let arrClassification = classifications;
    arrClassification.splice(index,1);
    setClassifications(arrClassification);
    renderImportStockItem();

  }

  return (
    <div>
      <div className={classes.btnAddInfo} spaceing={4}>
        <button onClick={addCatelogyElement} className="outline-button">
          Thêm
        </button>
        <button className="outline-button">Lưu</button>
      </div>
      <div>
        <div style={{ marginBottom: "30px", marginLeft: "15%" }}>
          <label
            style={{ fontSize: "15px", marginRight: "20px", width: "120px" }}
          >
            Nhà sản xuất{" "}
          </label>
          <select
            style={{ width: "200px", height: "40px" }}
            onClick={onSelectSuplier}
          >
            {renderOptionSuplier()}
          </select>
        </div>
        {contentRender}
      </div>

      <div style={{ marginTop: "50px", marginBottom: "50px" }}>
        <div>
          <h5>Chi tiết đơn hàng</h5>
        </div>
        <ImportStockDetail></ImportStockDetail>
      </div>
    </div>
  );
}

const stateMapToProps = (state, props) => {
  return {
    supliers: state.supliers
  };
};

const dispatchMapToProps = (dispatch, props) => {
  return {
    getSupliers: () => {
      dispatch(atcGetSuplierRequest());
    }
  };
};
export default connect(
  stateMapToProps,
  dispatchMapToProps
)(OrderImport);
