import { Flex, Menu } from "antd";
import { FaLeaf } from "react-icons/fa6";
import {
  UserOutlined,
  CarryOutOutlined,
  OrderedListOutlined,
  ProfileOutlined,
  SettingOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

const Sidebar = () => {
  return (
    <>
      <Flex align="center" justify="center">
        <div className="logo">
          <FaLeaf />
        </div>
      </Flex>
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        className="menu-bar"
        items={[
          {
            key: "1",
            icon: <UserOutlined />,
            label: "Dashboard",
          },
          {
            key: "2",
            icon: <CarryOutOutlined />,
            label: "Todo",
          },
          {
            key: "3",
            icon: <OrderedListOutlined />,
            label: "My-Order",
          },
          {
            key: "4",
            icon: <ProfileOutlined />,
            label: "Profile",
          },
          {
            key: "5",
            icon: <SettingOutlined />,
            label: "Settings",
          },
          {
            key: "6",
            icon: <LogoutOutlined />,
            label: "Logout",
          },
        ]}
      />
    </>
  );
};

export default Sidebar;
