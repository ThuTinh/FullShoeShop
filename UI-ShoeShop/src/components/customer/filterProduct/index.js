import React, { useEffect, useState } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import "./style.css";
import { atcGetCategoryRequest } from "../../../actions";
import { connect } from "react-redux";
import FilterItem from "./filterItem";

function FilterProduct(props) {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true
  });

  useEffect(() => {
    props.getCategory();
  }, []);

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  const renderWomenShoes = () => {
    var result = "";
    console.log("aaa", props.categories);
    if (props.categories && props.categories.length > 0) {
      var i = 0;
      for (i = 0; i < props.categories.length; i++) {
        if (props.categories[i].name == "Giày nữ") {
          if (
            props.categories[i].children &&
            props.categories[i].children.length > 0
          ) {
            result = props.categories[i].children.map((children, index) => {
              return <FilterItem key={index} children={children}></FilterItem>;
            });
          }
          break;
        }
      }
    }
    return result;
  };

  const renderManShoes = () => {
    var result = "";
    console.log("aaa", props.categories);
    if (props.categories && props.categories.length > 0) {
      var i = 0;
      for (i = 0; i < props.categories.length; i++) {
        if (props.categories[i].name == "Giày nam") {
          if (
            props.categories[i].children &&
            props.categories[i].children.length > 0
          ) {
            result = props.categories[i].children.map((children, index) => {
              return <FilterItem key={index} children={children}></FilterItem>;
            });
          }
          break;
        }
      }
    }
    return result;
  };
  return (
    <div className="filter-contaner">
      <div className="filter-tile">Lọc sản phẩm</div>
      <div className = "content">
        <Checkbox style={{ visibility: "hidden" }} />
      GIÀY NỮ
      </div>
      {renderWomenShoes()}
      <div className="divide"></div>
      <div className = "content">
        <Checkbox style={{ visibility: "hidden" }} />
        GIÀY NAM
      </div>
      {renderManShoes()}
      <div className = "content">
      <Checkbox style={{ visibility: "hidden" }} />
      MỨC GIÁ
      </div>
      <div className="divide"></div>
      <div id="sub" style={{ marginLeft: "10%" }}>
        <Checkbox
          onChange={handleChange("checkedB")}
          value="checkedB"
          color="primary"
          labe
          inputProps={{
            "aria-label": "secondary checkbox"
          }}
        />
        0-200
        <div className="divide"></div>
        <Checkbox
          onChange={handleChange("checkedB")}
          value="checkedC"
          color="primary"
          labe
          inputProps={{
            "aria-label": "secondary checkbox"
          }}
        />
        200-500
        <div className="divide"></div>
        <Checkbox
          onChange={handleChange("checkedB")}
          value="checkedC"
          color="primary"
          labe
          inputProps={{
            "aria-label": "secondary checkbox"
          }}
        />
        500-1000
        <div className="divide"></div>
        <Checkbox
          onChange={handleChange("checkedB")}
          value="checkedC"
          color="primary"
          labe
          inputProps={{
            "aria-label": "secondary checkbox"
          }}
        />
        trên 1000
      </div>
    </div>
  );
}

const stateMapToProps = (state, props) => {
  return {
    categories: state.categories
  };
};
const dispatchMapToProps = (dispatch, props) => {
  return {
    getCategory: () => {
      dispatch(atcGetCategoryRequest());
    }
  };
};
export default connect(
  stateMapToProps,
  dispatchMapToProps
)(FilterProduct);
