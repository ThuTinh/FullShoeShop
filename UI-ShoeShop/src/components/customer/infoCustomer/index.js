import React from "react";
import "./style.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import avatar from "../../../assets/image/avatar.JPG";
const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 350,
    marginBottom: "10px"
  },
  containerTextField: {
    display: "flex",
    justifyItems: "center",
    justifyContent: "flex-start"
  },
  butonSave: {
 
    marginTop: "30px",
    backgroundColor: "#F75F00"
  },
  avatar: {
    width: "100px",
    height: "100px",
    borderRadius: "50px",
    marginBottom: "10px"
  },
  textChange: {
    margin: 0
  },

  containerInfo: {
    display: "flex"
  }
}));
function InforCustomer() {
  const classes = useStyles();

  return (
    <div style={{ marginLeft: "40px", width: "100%" }}>
      <h3 style = {{marginTop: '10px', color:'#F75F00'}}>Hồ sơ của tôi</h3>
      <div className={classes.containerInfo}>
        <div style={{ width: "100%" }}>
          <div className={classes.containerTextField}>
            <TextField
              id="standard-name"
              label="Họ và tên"
              className={classes.textField}
              margin="normal"
              style={{ marginTop: "30px" }}
            />
            <div className="change-infor">
              <p className={classes.textChange}>
                <i>Thay đổi</i>
              </p>
            </div>
          </div>
          <div className={classes.containerTextField}>
            <TextField
              id="standard-name"
              label="Email"
              className={classes.textField}
              margin="normal"
            />
            <div className="change-infor">
              <p className={classes.textChange}>
                <i>Thay đổi</i>
              </p>
            </div>
          </div>
          <div className={classes.containerTextField}>
            <TextField
              id="standard-name"
              label="Số điện thoại"
              className={classes.textField}
              margin="normal"
            />
            <div className="change-infor">
              <p className={classes.textChange}>
                <i>Thay đổi</i>
              </p>
            </div>
          </div>
          <div className={classes.containerTextField}>
            <TextField
              id="standard-name"
              label="Địa chỉ"
              className={classes.textField}
              margin="normal"
            />
            <div className="change-infor">
              <p className={classes.textChange}>
                <i>Thay đổi</i>
              </p>
            </div>
          </div>
          <Button
            variant="contained"
            color="secondary"
            className={classes.butonSave}
          >
            Lưu
          </Button>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyItems: "center",
            width: 200,
            alignItems: "end",
            marginLeft: '30px'
          }}
        >
          <img className={classes.avatar} src={avatar} alt="avatar" />
          <Button variant="outlined" color="secondary">
            Chọn ảnh
          </Button>
        </div>
      </div>
    </div>
  );
}
export default InforCustomer;
