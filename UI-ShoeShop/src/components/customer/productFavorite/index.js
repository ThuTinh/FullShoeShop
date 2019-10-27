import React from "react";
import ProductFavoriteItem from './productFavoriteItem'


function ProductFavorite() {
  return (
    <div style = {{marginTop:'40px'}}>
      <h5 style = {{color:"#512c62"}}>DANH SÁCH YÊU THÍCH</h5>
      <div style = {{width: '10%', height: '4px', backgroundColor: "#F75F00", marginBottom: '30px'}}></div>
      <ProductFavoriteItem/>
      <ProductFavoriteItem/>
      <ProductFavoriteItem/>
      <ProductFavoriteItem/>
     
    </div>
  );
}

export default ProductFavorite;
