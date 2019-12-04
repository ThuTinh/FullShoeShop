/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImportStockItem from "./importStockItem";
import ImportStockDetail from "../makeOrderImport/importStockDetail";
import {
  atcGetSuplierRequest,
  atcGetDetailProductRequest,
  atcCreateOrderSuplierRequest,
  atcUpdateProductRequest,
  atcAddDetailItemProductRequets,
  atcGetCurentUserRequest,
  atcUpdateDetailItemProductRequets
} from "../../../../actions";
import { connect } from "react-redux";
import ProducDetailtItem from "../../managerProductDetail/productDetailItem";
import { userInfo } from "os";

const useStyles = makeStyles(theme => ({
  btnAddInfo: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    marginRight: "10%",
    marginBottom: "40px"
  },
  image: {
    display: "flex"
  },
  imageItem: {
    width: "150xp",
    height: "150px"
  }
}));
function OrderImport(props) {
  const classes = useStyles();
  useEffect(() => {
    props.getSupliers();
  }, []);

  const [suplier, setSuplier] = useState({});

  const [products, setProducts] = useState([
    {
      maSanPham: "",
      classification: { color: ["Màu"], size: [40] }
    }
  ]);

  const [_detailProducts, _setDetailProducts] = useState([
    {
      maSanPham: "",
      detail: [
        {
          color: "",
          size: "",
          price: 0,
          inventory: 0
        }
      ]
    }
  ]);

  //Danh sách detail của sản phẩm trong model products
  const [detailProducts, setDetailProducts] = useState([]);

  // Danh sách product tỏng hóa đơn mua hàng
  const [productsOrder, setProductsOrder] = useState([]);

  // Lưu thông tin hóa đơn
  const [orderSuplier, setOrderSuplier] = useState({});

  const supliers = props.supliers;

  const renderOptionSuplier = () => {
    var result = "";
    if (supliers && supliers.length > 0) {
      result = supliers.map((suplier, index) => {
        return (
          <option key={index} value={JSON.stringify(suplier)}>
            {suplier.name}
          </option>
        );
      });
    }
    return result;
  };

  const onSelectSuplier = e => {
    const obj = JSON.parse(e.target.value);
    // console.log(obj.name);
    setSuplier(obj);
    //  const chooes = supliers[0];
  };

  const addCatelogyElement = () => {
    let arr = products;
    let item = {
      maSanPham: "",
      classification: { color: ["Màu"], size: [40] }
    };
    arr.push(item);
    setProducts([...arr]);
  };

  const renderImportStockItem = () => {
    var result = "";
    if (products && products.length > 0) {
      result = products.map((product, index) => {
        return (
          <ImportStockItem
            key={index + new Date()}
            index={index}
            product={product}
            suplierProducts={suplier.products}
            onRemove={() => removeImportStockItem(index)}
            reciveProduct={reciveProduct}
          ></ImportStockItem>
        );
      });
    }
    return result;
  };

  const reciveProduct = (index, product) => {
    let arrProduct = products;
    arrProduct[index] = product;
    setProducts([...arrProduct]);
    props.getDetailProduct(product.maSanPham).then(res => {
      try {
        let arr = detailProducts;
        arr.push(res.data.payload);
        setDetailProducts([...arr]);
      } catch (error) {
        console.log("lỗi", error);
      }
     
    });
  };

  const removeImportStockItem = index => {
    let arrProduct = products;
    arrProduct.splice(index, 1);
    setProducts([...arrProduct]);
  };
  const renderImportStockDetail = () => {
    if (products && products.length > 0) {
      return (
        <ImportStockDetail
          products={products}
          _sendDetailProduct={onReciveDetailProduct}
          _detailProducts={_detailProducts}
        />
      );
    }
  };

  const onReciveDetailProduct = detailProduct => {
    _setDetailProducts(detailProduct);
    console.log("test detail product", _detailProducts);
  };
  const saveOrder = () => {
    if (products && products.length > 0) {
      //thực hiện lấu product detail của sản phẩm theo mã sản phẩm
      console.log("huhu", detailProducts);

      // thực hiện lưu order vào trong model orderSuplier
      console.log("úuer", props.currenUser)
      let order = {
        products: _detailProducts,
        totalPrice: 5000000,
        suplierId: suplier._id,
        employee: "5dbedb5ba5592c2698f1992a"
      };

      setOrderSuplier(order);
      props.createOrderSuplier(order);

      var setIndexToAdd = new Set();
      var setIndexToUpdate = new Set();
      //Thực hiện update dữ liệu trong model products
      if (_detailProducts && _detailProducts.length > 0) {
        var tempDetailProducts = detailProducts; // cái này bị null => bug
        _detailProducts.map((productOrderDetail, index) => {
          var k = 0;
          for (k = 0; k < tempDetailProducts.length; k++) {
            if (tempDetailProducts[k]) {
              if (productOrderDetail.maSanPham == tempDetailProducts[k]._id) {
                if (
                  tempDetailProducts[k].detail &&
                  tempDetailProducts[k].detail.length > 0
                ) {
                  var l = 0;
                  for (l = 0; l < tempDetailProducts[k].detail.length; l++) {
                    var n = 0;
                    for (n = 0; n < productOrderDetail.detail.length; n++) {
                      if (
                        tempDetailProducts[k].detail[l].color ==
                          productOrderDetail.detail[n].color &&
                        tempDetailProducts[k].detail[l].size ==
                          productOrderDetail.detail[n].size
                      ) {
                        //cập nhập lại số lượng của product detail

                        // let quantity = productOrderDetail.detail[n].quantity +  tempDetailProducts[k].detail[l].quantity;
                        props.updateDetailItem(
                          productOrderDetail.maSanPham,
                          tempDetailProducts[k].detail[l]._id,
                          productOrderDetail.detail[n].inventory
                        );
                        setIndexToUpdate.add(n);
                      } else {
                        setIndexToAdd.add(n);
                      }
                    }
                  }

                  //update detail product trong model products
                  let difference = new Set(
                    [...setIndexToAdd].filter(x => !setIndexToUpdate.has(x))
                  );
                  let arr = Array.from(difference);
                  console.log("different:", arr);
                  for (var index = 0; index < arr.length; index++) {
                    props.addDetailProduct(
                      productOrderDetail.maSanPham,
                      productOrderDetail.detail[arr[index]]
                    );
                  }
                } else {
                  let data = {
                    detail: productOrderDetail.detail
                  };
                  props.updateProduct(productOrderDetail.maSanPham, data);
                }

                break;
              }
            }
          }
        });
      }
    }
  };

  useEffect(()=>{
    let token = localStorage.getItem('token');
    console.log("token", token)
    props.getCurrentUser(token);
  },[])
  return (
    <div>
      <div className={classes.btnAddInfo} spaceing={4}>
        <button onClick={addCatelogyElement} className="outline-button">
          Thêm
        </button>
        <button className="outline-button" onClick={saveOrder}>
          Lưu
        </button>
      </div>
      <div>
        <div style={{ marginBottom: "30px", marginLeft: "15%" }}>
          <label
            style={{ fontSize: "15px", marginRight: "20px", width: "120px" }}
          >
            Nhà sản xuất{" "}
          </label>
          <select
            style={{ width: "200px", height: "40px" }}
            onClick={onSelectSuplier}
          >
            {renderOptionSuplier()}
          </select>
        </div>
        {renderImportStockItem()}
      </div>

      <div style={{ marginTop: "50px", marginBottom: "50px" }}>
        <div>
          <h5>Chi tiết đơn hàng</h5>
        </div>
        {renderImportStockDetail()}
      </div>
    </div>
  );
}

const stateMapToProps = (state, props) => {
  return {
    supliers: state.supliers,
    detailProduct: state.detailProduct,
    currenUser: state.infoUser
  };
};

const dispatchMapToProps = (dispatch, props) => {
  return {
    getSupliers: () => {
      dispatch(atcGetSuplierRequest());
    },
    getDetailProduct: id => {
      return dispatch(atcGetDetailProductRequest(id));
    },
    createOrderSuplier: order => {
      dispatch(atcCreateOrderSuplierRequest(order));
    },
    updateProduct: (id, data) => {
      dispatch(atcUpdateProductRequest(id, data));
    },
    addDetailProduct: (id, detail) => {
      dispatch(atcAddDetailItemProductRequets(id, detail));
    },
    updateDetailItem: (id, idItem, inventory) => {
      dispatch(atcUpdateDetailItemProductRequets(id, idItem, inventory));
    },
    getCurrentUser : (token)=>{
      dispatch(atcGetCurentUserRequest(token))
    }
  };
};
export default connect(stateMapToProps, dispatchMapToProps)(OrderImport);
