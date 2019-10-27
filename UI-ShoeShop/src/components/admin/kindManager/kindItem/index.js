import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import {  makeStyles } from "@material-ui/core/styles";
const usestyles = makeStyles(theme =>({
  icon: {
    color:"#512C62",
    marginRight: '10px',
    "&:hover":{
      color:"#F75F00",
      cursor: 'pointer'
    }
  }
}))
function KindItem() {
  const classes = usestyles();
  return (
    <>
      <TableRow>
        <TableCell rowSpan={4} align="center">
          Giày nữ
        </TableCell>
        <TableCell align="center">Giày thể thao</TableCell>
        <TableCell>
           <EditIcon className = {classes.icon}> </EditIcon> <DeleteIcon className = {classes.icon}> </DeleteIcon>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell align="center">Giày Cao got</TableCell>
        <TableCell>
           <EditIcon className = {classes.icon}> </EditIcon> <DeleteIcon className = {classes.icon}> </DeleteIcon>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell align="center"> Giày scandel</TableCell>
        <TableCell>
          <EditIcon className = {classes.icon}> </EditIcon> <DeleteIcon className = {classes.icon}> </DeleteIcon>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell align="center">convert</TableCell>
        <TableCell>
           <EditIcon className = {classes.icon}> </EditIcon> <DeleteIcon className = {classes.icon}> </DeleteIcon>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell rowSpan={4} align="center">
          Giày nam
        </TableCell>
        <TableCell align="center">Giày thể thao</TableCell>
        <TableCell>
           <EditIcon className = {classes.icon}> </EditIcon> <DeleteIcon className = {classes.icon}> </DeleteIcon>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell align="center">Giày scandel</TableCell>
        <TableCell>
           <EditIcon className = {classes.icon}> </EditIcon> <DeleteIcon className = {classes.icon}> </DeleteIcon>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell align="center"> convert</TableCell>
        <TableCell>
           <EditIcon className = {classes.icon}> </EditIcon> <DeleteIcon className = {classes.icon}> </DeleteIcon>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell align="center">Boo</TableCell>
        <TableCell>
           <EditIcon className = {classes.icon}> </EditIcon> <DeleteIcon className = {classes.icon}> </DeleteIcon>
        </TableCell>
      </TableRow>
    </>
  );
}
export default KindItem;
