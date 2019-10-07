import React, { useState } from 'react';
import { Dropdown, Menu, Breadcrumb, Icon, Input, InputNumber, Divider } from 'antd';
import { Link } from 'react-router-dom'
import './style.css'
const { SubMenu } = Menu;


const { Search } = Input;

function Navbar() {
    const [issearch, setIsSearch] = useState(false);
    const handleToggleSearch = () => {
        setIsSearch(!issearch);
    }
    const menu = (
        <Menu className="sub-menu">
            <Menu.Item key="1">1st menu item hoc mai hoc nua</Menu.Item>
            <Menu.Item key="2">2nd memu item</Menu.Item>
            <Menu.Item key="3">3rd menu item</Menu.Item>
        </Menu>
    );
    const menuMin = (
        <Menu>
            <SubMenu title="Trang chủ">
                <Menu.Item>3rd menu item</Menu.Item>
                <Menu.Item>4th menu item</Menu.Item>
            </SubMenu>
            <Menu.Item>
                <Link className="menu-item">
                    <Icon type="dribbble-square" theme="filled" className="icon-link" />
                    Khóa học
               </Link>
            </Menu.Item>
            <Menu.Item>
                <Link className="menu-item" >
                    <Icon type="contacts" theme="filled" className="icon-link" />
                    Liên hệ
                </Link>
            </Menu.Item>
            <Menu.Item>
                <Link className="menu-item">
                    <Icon type="fire" theme="filled" className="icon-link" />
                    Đăng kí
             </Link>
            </Menu.Item>
        </Menu>
    )
    return (
        <div>
            <nav className="menu-large" >
                <Link>
                    <img src=""></img>
                </Link>
                <div className="menu-items">
                    <Dropdown overlay={menu}>
                        <Link className="menu-item ">
                            <Icon type="home" theme="filled" className="icon-link" />
                            Trang chủ
                </Link>
                    </Dropdown>
                    <Divider className="divider" type="vertical"></Divider>
                    <Link className="menu-item">
                        <Icon type="dribbble-square" theme="filled" className="icon-link" />
                        Khóa học
                        </Link>
                    <Divider className="divider" type="vertical"></Divider>
                    <Link className="menu-item" >
                        <Icon type="contacts" theme="filled" className="icon-link" />
                        Liên hệ
                        </Link>
                    <Divider className="divider" type="vertical"></Divider>
                    <Link className="menu-item">
                        <Icon type="fire" theme="filled" className="icon-link" />
                        Đăng kí
                        </Link>
                </div>
                <div className="menu-icons">
                    {issearch && (<Input className="search-input" ></Input>)

                    }
                    <Icon type="search" onClick={handleToggleSearch}></Icon>
                </div>
            </nav>
            <nav className="menu-min">

                <Dropdown overlay={menuMin}>
                    <div className="menu-icon-min">
                        <Icon type="menu" />

                    </div>
                </Dropdown>

            </nav>
        </div>


    )
}

export default Navbar;
