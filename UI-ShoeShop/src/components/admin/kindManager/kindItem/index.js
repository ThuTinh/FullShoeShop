import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from "@material-ui/core/styles";
import { atcDeleteCaregoryRequest } from "../../../../actions";
import { connect } from "react-redux";
const usestyles = makeStyles(theme => ({
  icon: {
    color: "#512C62",
    marginRight: "10px",
    "&:hover": {
      color: "#F75F00",
      cursor: "pointer"
    }
  }
}));
function KindItem(props) {
  const classes = usestyles();
  const category = props.category;
  const numberCategorySub = category.children.length;
  const remove = id => {
    console.log("id ne", id);
    props.deleteCategory(id);
  };
  const renderContent = () => {
    console.log("render: ");
    var result = [];
    if (numberCategorySub === 0) {
      result[0] = (
        <TableRow key={0}>
          <TableCell rowSpan={4} align="center">
            {category.name}
          </TableCell>
          <TableCell align="center"></TableCell>
          <TableCell>
            <EditIcon className={classes.icon}> </EditIcon>{" "}
            <DeleteIcon className={classes.icon}> </DeleteIcon>
          </TableCell>
        </TableRow>
      );
    } else {
      result[0] = (
        <TableRow key={0}>
          <TableCell rowSpan={numberCategorySub} align="center">
            {category.name}
          </TableCell>
          <TableCell align="center">{category.children[0].name}</TableCell>
          <TableCell>
            <EditIcon className={classes.icon}> </EditIcon>{" "}
            <DeleteIcon
              className={classes.icon}
              onClick={() => remove(category.children[0]._id)}
            >
              {" "}
            </DeleteIcon>
          </TableCell>
        </TableRow>
      );

      for (var i = 1; i < numberCategorySub; i++) {
        result[i] = (
          <TableRow key={i}>
            <TableCell align="center">{category.children[i].name}</TableCell>
            <TableCell>
              <EditIcon className={classes.icon}> </EditIcon>{" "}
              <DeleteIcon
                className={classes.icon}
                onClick={() => remove(category.children[i]._id)}
              >
                {" "}
              </DeleteIcon>
            </TableCell>
          </TableRow>
        );
      }
    }
    console.log("render: ", numberCategorySub);
    return result;
  };
  return <>{renderContent()}</>;
}

const dispatchMapToProps = (dispatch, props) => {
  return {
    deleteCategory: id => {
      dispatch(atcDeleteCaregoryRequest(id));
    }
  };
};
export default connect(
  null,
  dispatchMapToProps
)(KindItem);
