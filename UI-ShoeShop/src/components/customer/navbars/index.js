import React from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import SearchIcon from "@material-ui/icons/Search";
import { withStyles } from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";
import PersonIcon from "@material-ui/icons/Person";
import { connect } from "react-redux";
import {
  atcGetCategoryRequest,
  atcAddToCart,
  atcGetCurentUserRequest,
  actGetProductByFilter
} from "../../../actions";
import { Link } from "react-router-dom";
import logo from "../../../assets/image/logo.jpg";
import { Redirect } from "react-router-dom";
import "./style.css";

const StyledBadge1 = withStyles(theme => ({
  badge: {
    right: -3,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px"
  }
}))(Badge);
class Navbars extends React.Component {
  constructor(props) {
    super(props);
    props.getCategory();
    const token = localStorage.getItem("token");
    if (token) {
      props.getCurrentUser(token);
    }
    this.state = {
      prevScrollpos: window.pageYOffset,
      visible: true,
      visibleSearch: true,
      redirect: false,
      isLogout: false
    };
  }

  // Adds an event listener when the component is mount.
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    console.log(this.state.visible);
    const orderOlds = JSON.parse(localStorage.getItem("ProductOrders"));
    if (orderOlds && orderOlds.length > 0) {
      let count = 0;
      for (let i = 0; i < orderOlds.length; i++) {
        console.log("count", count);
        count += parseInt(orderOlds[i].quantity);
      }
      this.props.addToCart(count);
    }
  }

  // Remove the event listener when the component is unmount.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    console.log(this.state.visible);
  }

  // Hide or show the menu.
  handleScroll = () => {
    const visible = window.pageYOffset <= 20;
    this.setState({
      visible
    });
  };
  onIconSearchClick = () => {
    this.setState({
      visibleSearch: !this.state.visibleSearch
    });
    console.log(this.state.visibleSearch);
  };

  renderWomenCategory = () => {
    var result = "";
    if (this.props.categories && this.props.categories.length > 0) {
      var i = 0;
      for (i = 0; i < this.props.categories.length; i++) {
        if (this.props.categories[i].name == "Giày nữ") {
          if (
            this.props.categories[i].children &&
            this.props.categories[i].children.length > 0
          ) {
            result = this.props.categories[i].children.map(
              (children, index) => {
                return (
                  <li
                    key={index}
                    onClick={e => {
                      this.filter(e, children._id);
                    }}
                  >
                    {children.name}
                  </li>
                );
              }
            );
          }
          break;
        }
      }
    }
    return result;
  };
  signnOut = () => {
    localStorage.removeItem("token");
    this.setState({
      isLogout: !this.state.isLogout
    });
    window.location.reload();
  };
  filter = (e, id) => {
    console.log("e, id", e, id);
    this.props.filterProduct(id);
  };
  renderManCategory = () => {
    var result = "";
    console.log("aaa", this.props.categories);
    if (this.props.categories && this.props.categories.length > 0) {
      var i = 0;
      for (i = 0; i < this.props.categories.length; i++) {
        if (this.props.categories[i].name == "Giày nam") {
          if (
            this.props.categories[i].children &&
            this.props.categories[i].children.length > 0
          ) {
            result = this.props.categories[i].children.map(
              (children, index) => {
                return (
                  <li
                    key={index + new Date()}
                    onClick={e => {
                      this.filter(e, children._id);
                    }}
                  >
                    {children.name}
                  </li>
                );
              }
            );
          }
          break;
        }
      }
    }
    return result;
  };

  render() {
    // return focus to the button when we transitioned from !open -> open
    return (
      <div className="menu-container">
        {this.state.isLogout && <Redirect to="/" />}
        <nav className={this.state.visible ? "menu" : "menu-scroll"}>
          <div style={{ position: "absolute", left: "10px" }}>
            <img
              className="logo"
              src={logo}
              alt="logo"
              onClick={() => {
                this.setState({
                  redirect: !this.state.redirect
                });
              }}
            />
            {this.state.redirect && <Redirect to="/" />}
          </div>
          <div className="wraper">
            <ul>
              <li>
                Giày nữ
                <ul className="catelogy">{this.renderWomenCategory()}</ul>
              </li>
              <li>
                Giày nam
                <ul className="catelogy">{this.renderManCategory()}</ul>
              </li>
              <li>Bán chạy</li>
              <li>Khuyến mãi</li>
              <li>Giới thiệu shop</li>
              <li>
                <PersonIcon className="icon-person"></PersonIcon>
                <ul className="menu-person">
                  {this.props.currentUser._id && (
                    <>
                      <li>
                        <Link to="/my-acount" className="format-link">
                          {" "}
                          Tài khoản của tôi
                        </Link>
                      </li>
                      <li>
                        <Link to="/my-acount/orders" className="format-link">
                          Đơn mua
                        </Link>
                      </li>
                      <li onClick={this.signnOut}>Đăng Xuất</li>
                      {this.props.currentUser.role != "customer" && (
                        <li>
                          <Link to="/admin" className="format-link">
                            Trang admin
                          </Link>
                        </li>
                      )}
                    </>
                  )}
                  {!this.props.currentUser._id > 0 && (
                    <>
                      <li>
                        <Link to="/login" className="format-link">
                          Đăng nhập
                        </Link>
                      </li>
                      <li>
                        <Link to="/sign" className="format-link">
                          Đăng kí
                        </Link>
                      </li>
                    </>
                  )}
                </ul>
              </li>
              <li>
                <StyledBadge1
                  badgeContent={this.props.count} // chỗ này ko nhận dc
                  color="primary"
                  className="shopping-cart"
                >
                  <Link
                    to={localStorage.getItem("token") ? "/cart" : "/login"}
                    style={{ color: "black" }}
                  >
                    <ShoppingCartIcon className="menu-cart" />
                  </Link>
                </StyledBadge1>
              </li>
            </ul>
          </div>

          <div className="menu-cart-search">
            <SearchIcon
              className="menu-search"
              onClick={this.onIconSearchClick}
            />
          </div>
        </nav>
        <div
          className={this.state.visible ? "search" : "search-croll"}
          style={{ visibility: this.state.visibleSearch ? "hidden" : "" }}
        >
          <form>
            <div style={{ display: "flex" }}>
              <input
                type="text"
                className="control-input"
                id="search_input"
                placeholder="Search Here"
              />
              <button type="submit" className="btn-search">
                Tìm kiếm
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const stateMapToProps = (state, props) => {
  return {
    categories: state.categories,
    count: state.countCart, // chỗ này get ó nè
    currentUser: state.user
  };
};
const dispatchMapToProps = (dispatch, props) => {
  return {
    getCategory: () => {
      dispatch(atcGetCategoryRequest());
    },
    addToCart: count => {
      dispatch(atcAddToCart(count));
    },
    getCurrentUser: token => {
      dispatch(atcGetCurentUserRequest(token));
    },
    filterProduct: category => {
      dispatch(actGetProductByFilter(category, null));
    }
  };
};
export default connect(stateMapToProps, dispatchMapToProps)(Navbars);
