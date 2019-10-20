import React from "react";
import Carts from "../../../customer/cart";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from '@material-ui/core/Checkbox'
import "./style.css";

const useStyles = makeStyles(theme => ({
  paddingLabel: {
    margin: "auto"
  },
  width100: {
    marginBottom: "50px",
    width: "80%"
  }
}));

function OrderDetail() {
  const classes = useStyles();

  return (
    <div style={{ marginTop: "180px", width: "100%" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <h6>Trạng thái đơn hàng: Đã duyệt</h6>
        </div>

        <div>
          <Checkbox color="primary" /> Duyệt
        </div>
      </div>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={2}
      >
        <Grid
          item
          sm={10}
          direction="column"
          justify="flex-start"
          alignItems="center"
        >
          <h4>Thông tin khách hàng</h4>
          <div className="divid "></div>
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
        >
          <h5>Danh sách sản phẩm</h5>
          <div className="divid"></div>
        </Grid>
        <Grid sm={10} item>
          <Carts></Carts>
        </Grid>
      </Grid>
    </div>
  );
}

export default OrderDetail;
