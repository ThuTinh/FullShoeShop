import React from "react";
import Button from "@material-ui/core/Button";
import Rating from "@material-ui/lab/Rating";
import { makeStyles } from "@material-ui/core/styles";
import CarouselProduct from "../carousel/carouseProduct";
import { createBrowserHistory } from "history";
import ProductItem from '../prodcutItem'
import "./style.css";

function ProductDetail(props) {
  const [value, setValue] = React.useState(2);

  const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1)
    }
  }));
  const history = createBrowserHistory();
  const classes = useStyles();
  const buyProducts = id => {
    history.push("/product/cart");
    history.goForward();
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-5">
          <CarouselProduct></CarouselProduct>
        </div>
        <div className="col-7">
          <div className="title mt-4">
            <h4>
              FREESHIP ĐƠN TỪ 50K TOÀN QUỐC ] - ỐP LƯNG HOA QUẢ XINH ( IN PHỦ
              BÓNG ) - ỐP IPHONE DẺO NỔI SỌC 3D [ H5-3 ]
            </h4>
            <Rating
              name="simple-controlled"
              value={value}
              readOnly
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
          </div>
          <div className="flex mt-4">
            <div className="money">100.000 đ</div>
            <div className="rate-own">
              <label style={{ marginRight: "10px" }}>Đánh giá: </label>
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </div>
          </div>
          <div className="color">
            <h6 className="mr-5">Màu</h6>
            <Button
              variant="outlined"
              color="secondary"
              className={classes.button}
            >
              Màu xanh
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              className={classes.button}
            >
              Màu đỏ
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              className={classes.button}
            >
              Màu vàng
            </Button>
          </div>
          <div className="size">
            <h6 className="mr-5">Size</h6>
            <Button
              variant="outlined"
              color="secondary"
              className={classes.button}
            >
              size 37
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              className={classes.button}
            >
              size 38
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              className={classes.button}
            >
              size 39
            </Button>
          </div>
          <div className=" quanlity d-flex">
            <h6 className="mr-5">Số lượng</h6>
            <input
              type="number"
              style={{ width: "40px", backgroundColor: "#FFFFFF" }}
            />
          </div>
          <div className="buy d-flex">
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              style={{ backgroundColor: "#ff0000" }}
            >
              Thêm vào giỏ hàng
            </Button>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              style={{ backgroundColor: "#ff0000" }}
              onClick={() => buyProducts(1)}
            >
              Mua hàng
            </Button>
            <Button
              variant="contained"
              className={classes.button}
              color="secondary"
              style={{ backgroundColor: "#ff0000" }}
            >
              Book
            </Button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="dive"></div>
        <div style={{}}>
          <div>
            <h5 className="mb-4">CHI TIẾT SẢN PHẨM</h5>
            <p>
              Trong React, Router sẽ kiểm tra History cho mỗi Component và bất
              cứ khi nào có thay đổi trong History, Component đó sẽ được render
              lại. Trước khi có React Router v4, ta phải set giá trị History thủ
              công. Việc này đã được tự động ở Router v4 bằng thẻ Nếu bạn vẫn
              cần truy cập vào History, HTML5 cung cấp 1 API có sẵn cho phép
              điều chỉnh đối tượng History thông qua các phương thức pushState
              và replaceState. Trong React, Router sẽ kiểm tra History cho mỗi
              Component và bất cứ khi nào có thay đổi trong History, Component
              đó sẽ được render lại. Trước khi có React Router v4, ta phải set
              giá trị History thủ công. Việc này đã được tự động ở Router v4
              bằng thẻ Nếu bạn vẫn cần truy cập vào History, HTML5 cung cấp 1
              API có sẵn cho phép điều chỉnh đối tượng History thông qua các
              phương thức pushState và replaceState.
            </p>
          </div>
        </div>
      </div>
      {/* <div>
        <h5>Sản phẩm tương tự</h5>
        <div className="row">
          <div className="col-4">
            <ProductItem />
          </div>
          <div className="col-4">
            <ProductItem />
          </div>
          <div className="col-4">
            <ProductItem />
          </div>
          <div className="col-4">
            <ProductItem />
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default ProductDetail;
