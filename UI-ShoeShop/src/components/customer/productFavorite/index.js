import React from "react";
import ProductFavoriteItem from "./productFavoriteItem";

function ProductFavorite() {
  return (
    <div style={{ marginTop: "40px" }}>
      <h6 style={{ color: "#2b2b28" }}>DANH SÁCH YÊU THÍCH</h6>
      <div
        style={{
          width: "10%",
          height: "4px",
          backgroundColor: "#d9a128",
          marginBottom: "30px"
        }}
      ></div>
      <ProductFavoriteItem />
      <ProductFavoriteItem />
      <ProductFavoriteItem />
      <ProductFavoriteItem />
    </div>
  );
}

export default ProductFavorite;
