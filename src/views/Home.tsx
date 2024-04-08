import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import { Outlet, useNavigate } from "react-router-dom";
import React from 'react';
import type { MenuProps } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}
const items: MenuItem[] = [
  getItem('主页', '/page1', <UploadOutlined />),
  getItem('page2', '/page2', <UploadOutlined />),
  getItem('关于', '/about', <UploadOutlined />),

];
const App: React.FC = () => {
  const navigate = useNavigate();
  //处理菜单点击
  function handleMenuClick(e: { key: string }) {
    // console.log(e.key);

    navigate(e.key)
  }
  return (

    <Layout>
      {/* 左边的 */}
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={broken => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['4']}
          items={items}
          onClick={(e) => handleMenuClick(e)}
        />

      </Sider>
      <Layout>
        {/* 右边的 */}
        <Header className="site-layout-sub-header-background" style={{ padding: 0 }} >
          <Breadcrumb style={{ marginLeft: '23px', lineHeight: '64px' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="">Application Center</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="">Application List</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>An Application</Breadcrumb.Item>
          </Breadcrumb>
        </Header>
        <Content style={{ margin: '24px 16px 0' }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 350 }}>
            <Outlet></Outlet>
          </div>
        </Content>
        {/* <Footer style={{ textAlign: 'center', padding: 0 }}>Ant Design ©2018 Created by Ant UED</Footer> */}
      </Layout>
    </Layout>
  );
}

export default App;