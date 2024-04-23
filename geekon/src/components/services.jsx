import { Flex, SimpleGrid, Text } from "@mantine/core";
import CardServices from "./cardServices";
import service1 from "../assets/service-icon-1.png";
import service2 from "../assets/service-icon-2.png";
import service3 from "../assets/service-icon-5.png";
import service4 from "../assets/service-icon-6.png";
const Services = () => {
  return (
    <Flex
      w={"100%"}
      flex={1}
      gap={50}
      bg={"#f7f8fd"}
      pt={60}
      pb={60}
      px={{ base: 20, md: 50, lg: 75 }}
      direction={"column"}
      align={"center"}>
      <Flex w={"100%"} direction={"column"}>
        <Text c={"#011627"} ta={"center"} fz={22} fw={500}>
          Our Services
        </Text>
        <Text
          c={"#011627"}
          fz={{ base: 30, md: 35, lg: 40 }}
          fw={600}
          ta={"center"}
          style={{
            lineHeight: "1.3",
          }}>
          Managing you business with
          <br />
          our best service
        </Text>
      </Flex>
      <SimpleGrid
        w={"100%"}
        cols={{ base: 2, md: 4, lg: 4 }}
        spacing={{ base: 15, md: 15, lg: 20 }}>
        <CardServices
          title={"Product Management"}
          img={service1}
          IconBg={"#1de2ce26"}
          borderColor={"#1de2ce"}
        />
        <CardServices
          title={"Web & Mobile Development"}
          img={service2}
          IconBg={"#893ee526"}
          borderColor={"#893ee5"}
        />
        <CardServices
          title={"Software Development Training"}
          img={service3}
          IconBg={"#0f87ff26"}
          borderColor={"#0f87ff"}
        />
        <CardServices
          title={"Social Media Marketing"}
          img={service4}
          IconBg={"#0cd48826"}
          borderColor={"#0cd488"}
        />
      </SimpleGrid>
    </Flex>
  );
};

export default Services;
