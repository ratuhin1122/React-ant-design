import { Avatar, Flex, Typography } from "antd";
import Search from "antd/es/transfer/search";
import {
  MessageOutlined,
  UserOutlined,
  NotificationOutlined,
} from "@ant-design/icons";

const CustomHeader = () => {
  return (
    <Flex align="center" justify="space-between">
      <Typography.Title level={3} type="secondary">
        {" "}
        Welcome Back, Tuhin{" "}
      </Typography.Title>

      <Flex align="center" gap="3rem">
        <Search placeholder="Search Dashboard" allowClear />
        <Flex align="center" gap="15px">
          <MessageOutlined className="header-icon" />
          <NotificationOutlined className="header-icon" />
          <Avatar icon={<UserOutlined />} />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CustomHeader;
