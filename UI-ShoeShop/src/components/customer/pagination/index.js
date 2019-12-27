import React, { useState, useEffect } from "react";
import { IconButton, Paper } from "@material-ui/core";
import "./style.css";

function Pagination(props) {
  const itemPerPage = props.itemPerPage;
  const [choosePage, setChoosePage] = useState(props.curentPage);
  const totalItem = props.totalItem;
  const RenderPage = () => {
    // per page is 20 item

    var result = [];
    console.log("totalItem / itemPerPage", totalItem / itemPerPage);
    for (let i = 1; i <= Math.ceil(totalItem / itemPerPage); i++) {
      const item = (
        <IconButton
          key={i}
          onClick={() => {
            props.changeCurentPage(i);
            setChoosePage(i);
          }}
          style={{ backgroundColor: choosePage == i ? "#F0C366" : "#F5F5F5" , margin:'4px'}}
        >
          {i}
        </IconButton>
      );
      result.push(item);
    }
    return result;
  };
  const privious = () => {
    if (choosePage - 1 >= 1) {
      props.changeCurentPage(choosePage - 1);
      setChoosePage(choosePage - 1);
    }
  };
  const next = () => {
    if (choosePage + 1 <= Math.ceil(props.totalItem / itemPerPage)) {
      props.changeCurentPage(choosePage + 1);
      setChoosePage(choosePage + 1);
    }
  };
  return (
    <div style={{ textAlign: "center" }}>
      <IconButton onClick={privious}>{"<"}</IconButton>
      <RenderPage />
      <IconButton onClick={next}>{">"}</IconButton>
    </div>
  );
}

export default Pagination;
