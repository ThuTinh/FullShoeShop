import React from "react";
import Carts from "../../../customer/cart";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles(theme => ({
  paddingLabel: {},
  width100: {
    marginBottom: "20px",
    width: "80%"
  }
}));

function OrderDetail() {
  const classes = useStyles();

  return (
    <div style={{ width: "100%" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <h6>Trạng thái đơn hàng: Đã duyệt</h6>
        </div>

        <div>
          <Checkbox color="primary" /> Duyệt
        </div>
      </div>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid
          item
          sm={10}
          direction="column"
          justify="flex-start"
          alignItems="center"
        >
          <h6>THÔNG TIN KHÁCH HÀNG</h6>
          <div
            style={{
              width: "10%",
              height: "4px",
              backgroundColor: "#F75F00",
              marginBottom: "30px"
            }}
          ></div>
        </Grid>
        <Grid item sm={5}>
          <FormControl style={{ width: "100%" }}>
            <InputLabel
              htmlFor="adornment-userName"
              className={classes.paddingLabel}
            >
              Username
            </InputLabel>
            <Input id="adornment-address" className={classes.width100} />
          </FormControl>
          <FormControl style={{ width: "100%" }}>
            <InputLabel
              htmlFor="adornment-address"
              className={classes.paddingLabel}
            >
              Địa chỉ
            </InputLabel>
            <Input id="adornment-userName" className={classes.width100} />
          </FormControl>
        </Grid>
        <Grid item sm={5}>
          <FormControl style={{ width: "100%" }}>
            <InputLabel
              htmlFor="adornment-emial"
              className={classes.paddingLabel}
            >
              Email
            </InputLabel>
            <Input id="adornment-email" className={classes.width100} />
          </FormControl>

          <FormControl style={{ width: "100%" }}>
            <InputLabel
              htmlFor="adornment-phone"
              className={classes.paddingLabel}
            >
              Số điện thoại
            </InputLabel>
            <Input id="adornment-phone" className={classes.width100} />
          </FormControl>
        </Grid>

        <Grid
          item
          sm={10}
          direction="column"
          justify="flex-start"
          alignItems="center"
        ></Grid>
        <Grid sm={10} item>
          <Carts></Carts>
        </Grid>
      </Grid>
    </div>
  );
}

export default OrderDetail;
