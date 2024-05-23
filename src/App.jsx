import { Button, Flex, Layout } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import Sider from "antd/es/layout/Sider";
import { Content, Header } from "antd/es/layout/layout";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import "./App.css";
import CustomHeader from "./components/CustomHeader";
import MainContent from "./components/MainContent";
import SideContent from "./components/SideContent";

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <>
      <Layout>
        <Sider
          theme="light"
          trigger={null}
          collapsible
          collapsed={collapsed}
          className="sider"
        >
          <Sidebar />
          <Button
            type="primary"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={toggleCollapsed}
            className="triger-btn"
          />
        </Sider>
        <Layout>
          <Header className="header">
            {" "}
            <CustomHeader />{" "}
          </Header>
          <Content className="content">
            <Flex gap="large">
              <MainContent />
              <SideContent />
            </Flex>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default App;
