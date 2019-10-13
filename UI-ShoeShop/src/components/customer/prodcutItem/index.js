import React from "react";
import Rating from "@material-ui/lab/Rating";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
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
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      </div>
      <div className="card-item-body">
        <h6>Giày convert chính hàng mua từ hàn quốc giá rẻ</h6>
        <p>12$</p>
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
          <label> Mua Hàng</label>
        </div>
        <div className="action-item">
          <label>Chi tiết</label>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
