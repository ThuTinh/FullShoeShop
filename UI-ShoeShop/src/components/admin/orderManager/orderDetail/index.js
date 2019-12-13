import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import Switch from "@material-ui/core/Switch";
import { Container } from "@material-ui/core";
import { connect } from "react-redux";
import { atcGetOrderRequest, atcChangeStatusOrderRequest } from "../../../../actions";
import CartAdmin from "./cart";

const useStyles = makeStyles(theme => ({
  paddingLabel: {},
  width100: {
    marginBottom: "10px",
    width: "80%"
  }
}));

function OrderDetail(props) {
  const classes = useStyles();
  const [duyet, setDuyet] = useState(false);

  const [order, setOrder] = useState({});
  useEffect(() => {
    console.log("order ne em", props.order);
    setOrder(props.order);
  }, [props.order]);
  useEffect(() => {
    const id = props.match.params.id;
    props.getOrder(id);
  }, []);

  const approved = e => {
    setDuyet(e.target.checked);
    let status = "";
    if (e.target.checked) {
      switch (order.status) {
        case "PAID":
          status = "ORDERED";
          break;
        case "ORDERED":
          status = "SHIPPING";
          break;
          case "SHIPPING":
            status = "PAYED";
            break;
        default:
          status = "PAID";
          break;
      }
    } else {
      switch (order.status) {
        case "ORDERED":
          status = "PAID";
          break;
        case "SHIPPING":
          status = "ORDERED";
          break;
          case "PAYED":
            status = "SHIPPING";
            break;
        default:
          status = "PAID";
          break;
      }
    }
    props.changeStatus(order._id, status);
    console.log("dattaus ne", status);
  };
  return (
    <Container fixed>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <div>
          {order.status == "PAID" && <label>Duyệt</label>}
          {order.status == "ORDERED" && <label>Shipping</label>}
          {order.status == "SHIPPING" && <label>Hoàn thành</label>}
          {order.status == "CANCEL" && <label>Đã hủy</label>}
          <Switch checked={duyet} onChange={e => approved(e)} value="duyet" />
        </div>
      </div>
      <Grid>
        <Grid
          item
          sm={10}
          direction="column"
          justify="flex-start"
          alignItems="center"
        >
          <h6>THÔNG TIN KHÁCH HÀNG</h6>
          
        </Grid>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item sm={5}>
            <FormControl style={{ width: "100%" }}>
              <InputLabel
                htmlFor="adornment-userName"
                className={classes.paddingLabel}
              >
                Username
              </InputLabel>
              <Input
                id="adornment-address"
                className={classes.width100}
                readOnly
                value={order.name}
              />
            </FormControl>
            <FormControl style={{ width: "100%" }}>
              <InputLabel
                htmlFor="adornment-address"
                className={classes.paddingLabel}
              >
                Địa chỉ
              </InputLabel>
              <Input
                id="adornment-userName"
                className={classes.width100}
                readOnly
                value={order.shipAddress}
              />
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
              <Input
                id="adornment-email"
                className={classes.width100}
                readOnly
                value={order.email}
              />
            </FormControl>

            <FormControl style={{ width: "100%" }}>
              <InputLabel
                htmlFor="adornment-phone"
                className={classes.paddingLabel}
              >
                Số điện thoại
              </InputLabel>
              <Input
                id="adornment-phone"
                className={classes.width100}
                readOnly
                value={order.phone}
                name="phone"
              />
            </FormControl>
          </Grid>
        </Grid>
        <Grid sm={12} item style={{ marginTop: "20px" }}>
          <CartAdmin
            productOrders={order.products}
            totalPrice={order.totalPrice}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
const stateMapToProps = (state, props) => {
  return {
    order: state.order
  };
};
const dispatchMapToProps = (dispatch, props) => {
  return {
    getOrder: id => {
      dispatch(atcGetOrderRequest(id));
    },
    changeStatus: (orderId, status)=>{
      dispatch(atcChangeStatusOrderRequest(orderId, status));
    }
  };
};
export default connect(stateMapToProps, dispatchMapToProps)(OrderDetail);
