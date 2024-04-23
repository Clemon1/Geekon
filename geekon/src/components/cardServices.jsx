/* eslint-disable react/prop-types */
import { Card, Flex, Image, Text } from "@mantine/core";
import { useHover } from "@mantine/hooks";
const CardServices = ({ title, img, borderColor, IconBg }) => {
  const { hovered, ref } = useHover();

  return (
    <Card
      ref={ref}
      bg={"#ffffff"}
      miw={"10rem"}
      mih={"35vh"}
      p={{ base: 25, md: 30, lg: 30 }}
      radius={"xl"}
      shadow='md'
      style={{
        borderBottom: hovered
          ? `4px solid ${borderColor}`
          : "4px solid transparent",
        transition: ".4s border-bottom ease",
      }}>
      <Flex
        w={"100%"}
        direction={"column"}
        h={"100%"}
        justify={"space-between"}
        gap={14}>
        <Flex
          w={{ base: "fit-content", md: "30%", lg: "30%" }}
          bg={IconBg}
          justify={"center"}
          p={10}
          align={"center"}
          style={{
            borderRadius: 12,
          }}>
          <Image src={img} fit='contain' />
        </Flex>
        <Text
          c={"#011627"}
          fz={{ base: 17, md: 20, lg: 20 }}
          fw={400}
          style={{
            lineHeight: "1.3",
          }}>
          {title}
        </Text>
      </Flex>
    </Card>
  );
};

export default CardServices;
