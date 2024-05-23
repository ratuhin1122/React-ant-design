import { Avatar, Button, Card, Divider, Flex, Tooltip, Typography } from "antd";

const SellerList = () => {
  return (
    <Flex align="center" justify="space-between" gap="large">
      <Flex vertical="row" gap="small" className="top-seller">
        <Flex align="center" justify="space-between">
          <Typography.Title level={5} strong className="primary--color">
            Top Seller
          </Typography.Title>
          <Button type="link" className="gray--color">
            View All
          </Button>
        </Flex>
        <Card>
          <Flex align="center" justify="space-evenly">
            <Avatar.Group
              maxCount={5}
              maxPopoverTrigger="click"
              size="large"
              maxStyle={{
                color: "#f56a00",
                background: "#fde3cf",
                cursor: "progress",
              }}
            >
              <Tooltip placement="top" title="user1">
                <Avatar src="https://img.freepik.com/free-photo/young-beautiful-ginger-girl-white-wall_176420-387.jpg?t=st=1716388624~exp=1716392224~hmac=f1110741027754d6de618a1d897ade06c48cdde1d2c89c2c7405985139903cad&w=1380" />
              </Tooltip>

              <Tooltip placement="top" title="user2">
                <Avatar src="https://img.freepik.com/free-photo/man-with-thumb-up_1368-6353.jpg?t=st=1716389175~exp=1716392775~hmac=21accb6e354c7256172d0c3806d2dc99dc026d55a619ed5c1ab5918db0946ac2&w=1380" />
              </Tooltip>
              <Tooltip placement="top" title="user3">
                <Avatar src="https://img.freepik.com/free-photo/close-up-fully-satisfied-happy-attractive-girl-smiling-dreamy-showing-thumbs-up-approve-recommend_176420-25559.jpg?t=st=1716389221~exp=1716392821~hmac=b05817081261d52474e9637b3041a867c751e654033684ad55a4429b84efba22&w=1380" />
              </Tooltip>
              <Tooltip placement="top" title="user4">
                <Avatar src="https://img.freepik.com/free-photo/smiling-redhead-female-model-showing-thumb-down-up-medium-average-rate-leave-feedback-standing-white_176420-40023.jpg?t=st=1716389273~exp=1716392873~hmac=093f3c3f70fdccdeb0bc0d1cff1f0df77d76e292996e3ce7e3060e9bbff6bea7&w=1380" />
              </Tooltip>
              <Tooltip placement="top" title="user5">
                <Avatar src="https://img.freepik.com/free-photo/confident-black-haired-young-man-pointing-himself_1262-14882.jpg?t=st=1716389366~exp=1716392966~hmac=66b5e8dfe0095f0ef7b3095870bf1f9cc94f4ba68e76c3a818258df6249f2676&w=1380" />
              </Tooltip>
              <Tooltip placement="top" title="user6">
                <Avatar src="https://img.freepik.com/free-photo/young-beautiful-girl-black-turtleneck-glasses-smiling-with-happy-face-showing-thumbs-up_141793-54522.jpg?t=st=1716389410~exp=1716393010~hmac=4745e3da55926cb091b6b251d9fa6034b844956b93f46fb84ad1f1d0a2e73dbc&w=1380" />
              </Tooltip>
              <Tooltip placement="top" title="user7">
                <Avatar src="https://img.freepik.com/free-photo/confident-young-casual-woman-stretching-out-mobile-phone-showing-thumb-up-isolated-white-space_141793-91929.jpg?t=st=1716389435~exp=1716393035~hmac=2d920b2db89108c3d87830edaa7196a1bf36b63a32ce94da53b7e3a37c59235f&w=1380" />
              </Tooltip>
            </Avatar.Group>
            <Divider type="vertical" className="divider" />
            <Flex vertical="row">
              <Typography.Text strong type="secondary">
                1,200 Plant Sold
              </Typography.Text>
              <Typography.Text strong type="secondary">
                10 Seller
              </Typography.Text>
            </Flex>
          </Flex>
        </Card>
      </Flex>

      <Flex vertical="row" gap="small" className="featured-seller">
        <Flex align="center" justify="space-between">
          <Typography.Title level={5} strong className="primary--color">
            Featured Seller
          </Typography.Title>
          <Button type="link" className="gray--color">
            View All
          </Button>
        </Flex>
        <Card>
          <Flex align="center" justify="space-evenly">
            <Avatar.Group
              maxCount={5}
              maxPopoverTrigger="click"
              size="large"
              maxStyle={{
                color: "#f56a00",
                background: "#fde3cf",
                cursor: "progress",
              }}
            >
              <Tooltip placement="top" title="user1">
                <Avatar src="https://img.freepik.com/free-photo/young-beautiful-ginger-girl-white-wall_176420-387.jpg?t=st=1716388624~exp=1716392224~hmac=f1110741027754d6de618a1d897ade06c48cdde1d2c89c2c7405985139903cad&w=1380" />
              </Tooltip>

              <Tooltip placement="top" title="user2">
                <Avatar src="https://img.freepik.com/free-photo/man-with-thumb-up_1368-6353.jpg?t=st=1716389175~exp=1716392775~hmac=21accb6e354c7256172d0c3806d2dc99dc026d55a619ed5c1ab5918db0946ac2&w=1380" />
              </Tooltip>
              <Tooltip placement="top" title="user3">
                <Avatar src="https://img.freepik.com/free-photo/close-up-fully-satisfied-happy-attractive-girl-smiling-dreamy-showing-thumbs-up-approve-recommend_176420-25559.jpg?t=st=1716389221~exp=1716392821~hmac=b05817081261d52474e9637b3041a867c751e654033684ad55a4429b84efba22&w=1380" />
              </Tooltip>
              <Tooltip placement="top" title="user4">
                <Avatar src="https://img.freepik.com/free-photo/smiling-redhead-female-model-showing-thumb-down-up-medium-average-rate-leave-feedback-standing-white_176420-40023.jpg?t=st=1716389273~exp=1716392873~hmac=093f3c3f70fdccdeb0bc0d1cff1f0df77d76e292996e3ce7e3060e9bbff6bea7&w=1380" />
              </Tooltip>
              <Tooltip placement="top" title="user5">
                <Avatar src="https://img.freepik.com/free-photo/confident-black-haired-young-man-pointing-himself_1262-14882.jpg?t=st=1716389366~exp=1716392966~hmac=66b5e8dfe0095f0ef7b3095870bf1f9cc94f4ba68e76c3a818258df6249f2676&w=1380" />
              </Tooltip>
              <Tooltip placement="top" title="user6">
                <Avatar src="https://img.freepik.com/free-photo/young-beautiful-girl-black-turtleneck-glasses-smiling-with-happy-face-showing-thumbs-up_141793-54522.jpg?t=st=1716389410~exp=1716393010~hmac=4745e3da55926cb091b6b251d9fa6034b844956b93f46fb84ad1f1d0a2e73dbc&w=1380" />
              </Tooltip>
              <Tooltip placement="top" title="user7">
                <Avatar src="https://img.freepik.com/free-photo/confident-young-casual-woman-stretching-out-mobile-phone-showing-thumb-up-isolated-white-space_141793-91929.jpg?t=st=1716389435~exp=1716393035~hmac=2d920b2db89108c3d87830edaa7196a1bf36b63a32ce94da53b7e3a37c59235f&w=1380" />
              </Tooltip>
            </Avatar.Group>
            <Divider type="vertical" className="divider" />
            <Flex vertical="row">
              <Typography.Text strong type="secondary">
                1,470 Plant Sold
              </Typography.Text>
              <Typography.Text strong type="secondary">
                20 Seller
              </Typography.Text>
            </Flex>
          </Flex>
        </Card>
      </Flex>
    </Flex>
  );
};

export default SellerList;
