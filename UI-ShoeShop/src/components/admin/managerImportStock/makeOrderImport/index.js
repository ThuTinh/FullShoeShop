/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImportStockItem from "./importStockItem";
import ImportStockDetail from "../makeOrderImport/importStockDetail";
import {
  atcGetSuplierRequest,
  atcGetDetailProductRequest,
  atcCreateOrderSuplierRequest,
  atcUpdateProductRequest
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
    console.log("product ne", product);
    console.log(" list product ne", products);
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
      products.map((product, index) => {
        props.getDetailProduct(product.maSanPham);
      });

      // thực hiện lưu order vào trong model orderSuplier

      products.map((product, index) => {
        // Product order là chi tiết 1 sản phẩm trong đơn mua hàng
        var ProductOrder = {};
        var detail = [];
        console.log("pproduct111", product);
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

        setProductsOrder(tempProductsOrder);
      });

      let order = {
        products: productsOrder,
        totalPrice: 120000,
        suplierId: suplier._id,
        employee: "5dba692c2828890510a47d2d"
      };

      console.log("order", order);
      setOrderSuplier(order);
      props.createOrderSuplier(order);

      //Thực hiện update dữ liệu trong model products
      if (productsOrder && productsOrder.length > 0) {
        var tempDetailProducts = detailProducts; // cái này bị null => bug
        console.log("tempDetailProducts", tempDetailProducts)
        productsOrder.map((productOrderDetail, index) => {
          for (var k = 0; k < tempDetailProducts.length; k++) {
            console.log("aaa", productOrderDetail);
            console.log("aaaa", tempDetailProducts[k]);
            if (tempDetailProducts[k].length > 0) {
              if (productOrderDetail._id == tempDetailProducts[k]._id) {
                if (
                  tempDetailProducts[k].Detail &&
                  tempDetailProducts[k].Detail.length > 0
                ) {
                  for (
                    var l = 0;
                    l < tempDetailProducts[k].Detail.length;
                    l++
                  ) {
                    for (var n = 0; n < productOrderDetail.Detail.length; n++) {
                      if (
                        tempDetailProducts[k].Detail[l].color ===
                          productOrderDetail.Detail[n].color &&
                        tempDetailProducts[k].Detail[l].size ===
                          productOrderDetail.Detail[n].size
                      ) {
                        //cập nhập lại số lượng của product detail
                        tempDetailProducts[k].Detail[l].inventory =
                          tempDetailProducts[k].Detail[l].inventory +
                          productOrderDetail.Detail[n].quantity;
                      }
                    }
                  }

                  //update detail product trong model products
                  console.log("sau update", tempDetailProducts[k].Detail);
                  props.updateProduct(
                    tempDetailProducts[k]._id,
                    tempDetailProducts[k].Detail
                  );
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
    let arr = detailProducts;
    arr.push(props.detailProduct);
    setDetailProducts(arr);
    console.log("arr", detailProducts);
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
    }
  };
};
export default connect(stateMapToProps, dispatchMapToProps)(OrderImport);
