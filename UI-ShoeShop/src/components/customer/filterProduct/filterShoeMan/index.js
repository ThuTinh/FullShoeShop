import React from "react";
import { Box } from "@material-ui/core";
import CheckItem from "../checkItem"

function FilterShoeMan(props) {
  const renderItem = () => {
    var result = "";
    console.log("2222", props.categories);
    const categories = props.categories;
    if (categories && categories.length > 0) {
      result = categories.map((categogy, index) => {
        return <CheckItem key={index + new Date()} categogy={categogy.name} />;
      });
    }
    return result;
  };
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
          GIÀY NAM
        </Box>
        {renderItem()}
      </Box>
    </>
  );
}

export default FilterShoeMan;
