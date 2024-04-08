import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useNavigate } from "react-router-dom";
import React from 'react';
import type { MenuProps } from 'antd';


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
  {
    key: '/page1',
    icon: <UploadOutlined />,
    label: '栏目1',

  },
  {
    key: '/page2',
    icon: <UploadOutlined />,
    label: '栏目2',

  },
  {
    key: '/page3',
    icon: <UploadOutlined />,
    label: '栏目3',
    children: [
      {
        key: 'page3/page301',
        icon: <UploadOutlined />,
        label: '栏目301',

      },
      {
        key: '/page12',
        icon: <UploadOutlined />,
        label: '栏目21',

      },
    ]
  },


];
const App: React.FC = () => {
  const navigate = useNavigate();
  //处理菜单点击
  function handleMenuClick(e: { key: string }) {
    console.log(e.key);

    navigate(e.key)
  }
  // 子菜单回调
  function onOpenChange(keys: string[]) {
    console.log(keys);

  }
  return (
    <Menu
      onOpenChange={onOpenChange}
      theme="dark"
      mode="inline"
      defaultSelectedKeys={['/page1']}
      items={items}
      onClick={(e) => handleMenuClick(e)}
    />
  );
}

export default App;