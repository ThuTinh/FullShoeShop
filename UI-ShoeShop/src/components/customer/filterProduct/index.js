import React, { useEffect, useState } from "react";
import "./style.css";
import { atcGetCategoryRequest } from "../../../actions";
import { connect } from "react-redux";
import FilterShoeMan from "./filterShoeMan";
import FilterShoeWomen from "./filterShoeWomen";
import FilterShoePrice from "./filterShoePrice";

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
            // result = props.categories[i].children.map((children, index) => {
            //   return "";
            // });
            return <FilterShoeWomen key={new Date()} categories={props.categories[i].children}/>
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
            // result = props.categories[i].children.map((children, index) => {
            //   return "";
            // });
            return <FilterShoeMan key={new Date()} categories={props.categories[i].children} />
          }
          break;
        }
      }
    }
    return result;
  };
  return (
    <div>
      {/* <FilterShoeMan />
      <FilterShoeWomen/>
      <FilterShoePrice/> */}
      {renderManShoes()}
      {renderWomenShoes()}
      <FilterShoePrice/>
    
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
