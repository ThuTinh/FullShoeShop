/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from "react";
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
import Checkbox from "@material-ui/core/Checkbox";
import { Redirect } from "react-router-dom";
import "./style.css";
import { actloginRequest } from "../../actions";
import { connect } from "react-redux";

const useStyles = makeStyles(theme => ({
  conatiner: {
    position: "absolute",
    zIndex: 100,
    top: "10%",
    right: "10%"
  },
  width400: {
    width: "400px",
    marginTop: "30px"
  },
  width200: {
    width: "200px"
  },
  paddingLabel: {
    paddingBottom: "10px",
    color: "#fff"
  },
  notchedOutline: {
    borderWidth: "1px",
    borderColor: "yellow !important"
  }
}));

function Login(props) {
  const classes = useStyles();

  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const [remember, setRemameber] = useState();

  useEffect(() => {
    if (props.resLogin.email) {
      setRedirect(true);
    }
  }, [props.resLogin]);
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

  const sign = () => {
    <Redirect to="/admin" />;
  };
  return (
    <div>
      <div className="background"> </div>
      <div className={classes.conatiner}>
        <Grid
          container
          direction="column"
          justify="flex-start"
          alignItems="center"
        >
          {redirect && <Redirect to="/admin" />}
          <div style={{ marginTop: "8%" }}>
            <h4 className="title-login">WELCOME TO SHOE </h4>
            <h1 className="title-login">SHOP</h1>
          </div>
          <div>
            <FormControl>
              <InputLabel htmlFor="email" className={classes.paddingLabel}>
                Email
              </InputLabel>
              <Input
                id="Email"
                className={classes.width400}
                name="email"
                onChange={e => {
                  setEmail(e.target.value);
                }}
                style = {{color: "#fff"}}
              />
            </FormControl>
          </div>
          <div style={{ marginTop: "20px" }}>
            <FormControl>
              <InputLabel
                htmlFor="adornment-password"
                className={classes.paddingLabel}
              >
                Password
              </InputLabel>
              <Input
                id="adornment-password"
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                name="password"
                onChange={handleChange("password")}
                style = {{color: "#fff"}}
                className={classes.width400}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      style  = {{color: "#fff"}}
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "400px",
              alignItems: "center"
            }}
          >
            <div style = {{color: "#fff"}}>
              <Checkbox
                checked={remember}
                onChange={event => {
                  setRemameber(event.target.checked);
                }}
                value="remember"
               style={{color: "#fff"}}
              />{" "}
              Ghi nhớ
            </div>
            <div
              style={{
                fontSize: "15px",
                fontWeight: 600,
                color: "#fff"
              }}
            >
              <i className="forget-pass">Quên mật khẩu?</i>
            </div>
          </div>
          <Button
            variant="contained"
            color="secondary"
            className={classes.width400}
            style={{ backgroundColor: "#f75f00", marginTop: "10px" }}
            onClick={() => props.login({ email, password })}
          >
            Đăng nhập
          </Button>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "400px",
              alignItems: "center",
              marginTop: "20px"
            }}
          >
            <div>
              <Button
                variant="contained"
                color="secondary"
                style={{
                  backgroundColor: "#512c62",
                  marginTop: "10px",
                  width: "195px",
                  height: "45px"
                }}
                onClick={() => props.login({ email, password })}
              >
                FaceBook
              </Button>
            </div>
            <div>
              <Button
                variant="contained"
                color="secondary"
                style={{
                  backgroundColor: "#512c62",
                  marginTop: "10px",
                  width: "195px",
                  height: "45px"
                }}
                onClick={() => props.login({ email, password })}
              >
                Google
              </Button>
            </div>
          </div>
        </Grid>
      </div>
    </div>
  );
}
const stateMapToProps = state => {
  return {
    resLogin: state.login
  };
};
const dispatchMapToProps = (dispatch, props) => {
  return {
    login: login => {
      dispatch(actloginRequest(login));
    }
  };
};
export default connect(
  stateMapToProps,
  dispatchMapToProps
)(Login);
