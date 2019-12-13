import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Rating from "@material-ui/lab/Rating";
import { makeStyles } from "@material-ui/core/styles";
import CarouselProduct from "../carousel/carouseProduct";
import {
  atcGetProductRequest,
  atcAddToCart,
  atcGetCurentUserRequest
} from "../../../actions/index";
import { connect } from "react-redux";
import { EditorState, ContentState } from "draft-js";
import htmlToDraft from "html-to-draftjs";
import { Editor } from "react-draft-wysiwyg";
import "./style.css";
import { Box } from "@material-ui/core";
import { Link } from "react-router-dom";
import SnackbarContentWrapper from "../../message";
import Snackbar from "@material-ui/core/Snackbar";
const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  }
}));

function ProductDetail(props) {
  const [value, setValue] = useState(2);
  const [rating, setRating] = useState(0);
  const [product, setProduct] = useState({});
  const [discription, setDiscription] = useState(EditorState.createEmpty());
  const [color, setColor] = useState([]);
  const [size, setSize] = useState([]);
  const [chooseColor, setChooseColor] = useState("");
  const [chooseSize, setChooseSize] = useState("");
  const [quanlity, setQuanlity] = useState(1);
  const [checkChoose, setCheckChoose] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [message, setMessage] = useState("");
  const [variantMessage, setVariantMessage] = useState("info");
  const [user, setUser] = useState(props.currentUser);
  const [totalPrice, setTotalPrice] = useState(0);
  const [checkAddOrBuy, setCheckAddOrBuy] = useState(false);

  // const history = createBrowserHistory();
  const classes = useStyles();

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackbar(false);
  };

  const showMessage = (variant, message) => {
    setVariantMessage(variant);
    setMessage(message);
    setOpenSnackbar(true);
  };

  useEffect(() => {
    console.log("paramas", props.id);
    const id = props.id;
    props.getProduct(id);
    const token = localStorage.getItem("token");
    console.log("token111", token);
    if (token && token.length > 0) {
      console.log("token", token);
      props.getCurentUser(token);
    }
  }, []);
  useEffect(() => {
    setProduct(props.product);
    const blocksFromHtml = htmlToDraft("" + props.product.description);
    const { contentBlocks, entityMap } = blocksFromHtml;
    const contentState = ContentState.createFromBlockArray(
      contentBlocks,
      entityMap
    );
    const editorState = EditorState.createWithContent(contentState);
    setDiscription(editorState);

    let colorSet = new Set();
    let sizeSet = new Set();
    if (props.product.detail && props.product.detail.length > 0) {
      props.product.detail.map((detail, index) => {
        colorSet.add(detail.color);
        sizeSet.add(detail.size);
      });
    }
    setColor([...Array.from(colorSet)]);
    setSize([...Array.from(sizeSet)]);
    //const total = localStorage.getItem('total')? parseInt(localStorage.getItem('total')):0;
  }, [props.product]);

  useEffect(() => {
    setUser(props.currentUser);
    console.log("user nef", props.currentUser);
  }, [props.currentUser]);

  const atcChooseColor = (e, c) => {
    if (chooseColor != c) {
      setChooseColor(c);
    } else {
      setChooseColor("");
    }
  };
  const atcChooseSize = (e, s) => {
    if (chooseSize != s) {
      setChooseSize(s);
    } else {
      setChooseColor("");
    }
  };
  const renderColor = () => {
    var result = [];
    if (color && color.length > 0) {
      result = color.map((item, index) => {
        return (
          <button
            className={item == chooseColor ? "choose-button" : "outline-button"}
            key={index}
            onClick={e => {
              atcChooseColor(e, item);
            }}
          >
            {item}
          </button>
        );
      });
    }
    return result;
  };

  const renderSize = () => {
    var result = [];
    if (size && size.length > 0) {
      result = size.map((item, index) => {
        return (
          <button
            className={item == chooseSize ? "choose-button" : "outline-button"}
            key={index}
            onClick={e => {
              atcChooseSize(e, item);
            }}
          >
            {item}
          </button>
        );
      });
    }
    return result;
  };
  const addProduct = () => {
    if (chooseColor == "" || chooseSize == "") {
      setCheckChoose(true);
    } else {
      const productOrder = {
        productId: product._id,
        color: chooseColor,
        size: chooseSize,
        price: product.price,
        quantity: quanlity,
        img: product.images.length > 0 ? product.images[0] : "",
        name: product.nameShow != "" ? product.nameShow : product.name
      };
      props.addToCart(1);
      let tempRoductOrder = JSON.parse(localStorage.getItem("ProductOrders"));
      if (tempRoductOrder) {
        let check = false;
        for (var i = 0; i < tempRoductOrder.length; i++) {
          if (
            tempRoductOrder[i].color == productOrder.color &&
            tempRoductOrder[i].size == productOrder.size
          ) {
            tempRoductOrder[i].quantity =
              parseInt(tempRoductOrder[i].quantity) + 1;
            check = true;
            console.log(
              " tempRoductOrder[i].quanlity",
              i,
              tempRoductOrder[i],
              tempRoductOrder[i].quantity
            );
            break;
          }
        }
        if (!check) tempRoductOrder.push(productOrder);
        localStorage.setItem("ProductOrders", JSON.stringify(tempRoductOrder));
      } else {
        const productOrders = [];
        productOrders.push(productOrder);
        localStorage.setItem("ProductOrders", JSON.stringify(productOrders));
      }

      let total = localStorage.getItem("total")
        ? parseInt(localStorage.getItem("total"))
        : 0;
      total += parseInt(product.price) * parseInt(quanlity);
      localStorage.setItem("total", total);
      setChooseColor("");
      setChooseSize("");
      showMessage("info", "Thêm sản phẩm thành công!");

      //  var storedNames = JSON.parse(localStorage.getItem("ProductOrders"));
    }
  };

  const buyProduct = () => {
    if (chooseColor == "" && chooseSize == "") {
      setCheckChoose(true);
    } else {
      if (!checkAddOrBuy) {
        const productOrder = {
          productId: product._id,
          color: chooseColor,
          size: chooseSize,
          price: product.price,
          quantity: quanlity,
          img: product.images.length > 0 ? product.images[0] : "",
          name: product.nameShow != "" ? product.nameShow : product.name
        };
        let tempRoductOrder = JSON.parse(localStorage.getItem("ProductOrders"));
        showMessage("info", "Thêm sản phẩm thành công!");
        if (tempRoductOrder) {
          let check = false;
          for (let i = 0; i < tempRoductOrder.length; i++) {
            if (
              tempRoductOrder[i].color == productOrder.color &&
              tempRoductOrder[i].size == productOrder.size
            ) {
              tempRoductOrder[i].quantity =
                parseInt(tempRoductOrder[i].quantity) + 1;
              console.log(
                "tempRoductOrder[i].quanlity",
                tempRoductOrder[i].quantity
              );
              check = true;
              break;
            }
          }
          if (!check) tempRoductOrder.push(productOrder);
          localStorage.setItem(
            "ProductOrders",
            JSON.stringify(tempRoductOrder)
          );
        } else {
          const productOrders = [];
          productOrders.push(productOrder);
          localStorage.setItem("ProductOrders", JSON.stringify(productOrders));
        }
        let total = localStorage.getItem("total")
          ? parseInt(localStorage.getItem("total"))
          : 0;
        total += parseInt(product.price) * parseInt(quanlity);
        localStorage.setItem("total", total);
        props.addToCart(1);
      }
    }
  };
  const renderInventory = () => {
    if (chooseSize != "" && chooseColor != "") {
      if (product.detail && product.detail.length > 0) {
        let inventory = 0;
        for (let i = 0; i < product.detail.length; i++) {
          if (
            product.detail[i].color == chooseColor &&
            product.detail[i].size == chooseSize
          ) {
            inventory = product.detail[i].inventory;
            break;
          }
        }
        const productOrders = JSON.parse(localStorage.getItem("ProductOrders"));
        console.log("productOrders", productOrders);
        if (productOrders && productOrders.length > 0) {
          for (let j = 0; j < productOrders.length; j++) {
            console.log(
              "productOrders for",
              productOrders[j],
              productOrders[j].color,
              productOrders[j].size
            );

            if (
              productOrders[j].color == chooseColor &&
              productOrders[j].size == chooseSize
            ) {
              inventory -= parseInt(productOrders[j].quantity);
              console.log("if =", inventory);
            }
          }
        }
        if ((inventory <= 0)) {
          setCheckAddOrBuy(true);
        }
        return <p>Có {inventory <= 0 ? 0 : inventory} sản phẩm có sẳn</p>;
      }
    }
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-5">
          <CarouselProduct></CarouselProduct>
        </div>
        <div className="col-7">
          <div className="title mt-4">
            <h3>
              {/* {product.nameShow || product.name} */}
              {product.nameShow}
            </h3>
            <div style={{ display: "flex" }}>
              <div>
                <Rating
                  name="simple-controlled"
                  value={value}
                  readOnly
                  style={{ fontSize: "18px" }}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
              </div>
              {/* <div style={{ marginLeft: "2%" }}>100 đánh giá</div> */}
            </div>
          </div>
          <div className="flex mt-2">
            <div className="money">{product.price}đ</div>
            <div className="rate-own">
              {/* <label style={{ marginRight: "10px" }}>Đánh giá sao:</label>
              <Rating
                name="simple-controlled"
                value={rating}
                onChange={(event, newValue) => {
                  setRating(newValue);
                }}
              /> */}
            </div>
          </div>
          <div className="color">
            <h6 className="mr-5">Màu</h6>
            {renderColor()}
          </div>
          <div className="size">
            <h6 className="mr-5">Size</h6>
            {renderSize()}
          </div>
          <div>
            {checkChoose && (
              <Box color="#FF0000">
                <i>Bạn chưa chọn phân loại hàng</i>
              </Box>
            )}
            {checkAddOrBuy && (
              <Box color="#FF0000">
                <i>Sản phẩm đã hết hàng, xin hãy chọn sản phẩm khác !</i>
              </Box>
            )}
          </div>
          <div className=" quanlity d-flex">
            <h6 className="mr-5">Số lượng</h6>
            <input
              type="number"
              style={{
                width: "40px",
                border: "1px solid #d9a128",
                borderRadius: "5px"
              }}
              value={quanlity}
              name="quanlity"
              onChange={e => setQuanlity(e.target.value)}
              min={1}
            />
            {renderInventory()}
          </div>
          <div className="buy d-flex">
            <Button
              variant="contained"
              className={classes.button}
              color="secondary"
              style={{ backgroundColor: "#9d0b0b" }}
              onClick={() => addProduct()}
            >
              Thêm vào giỏ hàng
            </Button>
            {/* <button>
            Thêm vào giỏ hàng
            </button> */}
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              style={{ backgroundColor: "#9d0b0b" }}
              onClick={() => buyProduct()}
            >
              <Link
                to={{
                  pathname: "/cart",
                  buy: true
                }}
                className="buy-product"
              >
                Mua hàng
              </Link>
            </Button>
            {/* <Button
              variant="contained"
              className={classes.button}
              color="secondary"
              style={{ backgroundColor: "#ff0000" }}
            >
              Book
            </Button> */}
          </div>
        </div>
      </div>
      <div className="row">
        {/* <div className="dive"></div> */}
        <div style={{}}>
          <div>
            <h5 className="mb-4 ml-4">CHI TIẾT SẢN PHẨM</h5>
            <Editor
              toolbarClassName="demo-toolbar-absolute"
              wrapperClassName="demo-wrapper"
              editorClassName="demo-editor"
              editorState={discription}
              readOnly={true}
              toolbarOnFocus
            />
          </div>
        </div>
      </div>
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        open={openSnackbar}
        autoHideDuration={2000}
        onClose={handleCloseSnackbar}
      >
        <SnackbarContentWrapper
          onClose={handleCloseSnackbar}
          variant={variantMessage}
          message={message}
        />
      </Snackbar>
    </div>
  );
}

const stateMapToProps = (state, props) => {
  return {
    product: state.product,
    currentUser: state.user
  };
};
const dispatchMapToProps = (dispatch, props) => {
  return {
    getProduct: id => {
      dispatch(atcGetProductRequest(id));
    },
    addToCart: count => {
      dispatch(atcAddToCart(count));
    },
    getCurentUser: token => {
      dispatch(atcGetCurentUserRequest(token));
    }
  };
};
export default connect(stateMapToProps, dispatchMapToProps)(ProductDetail);
