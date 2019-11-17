import React from "react";
import { Checkbox, Box, Divider } from "@material-ui/core";
import './style.css'

function CheckItem(props) {
  return (
    <>
      <Box>
        <Checkbox /> {props.categogy}
        <Divider />
      </Box>
    </>
  );
}

export default CheckItem;
