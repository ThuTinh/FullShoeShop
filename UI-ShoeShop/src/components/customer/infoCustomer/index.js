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
    marginBottom: "-10px"
  },
  containerTextField: {
    display: "flex",
    justifyItems: "center",
    justifyContent: "flex-start"
  },
  butonSave: {
    color: "#ffffff",
    marginTop: "30px",
    backgroundColor: "#D9A128",
    padding: "8px",
    width: "100px",
    border: "none"
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
    <div
      style={{
        marginLeft: "40px",
        width: "100%",
        backgroundColor: "#ffffff",
        padding: "20px"
      }}
    >
      <h5 style={{ marginTop: "10px", color: "#2b2b28" }}>HỒ SƠ CỦA TÔI</h5>
      <div
        style={{
          width: "10%",
          height: "4px",
          backgroundColor: "#e3b04b",
          marginBottom: "30px"
        }}
      ></div>
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
          <div className={classes.containerTextField}>
            <TextField
              id="standard-name"
              label="Địa chỉ nhận hàng"
              className={classes.textField}
              margin="normal"
            />
            <div className="change-infor">
              <p className={classes.textChange}>
                <i>Thay đổi</i>
              </p>
            </div>
          </div>
          <button className={classes.butonSave}>Lưu</button>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyItems: "center",
            width: 200,
            alignItems: "end",
            marginLeft: "30px"
          }}
        >
          <img className={classes.avatar} src={avatar} alt="avatar" />
          <div>
            <button className={classes.butonSave}>CHọn ảnh</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default InforCustomer;
