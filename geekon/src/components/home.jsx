import { Button, Flex, Image, Text } from "@mantine/core";
import HeroBanner from "../assets/hero-banner.png";
const Home = () => {
  return (
    <Flex
      w={"100%"}
      h={"100vh"}
      px={{ base: 20, md: 30, lg: 25 }}
      pb={25}
      gap={{ base: 30, sm: 30, md: 20, lg: 10 }}
      flex={1}
      bg={"#ffffff"}
      direction={{
        base: "column",
        md: "column",
        lg: "row",
      }}>
      <Flex
        w={{ base: "100%", md: "100%", lg: "50%" }}
        h={{ base: "70dvh", md: "65vh", lg: "100%" }}
        justify={"center"}
        align={"center"}
        pl={{ base: 0, md: 0, lg: 55 }}
        mt={{ base: "0rem", md: "0rem", lg: "6rem" }}
        direction={"column"}>
        <Text
          fz={{ base: 45, md: 50, lg: 65, xl: 70 }}
          fw={{ base: 500, md: 500, lg: 500 }}
          c={"#011627"}
          ta={{ base: "center", md: "center", lg: "unset" }}
          style={{
            lineHeight: "1.1",
          }}>
          Building Digital Product, Brand and Experience
        </Text>
        <Text
          c={"#717684"}
          fz={18}
          px={{ base: 6, md: "12rem", lg: 6 }}
          ta={{ base: "center", md: "center", lg: "unset" }}
          fw={400}
          style={{
            marginBlock: "10px 10px",
            lineHeight: "1.4",
          }}>
          At GeekonTech we specialize in designing, building, shipping scaling
          beautiful, usable products with blazing-fast efficiency
        </Text>
        <Flex
          w={"100%"}
          justify={{
            base: "center",
            md: "center",
            lg: "flex-start",
          }}>
          <Button
            w={{
              base: "50%",
              md: "50%",
              lg: "30%",
            }}
            bg={"hsl(241, 77%, 63%)"}
            h={"10vh"}
            radius={"lg"}
            fz={16}>
            Let&apos;s Talk
          </Button>
        </Flex>
      </Flex>
      <Flex
        w={{ base: "100%", md: "100%", lg: "50%" }}
        h={"100%"}
        justify={"center"}
        pos={"relative"}>
        <Image w={"100%"} h={"87%"} src={HeroBanner} fit='cover' />
      </Flex>
    </Flex>
  );
};

export default Home;
