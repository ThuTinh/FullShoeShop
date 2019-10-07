import React, { useState } from 'react';
import { Dropdown, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom'
import './style.css'


class Navbars extends React.Component {

    constructor(props) {
        super(props);
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
        })
        console.log(this.state.visibleSearch)
    }

    menu = (
        <Menu onClick={this.onClick} className = "menu-dropdown">
            <Menu.Item key="1" className = "menu-dropdown-item">1st menu item</Menu.Item>
            <Menu.Item key="2" className = "menu-dropdown-item">2nd memu item</Menu.Item>
            <Menu.Item key="3" className = "menu-dropdown-item">3rd menu item</Menu.Item>
        </Menu>
    );
     onClick = ({ key }) => {
       console.log("dsf");
      };

    render() {
        return (
            <div className= "menu-container">
                <nav className={this.state.visible ? 'menu' : 'menu-scroll'} >
                    <div className="logo">         
                    </div>
                    <div className="menu-items">
                        <Dropdown overlay={this.menu}>
                            <Link className="ant-dropdown-link menu-item"  >
                               Giày nữ 
                            </Link>
                        </Dropdown>,
                        {/* <Link className="menu-item">Giày Nữ</Link> */}
                        <Link className="menu-item">Giày Nam</Link>
                        <Link className="menu-item">Khuyến mãi hot</Link>
                        <Link className="menu-item">Kết nối</Link>
                    </div>
                    <div className="menu-cart-search">
                        <Icon type="shopping-cart" className="menu-cart" />
                        <Icon type="search" className="menu-search" onClick={this.onIconSearchClick} />

                    </div>
                </nav>
                <div className={this.state.visible ? 'search' : 'search-croll'} style={{ visibility: this.state.visibleSearch ? 'hidden' : '' }}>
                    <form >
                        <input type="text" className="form-control" id="search_input" placeholder="Search Here" />
                        <button type="submit" className="btn"></button>
                        <span className="lnr lnr-cross" id="close_search" title="Close Search"></span>
                    </form>

                </div>




            </div>
        )

    }

}

export default Navbars;
