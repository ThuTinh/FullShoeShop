/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import ImportStockItem from "./importStockItem";
import ImportStockDetail from "../makeOrderImport/importStockDetail";
import addImg from "../../../../assets/image/addImg.png";

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
function OrderImport() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.btnAddInfo} spaceing={4}>
        <Button
          variant="contained"
          color="primary"
          style={{ backgroundColor: "#512c62", marginRight: "10px" }}
        >
          Thêm
        </Button>
        <Button
          variant="contained"
          color="primary"
          style={{ backgroundColor: "#512c62" }}
        >
          Lưu
        </Button>
      </div>
      <div>
        <div style={{ marginBottom: "30px" }}>
          <label style={{ fontSize: "15px", marginRight: "20px" }}>
            Nhà sản xuất{" "}
          </label>
          <select style={{ width: "200px", height: "40px" }}>
            <option>Nhà SX 1</option>
            <option>Nhà SX 2</option>
            <option>Nhà SX 3</option>
            <option>Nhà SX 4</option>
          </select>
        </div>
        <ImportStockItem></ImportStockItem>
      </div>
      {/* <div className={classes.image}>
        <div className={classes.imageItem}>
          <img src={addImg}></img>
        </div>
        <div className={classes.imageItem}>
          <img src={addImg}></img>
        </div>
        <div className={classes.imageItem}>
          <img src={addImg}></img>
        </div>
        <div className={classes.imageItem}>
          <img src={addImg}></img>
        </div>
      </div> */}
      <div style={{ marginTop: "50px", marginBottom: "50px" }}>
        <div>
          <h5>Chi tiết đơn hàng</h5>
        </div>
        <ImportStockDetail></ImportStockDetail>
      </div>
    </div>
  );
}
export default OrderImport;
