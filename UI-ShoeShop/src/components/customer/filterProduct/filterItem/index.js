import React, { useState } from "react";
import Checkbox from "@material-ui/core/Checkbox";

function FilterItem(props) {
  return (
    <>
      <div className="divide"></div>
      <div id="sub" style={{ marginLeft: "10%" }}>
        <Checkbox
          color="primary"
          labe
          inputProps={{
            "aria-label": "secondary checkbox"
          }}
        />
        {props.children.name}
      </div>
    </>
  );
}

export default FilterItem;
