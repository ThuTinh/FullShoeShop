import React from "react";
import Rating from "@material-ui/lab/Rating";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import shoe from '../../../assets/image/shoe.jpg'
import {Link} from "react-router-dom"
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
        <h6>Giày convert chính hàng mua từ hàn quốc giá rẻ</h6>
        <p style = {{color: "#F75F00"}}><b>120.000đ</b></p>
        <div style = {{display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
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
          <div>
            <FavoriteBorderIcon className = "favorite-icon"></FavoriteBorderIcon>
          </div>
        </div>
      </div>
      <div className="card-item-footer">
        <div className="action-item">
          <div style = {{display: 'flex', alignItems: 'center'}}>
          <label> Mua Hàng</label>
          </div>
       
        </div>
        <div className="action-item">
         <div style = {{display: 'flex', alignItems: 'center'}}> <Link to = "/product/:id" style = {{textDecoration: 'none' ,  color: '#fff'}}>Chi tiết</Link></div>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
