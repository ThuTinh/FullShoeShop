import React from "react";
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
import './style.css'
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
}));

function Login() {
  const classes = useStyles();

  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false
  });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      className={classes.margin}
    >
      <div style = {{marginTop: '5%'}}>
        <h4 className="title-login">WELCOME TO SHOE </h4>
        <h1 className="title-login">SHOP</h1>
      </div>
      <div>
        <FormControl>
          <InputLabel
            htmlFor="adornment-userName"
            className={classes.paddingLabel}
          >
            Username
          </InputLabel>
          <Input id="adornment-userName" className={classes.width400} />
        </FormControl>
      </div>
      <div style = {{marginTop:'20px'}}>
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
        style = {{backgroundColor :"#f75f00", marginTop: '50px'}}
        
      >
        Đăng nhập
      </Button>
      <div>
        <Grid container direction="row" justify="center" alignItems="center">
          <Button
            variant="contained"
            color="secondary"
            className={classes.width200}
            style = {{backgroundColor :"#f75f00"}}
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
            <i className = "forget-pass">Quên mật khẩu?</i>
          </div>
        </Grid>
      </div>
    </Grid>
  );
}

export default Login;
