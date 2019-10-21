/* eslint-disable no-unused-expressions */
import React , {useState, useEffect}from "react";
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
import { Redirect } from "react-router-dom";
import "./style.css";
import { actloginRequest } from "../../actions";
import {connect} from "react-redux";

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
  const [redirect, setRedirect] =useState(false)

  useEffect(()=>{
    if(props.resLogin.email){
      setRedirect(true);
    }
  },[props.resLogin])
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
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      className={classes.margin}
    >
      {
        redirect&& <Redirect to ="/admin"/>
      }
      <div style={{ marginTop: "5%" }}>
        <h4 className="title-login">WELCOME TO SHOE </h4>
        <h1 className="title-login">SHOP</h1>
      </div>
      <div>
        <FormControl>
          <InputLabel
            htmlFor="email"
            className={classes.paddingLabel}
          >
            Email
          </InputLabel>
          <Input id="Email" className={classes.width400} name = "email" onChange ={(e)=>{setEmail(e.target.value)}} />
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
            name = "password"
            onChange={handleChange("password")}
            className={classes.width400}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </div>
      <Button
        variant="contained"
        color="secondary"
        className={classes.width400}
        style={{ backgroundColor: "#f75f00", marginTop: "50px" }}
        onClick = {()=>props.login({email, password})}
      >
        Đăng nhập
      </Button>
      <div>
        <Grid container direction="row" justify="center" alignItems="center">
          <Button
            variant="contained"
            color="secondary"
            className={classes.width200}
            style={{ backgroundColor: "#f75f00" }}
            onClick={sign()}
          >
            Đăng kí
          </Button>
          <div
            style={{
              marginLeft: "30px",
              marginTop: "30px",
              fontSize: "15px",
              fontWeight: 600,
              color: "#f75f00",
              marginBottom: "30px",
              width: "170px"
            }}
          >
            <i className="forget-pass">Quên mật khẩu?</i>
          </div>
        </Grid>
      </div>
    </Grid>
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
