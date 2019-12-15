import React, { useState } from "react";
import { Checkbox, Box, Typography, Divider } from "@material-ui/core";

function FilterShoePrice(props) {

  return (
    <>
       <Box
        boxShadow={2}
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "10px",
          padding: "15px"
        }}
        mb={5}
      >
        <Box
          fontSize={25}
          mb={2}
          alignItems="center"
          color="#D9A128"
          fontWeight={700}
        >
          GIÁ
        </Box>
        <Box>
          <Checkbox onChange = {()=>{props.filter("price",[0, 200000])}} /> 0-200.000
          <Divider />
        </Box>
        <Box>
          <Checkbox  onChange = {()=>{props.filter("price",[200000, 400000])}} /> 200.000-400.000
          <Divider />
        </Box>
        <Box>
          <Checkbox  onChange = {()=>{props.filter("price",[400000, 600000])}} /> 400.000-600.000
          <Divider />
        </Box>
        <Box>
          <Checkbox  onChange = {()=>{props.filter("price",[600000, 1000000])}} /> 600.000-1000.000
          <Divider />
        </Box>
        <Box>
          <Checkbox  onChange = {()=>{props.filter("price",[1000000])}} /> >1000.000
          <Divider />
        </Box>
      </Box>
    </>
  );
}

export default FilterShoePrice;
