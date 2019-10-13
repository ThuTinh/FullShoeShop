import React from "react";
import { Link } from "react-router-dom";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import SearchIcon from "@material-ui/icons/Search";
import { withStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import "./style.css";

 const StyledBadge1 = withStyles(theme => ({
  badge: {
    right: -3,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge);
class Navbars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prevScrollpos: window.pageYOffset,
      visible: true,
      visibleSearch: true,
      anchorEl: null
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

  render() {
    const handleClick = event => {
      this.setState({
        anchorEl: event.currentTarget
      });
    };

    const handleClose = () => {
      this.setState({
        anchorEl: null
      });
    };

    // return focus to the button when we transitioned from !open -> open
    return (
      <div className="menu-container">
        
        <nav className={this.state.visible ? "menu" : "menu-scroll"}>
          <div className="logo"></div>
          <div className="menu-items">
            <div style={{ display: "inline" , width: '200px' }}>
              <label
                className="menu-item "
                aria-controls="sub-menu"
                aria-haspopup="true"
                onClick={handleClick}
              >
                Giày nữ
              </label>
              <Menu
                id="sub-menu"
                anchorEl={this.state.anchorEl}
                keepMounted
                open={Boolean(this.state.anchorEl)}
                onClose={handleClose}
                getContentAnchorEl={null}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                transformOrigin={{ vertical: "top", horizontal: "center" }}
              >
                <MenuItem onClick={handleClose} className="sub-item">
                  Profile
                </MenuItem>
                <MenuItem onClick={handleClose} className="sub-item">
                  My account
                </MenuItem>
                <MenuItem onClick={handleClose} className="sub-item">
                  Logout
                </MenuItem>
              </Menu>
            </div>
            <Link className="menu-item">Giày Nam</Link>
            <Link className="menu-item">Khuyến mãi hot</Link>
            <Link className="menu-item">Kết nối</Link>
          </div>
          <div className="menu-cart-search">
          <StyledBadge1 badgeContent={4} color="primary">
          <ShoppingCartIcon className="menu-cart" />
          </StyledBadge1>
            
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
            <input
              type="text"
              className="control-input"
              id="search_input"
              placeholder="Search Here"
            />
            <button type="submit" className="btn"></button>
            
          </form>
        </div>

        
      </div>
    );
  }
}

export default Navbars;
