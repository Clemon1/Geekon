import { Flex, SimpleGrid, Text } from "@mantine/core";
import Lottie from "lottie-react";
import lot from "../assets/lot.json";
import FlexServices from "./flexService";
import { IoRocket } from "react-icons/io5";
import { FaUserCheck, FaCalendarCheck } from "react-icons/fa";
import { RiBubbleChartFill } from "react-icons/ri";
const ChooseUs = () => {
  return (
    <Flex
      w={"100%"}
      flex={1}
      gap={5}
      bg={"#ffffff"}
      pt={60}
      pb={60}
      direction={{ base: "column-reverse", md: "column-reverse", lg: "row" }}
      px={{ base: 20, md: 50, lg: 55 }}>
      <Flex w={"100%"} align={"center"} justify={"center"}>
        <Lottie
          style={{
            width: "100%",
            height: "55%",
          }}
          animationData={lot}
        />
      </Flex>
      <Flex w={"100%"} direction={"column"}>
        <Text c={"#011627"} ta={"center"} py={20} fz={24} fw={500}>
          Why choose us?
        </Text>

        <SimpleGrid w={"100%"} cols={1}>
          <FlexServices
            title={"Expertise and Experienced"}
            IconBG={"#0cd488"}
            IconProp={<FaUserCheck size={35} color='#ffffff' />}
            subtitle={
              "Our team is composed of highly skilled software engineers with entensive experience and contributions ensuring industry-leading expertise in every project and course. "
            }
          />

          <FlexServices
            title={"Fast & High Quality Products"}
            IconBG={"#fd356ee6"}
            IconProp={<IoRocket size={35} color='#ffffff' />}
            subtitle={
              "We leverage industry best practices to ensure the highest quality. We provide robust, scalable, and efficient solutions that meet and exceed the demands of modern businesses."
            }
          />

          <FlexServices
            title={"Expert & Flexible Learning"}
            IconBG={"#ff8a5c"}
            IconProp={<FaCalendarCheck size={35} color='#ffffff' />}
            subtitle={
              "Our trainers are distinguished software engineers that deliver top-tier, current curriculum through flexible classes, accommodating students’ diverse schedules and learning preferences."
            }
          />

          <FlexServices
            title={"Solutions Experts"}
            IconBG={"#5a58e9"}
            IconProp={<RiBubbleChartFill size={35} color='#ffffff' />}
            subtitle={
              "We Provide Solutions For All Constrains And Issue Proper Advice. Resulting to efficient solutions that meet and exceed the demands of modern businesses."
            }
          />
        </SimpleGrid>
      </Flex>
    </Flex>
  );
};

export default ChooseUs;
