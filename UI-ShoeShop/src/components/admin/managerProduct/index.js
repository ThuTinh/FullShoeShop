import React, { useState, useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import ProductItem from "./productItem";
import { Button } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import SearchBar from "material-ui-search-bar";
import {
  atcGetProductsRequest,
  atcDeleteProductRequest,
  atcGetCategoryRequest,
  atcCreateProductRequest,
  atcUpdateProductRequest,
  atcGetProduct,
  atcSearchProductRequest
} from "../../../actions";
import SnackbarContentWrapper from "../../message";
import Snackbar from "@material-ui/core/Snackbar";
import { connect } from "react-redux";

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: "#F5F5F5",
    color: theme.palette.common.black
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },

  table: {
    minWidth: 700
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #Fff",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  },
  input: {
    marginLeft: "50px",
    width: "300px",
    height: "30px"
  },

  label: {
    width: "100px"
  }
}));

function ManagerProduct(props) {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const [chooseParent, setChooseParent] = useState("Giày nam");
  const [childrens, setChildrens] = useState([]);
  const [subParent, setSubParent] = useState("");
  const [nameProduct, setNameProduct] = useState("");
  const [idUpdate, setIdUpdate] = useState("");
  const [checkUpdate, setCheckUpdate] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [message, setMessage] = useState("");
  const [variantMessage, setVariantMessage] = useState("info");
  const [filter, setFilter] = useState("");
  const [status, setStatus] = useState(false);

  const atcChooseParent = e => {
    setChooseParent(e.target.value);
    console.log("e.target.value", e.target.value);
    console.log("chooseParent", chooseParent);
    console.log("catelogyProps", props.categories);

    if (props.categories && props.categories.length > 0) {
      var lsChildren = [];
      props.categories.map((category, index) => {
        if (chooseParent !== category.name) {
          if (category.children && category.children.length > 0) {
            lsChildren = category.children.map((children, index) => {
              return children;
            });
            setChildrens(lsChildren);
            console.log("lsChildren", lsChildren);
          }
        }
      });
    }
  };

  const atcChooseSubParent = e => {
    setSubParent(e.target.value);
    console.log("e.target.value", e.target.value);
  };
  const renderOption = lsChildren => {
    var result = "";
    if (lsChildren && lsChildren.length > 0) {
      result = lsChildren.map((children, index) => {
        return (
          <option key={index} value={children._id}>
            {children.name}
          </option>
        );
      });
    }
    return result;
  };

  const setDefaultValue = () => {
    setChooseParent("Giày nam");
    setChildrens([]);
    setCheckUpdate(false);
  };

  const createProduct = () => {
    let product = {
      name: nameProduct,
      categories: subParent,
      status: status
    };
    if (idUpdate.length > 0) {
      try {
        props.updateProduct(idUpdate, product);
        showMessage("success", "Cập nhập thành công!");
      } catch (error) {
        showMessage("info", "cập nhập không thành công!");
      }
    } else {
      try {
        props.createProduct(product);
        showMessage("success", "Tạo thành công!");
      } catch (error) {
        showMessage("info", "Tạo không thành công!");
      }
    }
    handleClose();
  };

  const handleOpen = () => {
    //Chưa ở trạng thái update
    console.log(checkUpdate);
    if (!checkUpdate) {
      if (props.categories && props.categories.length > 0) {
        var lsChildren = [];
        props.categories.map((category, index) => {
          if (chooseParent == category.name) {
            if (category.children && category.children.length > 0) {
              lsChildren = category.children.map((children, index) => {
                return children;
              });
              setChildrens(lsChildren);
              console.log("lsChildrenChuUpdate", lsChildren);
            }
          }
        });
      }
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    props.getProducts();
    props.getCategories();
  }, []);

  const btnCreate = () => {
    setCheckUpdate(false);
    setOpen(true);
  };

  const editProduct = product => {
    console.log("AA", product);
    setCheckUpdate(true);
    console.log("update", checkUpdate);
    setIdUpdate(product._id);
    setNameProduct(product.name);
    setStatus(product.status);
    if (product.categories != null) {
      setChooseParent(product.categories.parent.name);
      console.log("setCHooo", product.categories.parent.name);
      if (props.categories && props.categories.length > 0) {
        var lsChildren = [];
        props.categories.map((category, index) => {
          if (chooseParent !== category.name) {
            if (category.children && category.children.length > 0) {
              lsChildren = category.children.map((children, index) => {
                return children;
              });
              setChildrens(lsChildren);
              console.log("lsChildren", lsChildren);
            }
          }
        });
      }

      setSubParent(product.categories._id);
    }
    handleOpen();
  };
  const deleteProduct = id => {
    try {
      props.deleteProduct(id);
      showMessage("success", "Xóa thành công!");
    } catch (error) {
      showMessage("info", "Xóa không thành công!");
    }
  };
  const renderProductItem = () => {
    var result = "";
    if (props.products && props.products.length > 0) {
      result = props.products.map((product, index) => {
        return (
          <ProductItem
            key={index}
            index={index}
            product={product}
            deleteProduct={deleteProduct}
            editProduct={editProduct}
            getProduct={props.getProduct}
          ></ProductItem>
        );
      });
    }
    return result;
  };

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
  const search = async () => {
    if (filter !== "") await props.search(filter);
    console.log("12334", props.products);
  };
  const clearSearch = () => {
    setFilter("");
    props.getProducts();
  };
  return (
    <>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <button className="outline-button" onClick={btnCreate}>
          Thêm mới
        </button>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "flex-start"
        }}
      >
        <div style={{ width: "400px" }}>
          <SearchBar
            hintText="Tìm kiếm sản phẩm"
            onChange={text => {
              setFilter(text);
            }}
            onRequestSearch={search}
            style={{
              margin: "0 auto",
              maxWidth: 400
            }}
            value={filter}
          />
        </div>
      </div>
      <div>
        <button className="outline-button" onClick={clearSearch}>
          Hủy tìm kiếm
        </button>
      </div>

      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>STT</StyledTableCell>
            <StyledTableCell align="center">Tên sản phẩm</StyledTableCell>
            <StyledTableCell align="center"> Loại sản phẩm</StyledTableCell>
            <StyledTableCell align="center">Số lượng tồn kho</StyledTableCell>
            <StyledTableCell align="center">Trạng thái</StyledTableCell>
            <StyledTableCell align="center"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>{renderProductItem()}</TableBody>
      </Table>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h5 id="transition-modal-title">THÔNG TIN SẢN PHẨM </h5>
            <div id="transition-modal-description">
              <div>
                <label className={classes.label}>Tên sản phẩm</label>
                <input
                  className={classes.input}
                  value={nameProduct}
                  onChange={e => {
                    setNameProduct(e.target.value);
                  }}
                />
              </div>
              <div>
                <label className={classes.label}>SL tồn kho</label>
                <input className={classes.input} value={0} onChange={e => {}} />
              </div>

              <div>
                <label className={classes.label}> Loại cha: </label>
                <select
                  className={classes.input}
                  value={chooseParent}
                  onChange={atcChooseParent}
                >
                  <option value="Giày nam">Giày nam</option>
                  <option value="Giày nữ">Giày nữ</option>
                </select>
              </div>
              <div>
                <label className={classes.label}>Loại Con: </label>
                <select
                  className={classes.input}
                  onChange={atcChooseSubParent}
                  value={subParent}
                >
                  {renderOption(childrens)}
                </select>
              </div>
              <div>
                <label
                  className={classes.label}
                  style={{ marginRight: "50px" }}
                >
                  Trạng thái
                </label>
                <input
                  type="checkbox"
                  checked={status}
                  onChange={e => {
                    setStatus(e.target.checked);
                      console.log("ahihi", e.target.checked);
                  }}
                />{" "}
                Hoạt động
              </div>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button className="fill-button" onClick={handleClose}>
                  Hủy
                </button>
                <button className="fill-button" onClick={createProduct}>
                  Lưu
                </button>
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
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
    </>
  );
}

const stateMapToProps = (state, props) => {
  return {
    products: state.products,
    categories: state.categories
  };
};

const dispatchMapToProps = (dispatch, props) => {
  return {
    getProducts: () => {
      dispatch(atcGetProductsRequest());
    },
    deleteProduct: id => {
      dispatch(atcDeleteProductRequest(id));
    },
    getCategories: () => {
      dispatch(atcGetCategoryRequest());
    },
    createProduct: product => {
      dispatch(atcCreateProductRequest(product));
    },
    updateProduct: (id, product) => {
      dispatch(atcUpdateProductRequest(id, product));
    },
    getProduct: product => {
      dispatch(atcGetProduct(product));
    },
    search: filter => {
      dispatch(atcSearchProductRequest(filter));
    }
  };
};
export default connect(stateMapToProps, dispatchMapToProps)(ManagerProduct);
