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
  atcUpdateDetailItemProductRequets
} from "../../../../actions";
import { connect } from "react-redux";

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
      let arr = detailProducts;
      arr.push(res.data.payload);
      setDetailProducts([...arr]);
    });
  };

  const removeImportStockItem = index => {
    let arrProduct = products;
    arrProduct.splice(index, 1);
    setProducts([...arrProduct]);
  };
  const renderImportStockDetail = () => {
    if (products && products.length > 0) {
      return <ImportStockDetail products={products} />;
    }
  };

  const saveOrder = () => {
    if (products && products.length > 0) {
      //thực hiện lấu product detail của sản phẩm theo mã sản phẩm
      console.log("huhu", detailProducts);

      // thực hiện lưu order vào trong model orderSuplier

      products.map((product, index) => {
        // Product order là chi tiết 1 sản phẩm trong đơn mua hàng
        var ProductOrder = {};
        var detail = [];
        if (product.classification) {
          for (var i = 0; i < product.classification.color.length; i++) {
            for (var j = 0; j < product.classification.size.length; j++) {
              let detailItem = {
                color: product.classification.color[i],
                size: product.classification.size[j],
                price: 10,
                quantity: 50
              };
              detail.push(detailItem);
            }
          }
        }

        ProductOrder = {
          productId: product.maSanPham,
          Detail: detail
        };
        let tempProductsOrder = productsOrder;
        tempProductsOrder.push(ProductOrder);

        setProductsOrder([...tempProductsOrder]);
      });

      let order = {
        products: productsOrder,
        totalPrice: 120000,
        suplierId: suplier._id,
        employee: "5dbedb5ba5592c2698f1992a"
      };

      setOrderSuplier(order);
      //  props.createOrderSuplier(order);

      var setIndexToAdd = new Set();
      var setIndexToUpdate = new Set();
      //Thực hiện update dữ liệu trong model products
      if (productsOrder && productsOrder.length > 0) {
        var tempDetailProducts = detailProducts; // cái này bị null => bug
        productsOrder.map((productOrderDetail, index) => {
          var k = 0;
          for (k = 0; k < tempDetailProducts.length; k++) {
            if (tempDetailProducts[k]) {
              if (productOrderDetail.productId == tempDetailProducts[k]._id) {
                if (
                  tempDetailProducts[k].Detail &&
                  tempDetailProducts[k].Detail.length > 0
                ) {
                  var l = 0;
                  for (l = 0; l < tempDetailProducts[k].Detail.length; l++) {
                    var n = 0;
                    for (n = 0; n < productOrderDetail.Detail.length; n++) {
                      if (
                        tempDetailProducts[k].Detail[l].color ==
                          productOrderDetail.Detail[n].color &&
                        tempDetailProducts[k].Detail[l].size ==
                          productOrderDetail.Detail[n].size
                      ) {
                        //cập nhập lại số lượng của product detail
                        props.updateDetailItem(
                          productOrderDetail.productId,
                          tempDetailProducts[k].Detail[l]._id,
                          productOrderDetail.Detail[n].quantity
                        );
                        setIndexToUpdate.add(n);
                      } else {
                        // let item = {
                        //   color: productOrderDetail.Detail[n].color,
                        //   inventory: 0, //se lam sau
                        //   price: 10, //se lam sau
                        //   size: productOrderDetail.Detail[n].size
                        // };
                        // props.addDetailProduct(
                        //   productOrderDetail.productId,
                        //   item
                        // );
                        setIndexToAdd.add(n);
                        console.log("index", n);
                      }
                    }
                  }

                  //update detail product trong model products
                  console.log("set add", setIndexToAdd);
                  console.log("set update", setIndexToUpdate);
                  let difference = new Set(
                    [...setIndexToAdd].filter(x => !setIndexToUpdate.has(x))
                  );
                  console.log("dif", difference);
                  let arr = Array.from(difference);
                  for (var index = 0; index < arr.length; index++) {
                    let item = {
                      color: productOrderDetail.Detail[index].color,
                      inventory: 0, //se lam sau
                      price: 10, //se lam sau
                      size: productOrderDetail.Detail[index].size
                    };
                    props.addDetailProduct(productOrderDetail.productId, item);
                  }
                } else {
                  let data = {
                    Detail: productOrderDetail.Detail
                  };
                  props.updateProduct(productOrderDetail.productId, data);
                }

                break;
              }
            }
          }
        });
      }
    }
  };

  useEffect(() => {
    // let arr = detailProducts;
    // arr.push(props.detailProduct);
    // setDetailProducts(arr);
    // console.log("arr", detailProducts);
  }, [props.detailProduct]);
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
    detailProduct: state.detailProduct
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
    }
  };
};
export default connect(stateMapToProps, dispatchMapToProps)(OrderImport);
