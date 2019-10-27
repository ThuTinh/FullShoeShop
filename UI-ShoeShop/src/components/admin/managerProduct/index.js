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
        <Button
          variant="contained"
          color="primary"
          style={{ backgroundColor: "#512c62" }}
          onClick={handleOpen}
        >
          Thêm sản phẩm mới
        </Button>
      </div>
      <Paper className={classes.root}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Mã sản phẩm</StyledTableCell>
              <StyledTableCell align="center">Tên sản phẩm</StyledTableCell>
              <StyledTableCell align="center"> Loại sản phẩm</StyledTableCell>
              <StyledTableCell align="center">Số lượng tồn kho</StyledTableCell>
              <StyledTableCell align="center">
                {" "}
                Chi tiết sản phẩm
              </StyledTableCell>
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
            <h5 id="transition-modal-title">THÔNG TIN SẢN PHẨM </h5>
            <div id="transition-modal-description">
              <div>
                <label className={classes.label}>Mã sản phẩm</label>
                <input className={classes.input} />
              </div>
              <div>
                <label className={classes.label}>Tên sản phẩm</label>
                <input className={classes.input} />
              </div>
              <div>
                <label className={classes.label}>SL tồn kho</label>
                <input className={classes.input} />
              </div>
              
              <div>
                <label className={classes.label}> Loại cha: </label>
                <select className={classes.input}>
                  <option>Cha1</option>
                  <option>Cha4</option>
                  <option>Cha3</option>
                  <option>Cha2</option>
                </select>
              </div>
              <div>
                <label className={classes.label}>Loại Con: </label>
                <select className={classes.input}>
                  <option>Con1</option>
                  <option>COn4</option>
                  <option>Con3</option>
                  <option>Con2</option>
                </select>
              </div>
              <div>
                <label className={classes.label} style = {{marginRight: '30px'}}>Trạng thái</label>
                <input type="checkbox"  className /> Hiện
              </div>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Button
                  variant="contained"
                  color="primary"
                  onClick={handleClose}
                  style={{ backgroundColor: "#512c62" , marginTop: '10px', marginRight: '10px'}}
                >
                  Hủy
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ backgroundColor: "#512c62" , marginTop: '10px'}}
                >
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
