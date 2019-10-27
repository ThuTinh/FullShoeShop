import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import BookIcon from "@material-ui/icons/Book";
import { Route, Switch } from "react-router-dom";
import OrderManager from "../orderManager";
import EmployeeManager from "../employeeManager";
import { Link } from "react-router-dom";
import ManagerProduct from "../managerProduct";
import CustomerManager from "../customerManager";
import DetailCustomer from "../customerManager/detailCustomer";
import DetailEmployee from "../employeeManager/detailEmployee";
import OrderDetail from "../orderManager/orderDetail";
import ProductDetail from "../managerProduct/productDetail";
import KindManager from "../kindManager";
import ManagerImportStockManager from "../managerImportStock";
import OrderStockDetail from "../managerImportStock/orderStockDetail";
import OrderImport from "../managerImportStock/makeOrderImport";
import ManagerProductDetail from "../managerProductDetail";
import ProductInfoDetail from "../managerProductDetail/productInfoDetail";
import Report from "../report";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap"
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1
    }
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  customToolbar: {
    backgroundColor: "#fff"
  },
  link: {
    color: "#2a1a5e",
    "&:hover": {
      textDecoration: "none",
      color: "#F75F00",
      cursor: "pointer"
    }
  }
}));

function AdminHome() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar className={classes.customToolbar}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open
            })}
          >
            <MenuIcon style={{ color: "#f75f00" }} />
          </IconButton>
          <Typography variant="h6" noWrap style={{ color: "#000" }}>
            Quản lý
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })
        }}
        open={open}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button key="Quản lý đơn hàng">
            <ListItemIcon>
              <BookIcon></BookIcon>
            </ListItemIcon>
            <Link to="/admin/orders" className={classes.link}>
              {" "}
              <ListItemText primary="Quản lý đơn hàng" />
            </Link>
          </ListItem>
          <ListItem button key="Quản lý danh mục">
            <ListItemIcon>
              <BookIcon></BookIcon>
            </ListItemIcon>
            <Link to="/admin/kinds" className={classes.link}>
              {" "}
              <ListItemText primary="Quản lý danh mục" />
            </Link>
          </ListItem>
          <ListItem button key="Quản lý sản phẩm">
            <ListItemIcon>
              <BookIcon></BookIcon>
            </ListItemIcon>
            <Link to="/admin/products" className={classes.link}>
              {" "}
              <ListItemText primary="Quản lý sản phẩm" />
            </Link>
          </ListItem>
          <ListItem button key="Quản lý chi tiết sản phẩm">
            <ListItemIcon>
              <BookIcon></BookIcon>
            </ListItemIcon>
            <Link to="/admin/managerProductInfoDetail" className={classes.link}>
              {" "}
              <ListItemText primary="Quản lý chi tiết sản phẩm" />
            </Link>
          </ListItem>
          <ListItem button key="Quản lý kho">
            <ListItemIcon>
              <BookIcon></BookIcon>
            </ListItemIcon>
            <Link to="/admin/managerStock" className={classes.link}>
              {" "}
              <ListItemText primary="Quản lý kho" />
            </Link>
          </ListItem>
          <ListItem button key="Quản lý Nhân viên">
            <ListItemIcon>
              <BookIcon></BookIcon>
            </ListItemIcon>
            <Link to="/admin/employees" className={classes.link}>
              {" "}
              <ListItemText primary="Quản lý nhân viên" />
            </Link>
          </ListItem>

          <ListItem button key="Quản lý Khách hàng">
            <ListItemIcon>
              <BookIcon></BookIcon>
            </ListItemIcon>
            <Link to="/admin/customers" className={classes.link}>
              {" "}
              <ListItemText primary="Quản lý Khách hàng" />
            </Link>
          </ListItem>

          <ListItem button key="Báo cáo">
            <ListItemIcon>
              <BookIcon></BookIcon>
            </ListItemIcon>
            <Link to="/admin/report" className={classes.link}>
              {" "}
              <ListItemText primary="Báo cáo" />
            </Link>
          </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
          <Route path="/admin/orders" component={OrderManager} />
          <Route path="/admin/products" component={ManagerProduct} />
          <Route path="/admin/employees" component={EmployeeManager}></Route>
          <Route path="/admin/customers" component={CustomerManager}></Route>
          <Route
            path="/admin/customerDetail"
            component={DetailCustomer}
          ></Route>
          <Route
            path="/admin/employeeDetail"
            component={DetailEmployee}
          ></Route>
          <Route path="/admin/orderDetail" component={OrderDetail}></Route>
          <Route path="/admin/productDetail" component={ProductDetail}></Route>
          <Route path="/admin/kinds" component={KindManager}></Route>
          <Route
            path="/admin/managerStock"
            component={ManagerImportStockManager}
          ></Route>
          <Route
            path="/admin/orderStockDetail"
            component={OrderStockDetail}
          ></Route>
          <Route path="/admin/makeImportStock" component={OrderImport}></Route>
          <Route
            path="/admin/managerProductInfoDetail"
            component={ManagerProductDetail}
          ></Route>
          <Route
            path="/admin/productInforDetail"
            component={ProductInfoDetail}
          ></Route>
          <Route path="/admin/report" component={Report}></Route>

          <Route path="**" component={OrderManager} />
        </Switch>
      </main>
    </div>
  );
}
export default AdminHome;
