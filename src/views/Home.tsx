import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import { Outlet, useNavigate } from "react-router-dom";
import React from 'react';
import type { MenuProps } from 'antd';
import AsiderMenu from '@/components/AsiderMenu'
const { Header, Content, Footer, Sider } = Layout;



const App: React.FC = () => {


  return (

    <Layout>
      {/* 左边的 哈哈*/}
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
        <AsiderMenu />

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