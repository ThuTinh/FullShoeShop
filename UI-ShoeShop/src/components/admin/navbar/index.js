import React , { useState }from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import ListSupplier from '../listsupplier';
import ListOderSupplier from '../listOrderSupplier';
import OrderSupplier from '../orderSupplier';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function Navbar() {
    const [collapsed, setCollapsed] = useState(false);
    const onCollapse = collapsed => {
        console.log(collapsed);
        setCollapsed(collapsed)
    };
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                <div className="logo" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1">
                        <Icon type="pie-chart" />
                        <span>Trang chủ</span>
                    </Menu.Item>
                    <SubMenu
                        key="sub1"
                        title={
                            <span>
                                <Icon type="user" />
                                <span>Nhà Cung Cấp</span>
                            </span>
                        }
                    >
                        <Menu.Item key="2">a</Menu.Item>
                        <Menu.Item key="3">Bill</Menu.Item>
                        <Menu.Item key="4">Alex</Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="sub2"
                        title={
                            <span>
                                <Icon type="team" />
                                <span>Đơn hàng</span>
                            </span>
                        }
                    >
                        <Menu.Item key="5">Đơn Hàng</Menu.Item>
                        <Menu.Item key="6">Đơn hàng đã giao</Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="sub3"
                        title={
                            <span>
                                <Icon type="team" />
                                <span>Sản phẩm</span>
                            </span>
                        }
                    >
                        <Menu.Item key="7"> Tất cả sản phầm</Menu.Item>
                        <Menu.Item key="8">Hàng tồn kho</Menu.Item>
                    </SubMenu>
                   
                </Menu>
            </Sider>
            <Layout>
                <Header style={{ background: '#fff', padding: 0 }} />
                <Content style={{ margin: '0 16px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
             {/* <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>Bill is a cat.</div> */}
                    <ListSupplier></ListSupplier>
                    <ListOderSupplier></ListOderSupplier>
                    <OrderSupplier></OrderSupplier>
                </Content>
                <Footer style={{ textAlign: 'center' }}> ©thutinh Shop</Footer>
            </Layout>
        </Layout>
    )
}

export default Navbar;
