import React, { useState, useEffect } from "react";
import { Grid, Button } from "@material-ui/core";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import shoe from "../../../../assets/image/shoe.jpg";
import "./style.css";
function getSteps() {
  return [" Đang xử lý", "Đang giao", "Đã nhận hàng"];
}

function OrderItem(props) {
  const [activeStep, setActiveStep] = useState(3);
  const orderItem = props.orderItem;
  const steps = getSteps();

  useEffect(() => {
    switch (props.status) {
      case "PAID":
      case "ORDERED":
        setActiveStep(0);
        break;
      case "SHIPPING":
        setActiveStep(1);
        break;
      case "PAYED":
        setActiveStep(3);
        break;
      default:
        setActiveStep(0);

        break;
    } 
  }, []);
const CancelOrderItem = ()=>{
  props.cancelProductOrderItem(props.orderId, props.orderItem._id);
}
  return (
    <div className="container-order">
      <div className="container-order-item">
        <Grid container style={{ width: "100%" }}>
          <Grid sm={3} item>
            <img
              style={{ width: "75%", height: "75%" }}
              alt="example"
              src={shoe}
            />
          </Grid>
          <Grid sm={3} item>
            <h6> {orderItem.productId.nameShow || orderItem.productId.name}</h6>
            <p> Số lượng: {orderItem.quantity}</p>
            <p>Ngày mua: 2-2-2019</p>
            <button className="fill-button" onClick = {()=>{CancelOrderItem()}}>Hủy</button>
          </Grid>

          <Grid sm={6} item>
            <Stepper
              alternativeLabel
              activeStep={activeStep}
              style={{ backgroundColor: "transparent" }}
            >
              {steps.map(label => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "flex-end"
              }}
            >
              <h5 style={{ color: "#d9a128" }}>
                Tổng tiền: {parseInt(orderItem.price * orderItem.quantity)}
              </h5>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default OrderItem;
