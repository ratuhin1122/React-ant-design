import { Card, Flex, Typography, Image } from "antd";
import Plant2 from "../assets/Plant2.png";

const ContentSidebar = () => {
  return (
    <div>
      <Card className="card">
        <Flex vertical gap="large">
          <Typography.Title level={4} strong>
            Today <br /> 5 Order
          </Typography.Title>
          <Typography.Title level={4} strong>
            This Month <br /> 120 Orders
          </Typography.Title>
        </Flex>
        <Image
          src={Plant2}
          alt="Plant2"
          style={{
            position: "absolute",
            bottom: -50,
            left: 100,
            height: "300px",
            width: "auto",
          }}
        />
      </Card>
    </div>
  );
};

export default ContentSidebar;
