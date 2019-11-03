import React, { useEffect, useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { connect } from "react-redux";
import { Button } from "@material-ui/core";
import {
  atcGetSuplierRequest,
  atcCreateSuplierRequest,
  atcDeleteSuplierRequest,
  atcGetSuplier
} from "../../../../actions";
import SuplierItem from "../suplierItem";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: "#43ab92",
    color: theme.palette.common.white
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

function ListSuplier(props) {
  const classes = useStyles();
  const supliers = props.supliers;
  const [open, setOpen] = useState(false);
  const [suplier, setSuplier] = useState({
    name: "",
    email: "",
    phone: "",
    address: ""
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onChange = event => {
    setSuplier({
      ...suplier,
      [event.target.name]: event.target.value
    });
    console.log(suplier);
  };

  const createSuplier = ()=>{
    props.createSuplier(suplier);
    handleClose();
  }
  const renderSuplierItem = () => {
    var result = "";
    if (supliers && supliers.length > 0) {
      result = supliers.map((suplier, index) => {
        return (
          <SuplierItem
            key={index}
            suplier={suplier}
            index={index}
            deleteSuplier = {props.deleteSuplier}
            getSuplier = {props.getSuplier}
          ></SuplierItem>
        );
      });
    }
    return result;
  };

  useEffect(() => {
    props.getSupliers();
  }, []);
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          variant="contained"
          color="primary"
          style={{ backgroundColor: "#512c62" }}
          onClick={handleOpen}
        >
          Thêm nhà cung cấp
        </Button>
      </div>

      <Paper className={classes.root}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">STT</StyledTableCell>
              <StyledTableCell align="center">Tên nhà cung cấp</StyledTableCell>
              <StyledTableCell align="center">Địa chỉ</StyledTableCell>
              <StyledTableCell align="center">SDT</StyledTableCell>
              <StyledTableCell align="center">email</StyledTableCell>
              <StyledTableCell align="center">Sản phẩm</StyledTableCell>
              <StyledTableCell align="center"> Xóa</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>{renderSuplierItem()}</TableBody>
        </Table>
      </Paper>
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
            <h3 id="transition-modal-title">Thông tin nhà cung cấp</h3>
            <div id="transition-modal-description">
              <div>
                <label className={classes.label}>Tên NCC</label>
                <input
                  className={classes.input}
                  name="name"
                  value={suplier.name}
                  onChange={onChange}
                />
              </div>
              <div>
                <label className={classes.label}>Địa chỉ</label>
                <input
                  className={classes.input}
                  name="address"
                  value={suplier.address}
                  onChange={onChange}
                />
              </div>
              <div>
                <label className={classes.label}>SDT</label>
                <input
                  className={classes.input}
                  name="phone"
                  value={suplier.phone}
                  onChange={onChange}
                />
              </div>
              <div>
                <label className={classes.label}>Email</label>
                <input
                  className={classes.input}
                  name="email"
                  value={suplier.email}
                  onChange={onChange}
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
                  variant="contained"
                  color="primary"
                  onClick={createSuplier}
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

const stateMapToProps = state => {
  return {
    supliers: state.supliers
  };
};

const dispatchMapToProps = (dispatch, state) => {
  return {
    getSupliers: () => {
      dispatch(atcGetSuplierRequest());
    },
    getSuplier:(suplier)=>{
      dispatch(atcGetSuplier(suplier));
    },
    createSuplier: suplier => {
      dispatch(atcCreateSuplierRequest(suplier));
    },
    deleteSuplier: id=>{
      dispatch(atcDeleteSuplierRequest(id))
    }
  };
};

export default connect(
  stateMapToProps,
  dispatchMapToProps
)(ListSuplier);
