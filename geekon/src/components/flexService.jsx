/* eslint-disable react/prop-types */
import { Card, Flex, Text } from "@mantine/core";

const FlexServices = ({ title, IconProp, subtitle, IconBG }) => {
  return (
    <Card
      bg={"#ffffff"}
      w={"100%"}
      p={0}
      py={20}
      px={8}
      radius={"lg"}
      shadow='sm'>
      <Flex
        w={"100%"}
        h={"100%"}
        justify={"flex-start"}
        align={"center"}
        gap={14}>
        <Flex
          w={{ base: 50, md: 70, lg: 80 }}
          h={{ base: 50, md: 70, lg: 80 }}
          bg={IconBG}
          justify={"center"}
          p={10}
          align={"center"}
          style={{
            borderRadius: "50%",
          }}>
          {IconProp}
        </Flex>
        <Flex w={"70%"} direction={"column"} gap={10}>
          <Text
            c={"#011627"}
            fz={{ base: 17, md: 20, lg: 20 }}
            fw={400}
            style={{
              lineHeight: "1.3",
            }}>
            {title}
          </Text>
          <Text
            c={"gray"}
            fz={{ base: 15, md: 16, lg: 16 }}
            fw={400}
            style={{
              lineHeight: "1.3",
            }}>
            {subtitle}
          </Text>
        </Flex>
      </Flex>
    </Card>
  );
};

export default FlexServices;
