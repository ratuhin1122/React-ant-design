import { Flex, Button, Typography, List, Avatar } from "antd";

const data = [
  {
    name: " Odia ",
    orderTime: 1,
  },
  {
    name: " Emma ",
    orderTime: 2,
  },
  {
    name: " Leton ",
    orderTime: 3,
  },
  {
    name: " Olivia ",
    orderTime: 4,
  },
  {
    name: " Parasut ",
    orderTime: 5,
  },
];

const Activity = () => {
  return (
    <Flex vertical gap="small">
      <Flex align="center" justify="space-between" gap="large">
        <Typography.Title level={3} strong className="primary--color">
          My Activity
        </Typography.Title>
        <Button type="link" className="gray--color">
          View All
        </Button>
      </Flex>
      <List
        pagination
        dataSource={data}
        renderItem={(user, index) => (
          <List.Item>
            <List.Item.Meta
              avatar={
                <Avatar
                  src={`https://api.dicebear.com/7.x/miniavs/svg?seed${index}`}
                />
              }
              title={<a href="#">{user.name}</a>}
              description="Ordered a New Plant"
            ></List.Item.Meta>
            <span className="gray--color">
              {user.orderTime} {user.orderTime == 1 ? "day ago" : "days ag0"}
            </span>
          </List.Item>
        )}
      />
    </Flex>
  );
};

export default Activity;
