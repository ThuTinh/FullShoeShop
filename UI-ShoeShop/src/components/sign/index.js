import React, { useState ,useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Button from "@material-ui/core/Button";
import { actSignRequest } from "../../actions";
import { connect } from "react-redux";
import {Redirect} from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  margin: {
    margin: "5px",
    width: "100%"
  },
  width400: {
    width: "400px",
    marginTop: "30px"
  },
  width200: {
    width: "200px"
  },
  paddingLabel: {
    paddingBottom: "10px"
  },
  container: {
    paddingBottom: "5%",
    boxShadow: "-2px 4px 20px 2px rgba(87,70,11,0.7)",
    width: "600px",
    marginTop: "2%"
  },
  tilte: {
    width: "100%",
    textAlign: "center",
    marginTop: "10px",
    marginBottom: "10px",
    color: "#F75F00"
  }
}));

function Sign(props) {
  const classes = useStyles();

  const [values, setValues] = useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false
  });
  const [redirect, setRedirect] = useState(false)
useEffect(()=>{
console.log(props.resSign,'yeu tinh')
  if(props.resSign.email)
  { 
    setRedirect(true);
  }
},[props.resSign])

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [shipAddress, setShipAddress] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");


  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
    setPassword(event.target.value);
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
    
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };


  return (
    <div
      style={{
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        display: "flex"
      }}
    >
      {
        redirect&&<Redirect to={'/'}/>
      }
      <div className={classes.container}>
        <h3 className={classes.tilte}>ĐĂNG KÍ</h3>
        <Grid container spacing={4}>
          <Grid
            md={12}
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <div>
              <FormControl>
                <InputLabel htmlFor="name">Họ và Tên</InputLabel>
                <Input
                  id="name"
                  className={classes.width400}
                  onChange={(e)=>{setName(e.target.value)}}
                  name = "name"
                />
              </FormControl>
            </div>

            <div>
              <FormControl>
                <InputLabel htmlFor="name">Số điện thoại</InputLabel>
                <Input
                  id="name"
                  type="tel"
                  className={classes.width400}
                  onChange={(e)=>{setPhone(e.target.value)}}
                  phone = "phone"
                />
              </FormControl>
            </div>
            <div>
              <FormControl>
                <InputLabel htmlFor="address">Địa chỉ</InputLabel>
                <Input
                  id="address"
                  className={classes.width400}
                  onChange={(e)=>{setAddress(e.target.value)}}
                  name = "address"
                />
              </FormControl>
            </div>
            <div>
              <FormControl>
                <InputLabel
                  htmlFor="shipAdress"
                  className={classes.paddingLabel}
                >
                  Địa chỉ giao hàng
                </InputLabel>
                <Input
                  id="shipAdress"
                  className={classes.width400}
                  onChange={(e)=>{setShipAddress(e.target.value)}}
                  name = "shipAddress"
                />
              </FormControl>
            </div>
            <div>
              <FormControl>
                <InputLabel htmlFor="email" type="email">
                  Email
                </InputLabel>
                <Input
                  id="email"
                  className={classes.width400}
                  onChange={(e)=>{setEmail(e.target.value)}}
                  name = "email"
                />
              </FormControl>
            </div>
            <div style={{ marginBottom: "20px" }}>
              <FormControl>
                <InputLabel
                  htmlFor="adornment-password"
                  className={classes.paddingLabel}
                >
                  Mật khẩu
                </InputLabel>
                <Input
                  onChange={onchange}
                  id="adornment-password"
                  type={values.showPassword ? "text" : "password"}
                  value={values.password}
                  onChange={handleChange("password")}
                  className={classes.width400}
                  name = "password"
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {values.showPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </div>
            <div>
              <Button
                variant="contained"
                color="secondary"
                className={classes.width400}
                style={{ backgroundColor: "#F75F00" }}
                onClick={()=>{props.sign({name, email, address, shipAddress, password, phone})
              }}
              >
                Đăng kí
              </Button>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

const stateMapToProps = (state) => {
  return {
     resSign: state.sign
  }
}
const dispatchMapToProps = (dispatch, props) => {
  return {
    sign: sign => {
      dispatch(actSignRequest(sign));
    }
  };
};
export default connect(
  stateMapToProps,
  dispatchMapToProps
)(Sign);
