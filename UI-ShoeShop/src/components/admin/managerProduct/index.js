import React from "react";
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

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
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
  }
}));

function ManagerProduct() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button variant="contained" color="primary" onClick={handleOpen}>
          Thêm sản phẩm mới
        </Button>
      </div>
      <Paper className={classes.root}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Mã sản phẩm</StyledTableCell>
              <StyledTableCell align="center">Tên sản phẩm</StyledTableCell>
              <StyledTableCell align="center">Số lượng tồn kho</StyledTableCell>
              <StyledTableCell align="center"></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <ProductItem></ProductItem>
            <ProductItem></ProductItem>
            <ProductItem></ProductItem>
          </TableBody>
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
            <h3 id="transition-modal-title">Thêm sản phẩm</h3>
            <div id="transition-modal-description">
              <div>
                <label className={classes.label}>Mã sản phẩm</label>
                <input className={classes.input} />
              </div>
              <div>
                <label>Tên sản phẩm</label>
                <input className={classes.input} />
              </div>
              <div>
                <label>Số lượng tồn kho</label>
                <input className={classes.input} />
              </div>
              <div>
                <label>Trạng thái</label>
                <input type = "checkbox"/> Hiện
              </div>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <Button variant="contained" color="primary">
                  Lưu
                </Button>
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </>
  );
}
export default ManagerProduct;
