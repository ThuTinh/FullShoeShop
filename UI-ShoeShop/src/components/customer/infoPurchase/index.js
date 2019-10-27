import React from "react";
import Carts from "../cart";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import { makeStyles } from "@material-ui/core/styles";
import "./style.css";

const useStyles = makeStyles(theme => ({
  paddingLabel: {
    margin: "auto"
  },
  width100: {
    marginBottom: "20px",
    width: "80%"
  }
}));

function InfoPurchase() {
  const classes = useStyles();

  return (
    <div style={{ marginTop: "180px", width: "100%" }}>
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
          <h6>THÔNG TIN KHÁCH HÀNG</h6>
          <div style = {{width: '10%', height: '4px', backgroundColor: "#F75F00", marginBottom: '30px'}}></div>
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
              Địa chỉ nhận
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
          <div><b>Phương thức: Thanh toán khi nhận hàng</b></div>
          <Carts></Carts>
        </Grid>
      </Grid>
    </div>

    // <div className="container">
    //   <h4 className="mb-3">Thông tin khách hàng</h4>
    //   <div className="divid mb-5"></div>
    //   <div className="row mb-5">
    //     <div className="col-6">
    //       <div className="form-group">
    //         <input placeholder="Họ và tên" className="form-control"></input>
    //       </div>
    //       <div className="form-group">
    //         <input className="form-control" placeholder="Địa chỉ"></input>
    //       </div>
    //     </div>
    //     <div className="col-6">
    //       <div className="form-group">
    //         <input placeholder="Email" className="form-control"></input>
    //       </div>
    //       <div className="form-group">
    //         <input className="form-control" placeholder="Số điện thoại"></input>
    //       </div>
    //     </div>
    //   </div>
    //   <h5 className="mb-3">Danh sách sản phẩm</h5>
    //   <div className="divid mb-5"></div>
    //   <div className="row">
    //     <Carts></Carts>
    //   </div>
    // </div>
  );
}

export default InfoPurchase;
