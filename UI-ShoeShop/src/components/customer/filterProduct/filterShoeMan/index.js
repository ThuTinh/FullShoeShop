import React, { useState } from "react";
import { Checkbox, Box, Typography, Divider } from "@material-ui/core";

function FilterShoeMan(props) {
  return (
    < >
      <Box boxShadow={2}style = {{backgroundColor:'#ffffff', borderRadius:'10px', padding:'15px'}} mb={5} >
        <Box fontSize={25} mb={2} alignItems="center" color="#D9A128" fontWeight={700}>
          GIÀY NAM
        </Box>
        <Box>
          <Checkbox fontSize ={10} /> Giày cao got
          <Divider  />
        </Box>
        <Box>
          <Checkbox /> Giày cao got
          <Divider  />
        </Box>
        <Box>
          <Checkbox /> Giày cao got
          <Divider  />
        </Box>
        <Box>
          <Checkbox /> Giày cao got
          <Divider />
        </Box>
      </Box>
    </>
  );
}

export default FilterShoeMan;
