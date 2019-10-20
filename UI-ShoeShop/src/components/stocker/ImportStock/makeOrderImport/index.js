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
    marginRight: "10%"
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
      <div className={classes.btnAddInfo}>
        <Button variant="contained" color="secondary">
          Thêm thông tin nhập hàng
        </Button>
      </div>
      <div>
        <ImportStockItem></ImportStockItem>
      </div>
      <div className={classes.image}>
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
      </div>
      <div style={{ marginTop: "50px", marginBottom: "50px" }}>
        <div>
          <h5>Chi tiết đơn hàng</h5>
        </div>
        <ImportStockDetail></ImportStockDetail>
      </div>
      <div className={classes.btnAddInfo}>
        <Button variant="contained" color="secondary">
          Lưu thông tin đơn hàng
        </Button>
      </div>
    </div>
  );
}
export default OrderImport;
