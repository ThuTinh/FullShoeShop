import React from "react";
import Rating from "@material-ui/lab/Rating";
import FavoriteIcon from "@material-ui/icons/Favorite";
import shoe from "../../../assets/image/shoe.jpg";
import { Link } from "react-router-dom";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import "./style.css";

function ProductItem() {
  const [value, setValue] = React.useState(2);
  return (
    <div className="card-container ">
      <div className="card-item-image">
        <img
          className="image-item"
          style={{ width: "100%", height: "200px" }}
          alt="example"
          src={shoe}
        />
      </div>
      <div className="card-item-body">
        <Link to = "/product/:id" className = "tilte">Giày convert chính hàng mua từ hàn quốc giá rẻ</Link>
        <p style={{ color: "#F75F00" }}>
          <b>120.000đ</b>
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            
           
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
          <div className = "add-to-cart">
            <div className="action-item">
              <div> <AddShoppingCartIcon
             className = "cart"   style={{ color: "#5E3D6E", fontSize:'35px', marginBottom:'10px' }}
              ></AddShoppingCartIcon></div>
             <div> <FavoriteIcon className="favorite-icon"></FavoriteIcon></div>
              
            </div>
            
             
           
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default ProductItem;

