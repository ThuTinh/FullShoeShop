import React, { useState } from "react";
import Rating from "@material-ui/lab/Rating";
import FavoriteIcon from "@material-ui/icons/Favorite";
import shoe from "../../../assets/image/shoe.jpg";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Paper from "@material-ui/core/Paper";
import "./style.css";

function ProductItem() {
  const [value, setValue] = useState(2);
  const [show, setShow] = useState(false);
  return (
    <Paper>
      <div
        className="card-container "
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        <div className="card-item-image">
          <img
            className="image-item"
            style={{ width: "100%", height: "200px" }}
            alt="example"
            src={shoe}
          />
        </div>
        <div className="card-item-body">
          <Link to="/product/:id" className="tilte">
            Giày convert chính hàng mua từ hàn quốc giá rẻ
          </Link>
          <p style={{ color: "#F75F00" }}>
            <b>120.000đ</b>
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between"
            }}
          >
            <div>
              <Rating
                name="simple-controlled"
                readOnly
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </div>
            <div className="add-to-cart">
              <div className={`action-item ${show ? "d-block" : "d-none"}`}>
                <div>
                  {" "}
                  <ShoppingCartIcon
                    className="cart"
                    style={{
                      color: "#5E3D6E",
                      fontSize: "35px",
                      marginBottom: "10px"
                    }}
                  ></ShoppingCartIcon>
                </div>
                <div>
                  {" "}
                  <FavoriteIcon className="favorite-icon"></FavoriteIcon>
                </div>
              </div>
            </div>
          </div>
          <div style = {{display:'flex', justifyContent:'flex-end', marginRight:"5px"}}>
            <i style = {{color:"#5e3d6e", fontSize:'12px'}}>120 đã bán</i>
          </div>
        </div>
      </div>
    </Paper>
  );
}

export default ProductItem;
