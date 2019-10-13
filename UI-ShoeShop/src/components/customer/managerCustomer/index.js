/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./style.css";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import DescriptionIcon from "@material-ui/icons/Description";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Route, Switch } from "react-router-dom";
import OrderList from "../orderManager/orderList";
import InforCustomer from "../infoCustomer";
import avatar from "../../../assets/image/avatar.JPG";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    marginBottom: "50px"
  },
  navbar: {
    backgroundColor: "tan"
  },
  inforCustomer: {
    marginLeft: "60px"
  },
  info: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "20px",
    marginLeft: "20px",
    marginRight: "20px",
    color: "#F75F00",
    fontWeight: 500
  },
  acount: {
    marginBottom: "20px",
    marginLeft: "20px",
    marginRight: "20px"
  },
  myOrder: {
    marginLeft: "20px",
    marginRight: "20px",
    marginBottom: "20px",

  },
  myFavorite: {
    marginLeft: "20px",
    marginRight: "20px"
  },
  imgInfor: {
    width: "80px",
    height: "80px",
    borderRadius: "40px",
    marginBottom: "10px",
    marginTop: "10%"
  },
  icon: {
    fontSize: "30px",
    color: "#F75F00",
    marginRight: "10px"
  },

}));
function ManagerCustomer() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.navbar}>
        <div className={classes.info}>
          <img src={avatar} className={classes.imgInfor} alt="image"></img>
          <p>Nguyễn Ngọc Như Hoa</p>
        </div>
        <div className={clsx(classes.acount, "action-hover")}>
          <AccountCircleIcon className={classes.icon}></AccountCircleIcon>
          Tài khoản của tôi
        </div>
        <div className={clsx("action-hover", classes.myOrder)}>
          <DescriptionIcon className={classes.icon}></DescriptionIcon>
          Đơn mua
        </div>
        <div className={clsx("action-hover", classes.myFavorite)}>
          <FavoriteIcon className={classes.icon}></FavoriteIcon>
          Sản phẩm yêu thích
        </div>
      </div>
      <div className={classes.inforCustomer}>
        <Switch>
          {/* <Route path="**" component={OrderList}></Route> */}
          <Route path="**" component={InforCustomer}></Route>
        </Switch>
      </div>
    </div>
  );
}
export default ManagerCustomer;
