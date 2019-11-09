import React, { useState } from "react";
import { Grid, Button } from "@material-ui/core";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import shoe from "../../../../assets/image/shoe.jpg"
import "./style.css";
function getSteps() {
  return ["Select campaign settings", "Create an ad group", "Create an ad"];
}

function OrderItem() {
  const [activeStep, setActiveStep] = useState(1);
  const steps = getSteps();
  //   const handleNext = () => {
  //     setActiveStep(prevActiveStep => prevActiveStep + 1);
  //   };

  //   const handleBack = () => {
  //     setActiveStep(prevActiveStep => prevActiveStep - 1);
  //   };

  //   const handleReset = () => {
  //     setActiveStep(0);
  //   };
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
              <h6> Giày thể thao ABC</h6>
              <p>Số lượng 1</p>
              <p>Ngày mua: 20/10/2019</p>
              <button className = "fill-button">Hủy</button>
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
                <h5 style = {{color: "#d9a128"}}>Tổng tiền: 199.000</h5>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>

  );
}

export default OrderItem;
