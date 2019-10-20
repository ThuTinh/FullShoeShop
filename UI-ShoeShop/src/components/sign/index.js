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
    marginTop: "5%"
  },
  tilte: {
    width: "100%",
    textAlign: "center",
    marginTop: "10px",
    marginBottom: "10px",
    color: "#F75F00"
  }
}));

function Sign() {
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
    <div
      style={{
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        display: "flex"
      }}
    >
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
                <Input id="name" className={classes.width400} />
              </FormControl>
            </div>

            <div>
              <FormControl>
                <InputLabel htmlFor="name">Số điện thoại</InputLabel>
                <Input id="name" type="tel" className={classes.width400} />
              </FormControl>
            </div>
            <div>
              <FormControl>
                <InputLabel htmlFor="address">Địa chỉ</InputLabel>
                <Input id="address" className={classes.width400} />
              </FormControl>
            </div>
            <div>
              <FormControl>
                <InputLabel
                  htmlFor="shipAdress"
                  className={classes.paddingLabel}
                >
                  Địa chỉ ship
                </InputLabel>
                <Input id="shipAdress" className={classes.width400} />
              </FormControl>
            </div>
            <div>
              <FormControl>
                <InputLabel htmlFor="email" type="email">
                  Email
                </InputLabel>
                <Input id="email" className={classes.width400} />
              </FormControl>
            </div>
            <div style={{ marginBottom: "20px" }}>
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
              <Button variant="contained" color="secondary">
                Đăng kí
              </Button>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Sign;
