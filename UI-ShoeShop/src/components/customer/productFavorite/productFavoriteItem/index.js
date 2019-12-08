import React, { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import shoe from "../../../../assets/image/shoe.jpg";
import { Link } from "react-router-dom";

function ProductFavoriteItem(props) {
  return (
    <div>
      <div className="container-order">
        <div className="container-order-item">
          <div style={{ width: "100%", display: "flex" }}>
            <div style={{ width: "25%" }}>
              <img
                style={{ width: "100", height: "100px" }}
                alt="example"
                src={shoe}
              />
            </div>
            <div style={{ width: "25%" }}>
              <h6> {props.product.nameShow || props.product.name}</h6>

              <div>
                <h6 style={{ color: "#d9a128" }}> {props.product.price} đ</h6>
              </div>
              <div>
                <DeleteIcon
                  onClick={() => {
                    props.removeProduct(props.product._id);
                    console.log("pid", props.product._id);
                  }}
                />
              </div>
            </div>
            <div style={{ width: "50%" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "flex-end",
                  height: "100%"
                }}
              >
                <button className="fill-button">
                  <Link
                    to={{
                      pathname: `/product-detail/${props.product._id}`
                    }}
                    style={{ color: "#fff", textDecoration: "none" }}
                  >
                    Chi tiết
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductFavoriteItem;
