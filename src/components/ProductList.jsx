import { Button, Card, Flex, Image, Typography } from "antd";
import PlantData from "./PlantData";

const { Meta } = Card;

const ProductList = () => {
  return (
    <div>
      <Flex align="center" justify="space-between">
        <Typography.Title level={3} strong className="primary--color">
          My List
        </Typography.Title>
        <Button type="link" className="gray--color">
          View All
        </Button>
      </Flex>
      <Flex align="center" gap="large">
        {PlantData.map((plant) => (
          <Card key={plant.id} hoverable className="plant-card">
            <Image src={plant.picture} style={{ width: "160px" }} />
            <Meta title={plant.name} style={{ marginTop: "1rem" }} />
          </Card>
        ))}
      </Flex>
    </div>
  );
};

export default ProductList;
