import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { useNavigate, Outlet } from 'react-router';

const { Header, Content, Sider } = Layout;

const navItem = [
  {
    key: 'users',
    icon: <UserOutlined />,
    label: '使用者列表',
  },
];

export default function MainLayout() {
  const navigate = useNavigate();
  const handleMenuClick = (e) => {
    navigate(e.key);
  };

  return (
    <Layout style={{ height: '100vh' }}>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo" />
      </Header>
      <Layout>
        <Sider
          width={200}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{
              height: '100%',
              borderRight: 0,
            }}
            onClick={handleMenuClick}
            items={navItem}
          />
        </Sider>
        <Layout
          style={{
            padding: '0 24px 24px',
          }}
        >
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}
