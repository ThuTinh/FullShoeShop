import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Button } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import KindItem from "./kindItem";
import {
  atcGetCategoryRequest,
  atcCreateCaregoryRequest,
  atcUpdateCaregoryRequest
} from "../../../actions";
import { connect } from "react-redux";

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
   
    width: "300px",
    height: "30px"
  },
  label:{
    width: '80px'
  }
}));

function KindManager(props) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [parent, setParent] = useState("Giày nam");
  const [nameCategory, setNameCategory] = useState("");
  const [idUpdate, setIdUpdate] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    props.getCategories();
  }, []);

  useEffect(() => {}, [props.categories]);

  const renderCategoryItem = categories => {
    var result = "";
    if (categories && categories.length > 0) {
      result = categories.map((category, index) => {
        return (
          <KindItem
            key={index}
            category={category}
            edit={editCategory}
          ></KindItem>
        );
      });
    }
    return result;
  };

  const editCategory = categoryedit => {
    console.log("categoryedit", categoryedit);
    if (props.categories && props.categories.length > 0) {
      props.categories.map((category, index) => {
        if (categoryedit.parent == category._id) {
          setParent(category.name);
        }
      });
    }
    setNameCategory(categoryedit.name);
    setIdUpdate(categoryedit._id);
    handleOpen();
  };

  const createCategory = () => {
    var id = "";
    if (props.categories && props.categories.length > 0) {
      props.categories.map((category, index) => {
        if (parent == category.name) {
          id = category._id;
        }
      });
    }

    let category = {
      parent: id,
      name: nameCategory
    };
    if (idUpdate.length > 0) {
      props.updatecategory(idUpdate, category);
    } else {
      props.createCategory(category);
    }

    handleClose();
  };
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          variant="contained"
          color="primary"
          style={{ backgroundColor: "#512c62" }}
          onClick={handleOpen}
        >
          Thêm loại
        </Button>
      </div>

      <div>
        <h6>DANH SÁCH LOẠI</h6>
        <div
          style={{
            width: "10%",
            height: "4px",
            backgroundColor: "#F75F00",
            marginBottom: "30px"
          }}
        ></div>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">LOẠI CHA</TableCell>
              <TableCell align="center">LOẠI CON</TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{renderCategoryItem(props.categories)}</TableBody>
        </Table>
      </div>
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
            <h5 id="transition-modal-title">
              {" "}
              {idUpdate.length > 0 ? "Cập nhập phân loại" : "Thêm phân loại"}
            </h5>
            <div id="transition-modal-description">
              <div>
                <label className={classes.label}>Loại cha</label>
                <select
                  className={classes.input}
                  onChange={e => {
                    setParent(e.target.value);
                  }}
                  value={parent}
                >
                  <option value="Giày nam">Giày nam</option>
                  <option value="Giày nữ">Giày nữ</option>
                </select>
              </div>
              <div>
                <label className={classes.label}>Tên loại</label>
                <input
                  className={classes.input}
                  value={nameCategory}
                  onChange={e => {
                    setNameCategory(e.target.value);
                  }}
                />
              </div>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleClose}
                  style={{
                    backgroundColor: "#512c62",
                    marginTop: "10px",
                    marginRight: "10px"
                  }}
                >
                  Hủy
                </Button>
                <Button
                  onClick={createCategory}
                  variant="contained"
                  color="primary"
                  style={{ backgroundColor: "#512c62", marginTop: "10px" }}
                >
                  Lưu
                </Button>
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

const stateMapToProps = (state, props) => {
  return {
    categories: state.categories
  };
};

const dispatchMapToProps = (dispatch, props) => {
  return {
    getCategories: () => {
      dispatch(atcGetCategoryRequest());
    },
    createCategory: category => {
      dispatch(atcCreateCaregoryRequest(category));
    },
    updatecategory: (id, category) => {
      dispatch(atcUpdateCaregoryRequest(id, category));
    }
  };
};
export default connect(
  stateMapToProps,
  dispatchMapToProps
)(KindManager);
