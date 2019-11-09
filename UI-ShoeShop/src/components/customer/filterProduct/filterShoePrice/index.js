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
          <Checkbox  /> 0-200
          <Divider />
        </Box>
        <Box>
          <Checkbox /> 200-400
          <Divider />
        </Box>
        <Box>
          <Checkbox /> 400-600
          <Divider />
        </Box>
        <Box>
          <Checkbox /> 600-1000
          <Divider />
        </Box>
        <Box>
          <Checkbox /> >1000
          <Divider />
        </Box>
      </Box>
    </>
  );
}

export default FilterShoePrice;
