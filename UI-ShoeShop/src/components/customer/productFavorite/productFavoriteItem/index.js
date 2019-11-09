import React, { useState } from "react";
import { Paper, Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import shoe from "../../../../assets/image/shoe.jpg";
import { Link } from "react-router-dom";

function ProductFavoriteItem() {
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
                <h6> Giày thể thao ABC</h6>

                <div>
                  <h6 style={{ color: "#d9a128" }}> 199.000 đ</h6>
                </div>
                <div>
                  <DeleteIcon></DeleteIcon>
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
                  <button
                    className = "fill-button"
                  >
                    <Link
                      to="/product/purchase"
                      style={{ color: "#fff", textDecoration: "none" }}
                    >
                     
                      Mua hàng
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
