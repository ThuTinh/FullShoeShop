import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
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
    <div className="container-order-item">
      <Grid container style={{ width: "100%" }}>
        <Grid sm={2} item>
          <img
            style={{ width: "100", height: "100px" }}
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        </Grid>
        <Grid sm={4} item>
          <h6> Giày thể thao ABC</h6>
          <p>Số lượng 1</p>
        </Grid>

        <Grid sm={6} item>
          <Stepper
            alternativeLabel
            activeStep={activeStep}
            style={{ backgroundColor: "#f5f0e3" }}
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
            <h5>Tổng tiển: 199.000</h5>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default OrderItem;
