import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
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
function KindManager() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <div style  = {{display: 'flex', justifyContent: 'flex-end'}}>
        <Button variant="contained" color="primary" style = {{backgroundColor: "#512c62"}} onClick={handleOpen}>
        Thêm loại
        </Button>
      </div>

      <div>
        <h6>DANH  SÁCH LOẠI</h6>
        <div style = {{width: '10%', height: '4px', backgroundColor: "#F75F00", marginBottom: '30px'}}></div>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Loại cha</TableCell>
              <TableCell align="center">Loại con</TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <KindItem></KindItem>
          </TableBody>
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
            <h3 id="transition-modal-title">Thêm loại</h3>
            <div id="transition-modal-description">
            <div>
                <label className={classes.label}>Loại cha</label>
                <select className={classes.input}>
                    <option>Giày nam</option>
                    <option>Giày nữ</option>
                </select>
              </div>      
              <div>
                <label className={classes.label}>Tên loại</label>
                <input className={classes.input} />
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
    </div>
  );
}
export default KindManager;
