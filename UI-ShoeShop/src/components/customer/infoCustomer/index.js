import React,{useEffect, useState} from "react";
import "./style.css";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import avatar from "../../../assets/image/avatar.JPG";
import { connect } from "react-redux";
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
function InforCustomer(props) {
  const classes = useStyles();
  const [user, setUser] = useState(props.user)
  const [disName, setdisName]=useState(true)
  const [disEmail, setdisEmail]=useState(true)
  const [disPhone, setdisPhone]=useState(true)
  const [disAddress, setdisAddres]=useState(true)
  const [disShipAddress, setdisShipAddress]=useState(true)
  const [name, setName]=useState("")
  const [email, setEmail]=useState("")
  const [phone, setPhone]=useState("")
  const [address, setAddres]=useState("")
  const [shipAddress, setShipAddress]=useState("")

 
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
              disabled = {disName}
              name = "name"
              onChange = {(e)=>{setName(e.target.value)}}
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
              disabled = {disEmail}
              name = "email" onChange = {(e)=>{setEmail(e.target.value)}}

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
              disabled = {disPhone}
              name = "phone"
              onChange = {(e)=>{setPhone(e.target.value)}}
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
              disabled = {disAddress}
              name = "address"
              onChange = {(e)=>{setAddres(e.target.value)}}
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
              disabled = {disShipAddress}
              onChange = {(e)=>{setShipAddress(e.target.value)}}
              name = "shipAddress"
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
