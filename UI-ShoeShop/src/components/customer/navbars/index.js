import React from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import SearchIcon from "@material-ui/icons/Search";
import { withStyles } from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";
import PersonIcon from "@material-ui/icons/Person";
import { connect } from "react-redux";
import { atcGetCategoryRequest } from "../../../actions";
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
    this.state = {
      prevScrollpos: window.pageYOffset,
      visible: true,
      visibleSearch: true
    };
  }

  // Adds an event listener when the component is mount.
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    console.log(this.state.visible);
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
                return <li >{children.name}</li>;
              }
            );
          }
          break;
        }
      }
    }
    return result;
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
                return <li>{children.name}</li>;
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
        <nav className={this.state.visible ? "menu" : "menu-scroll"}>
          <div className="wraper">
            <ul>
              <li>
                Giày nữ
                <ul >{this.renderWomenCategory()}</ul>
              </li>
              <li>
                Giày nam
                <ul>{this.renderManCategory()}</ul>
              </li>
              <li>Bán chạy</li>
              <li>Khuyến mãi</li>
              <li>Giới thiệu shop</li>
            </ul>
          </div>
          <div className="menu-cart-search">
            <StyledBadge1
              badgeContent={4}
              color="primary"
              className="shopping-cart"
            >
              <ShoppingCartIcon className="menu-cart" />
            </StyledBadge1>

            <SearchIcon
              className="menu-search"
              onClick={this.onIconSearchClick}
            />
          </div>
          <div>
            <PersonIcon className="icon-person">
              <ul className="menu-person">
                <li>Tài khoản của tôi</li>
                <li>Đăng cuất</li>
              </ul>
            </PersonIcon>
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
)(Navbars);
