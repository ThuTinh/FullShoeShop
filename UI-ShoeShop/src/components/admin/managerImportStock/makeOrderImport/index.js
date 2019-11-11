/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImportStockItem from "./importStockItem";
import ImportStockDetail from "../makeOrderImport/importStockDetail";
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

  const [products, setProducts] = useState([
    {
      maSanPham: "",
      classification: { color: ["Màu"], size: [40] }
    }
  ]);

  const supliers = props.supliers;

  const renderOptionSuplier = () => {
    var result = "";
    if (supliers && supliers.length > 0) {
      result = supliers.map((suplier, index) => {
        return (
          <option key={index} value={JSON.stringify(suplier)}>
            {suplier.name}
          </option>
        );
      });
    }
    return result;
  };

  const onSelectSuplier = e => {
    const obj = JSON.parse(e.target.value);
    // console.log(obj.name);
    setSuplier(obj);
    //  const chooes = supliers[0];
  };

  const addCatelogyElement = () => {
    let arr = products;
    let item = {
      maSanPham: "",
      classification: { color: ["Màu"], size: [40] }
    };
    arr.push(item);
    setProducts([...arr]);
  };

  const renderImportStockItem = () => {
    var result = "";
    if (products && products.length > 0) {
      result = products.map((product, index) => {
        return (
          <ImportStockItem
            key={index + new Date()}
            index={index}
            product={product}
            suplierProducts={suplier.products}
            onRemove={() => removeImportStockItem(index)}
            reciveProduct={reciveProduct}
          ></ImportStockItem>
        );
      });
    }
    return result;
  };

  const reciveProduct = (index, product) => {
    let arrProduct = products;
    arrProduct[index] = product;
    setProducts([...arrProduct]);
    console.log("product ne", product);
    console.log(" list product ne", products);


  };

  const removeImportStockItem = index => {
    let arrProduct = products;
    arrProduct.splice(index, 1);
    setProducts([...arrProduct]);
  };
  const renderImportStockDetail = () => {
    return <ImportStockDetail products={products} />;
  };
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
        {renderImportStockItem()}
      </div>

      <div style={{ marginTop: "50px", marginBottom: "50px" }}>
        <div>
          <h5>Chi tiết đơn hàng</h5>
        </div>
        {renderImportStockDetail()}
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
