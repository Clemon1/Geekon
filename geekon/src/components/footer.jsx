import { Flex, List, SimpleGrid, Text } from "@mantine/core";
import SocialMedia from "./SocialMedia";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaMapLocationDot, FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
const Footer = () => {
  return (
    <Flex w={"100%"} bg={"#011627"} py={50} px={{ base: 20, md: 50, lg: 75 }}>
      <SimpleGrid w={"100%"} cols={{ base: 1, md: 3, lg: 3 }}>
        <Flex w={"100%"} direction={"column"} gap={14}>
          <Text c={"#ffffff"} fz={24} fw={400}>
            About GeekonTech
          </Text>
          <Text c={"#ffffff"} fz={15} fw={300}>
            We are a team of experts that excel in crafting next generation
            state-of-the-art software management systems that streamline
            operations and maximizes productivity powered by advanced
            algorithms. We harness the power of advanced algorithms and machine
            learning to create robust and scalable solutions for unique needs.
          </Text>
          <Flex w={"100%"} gap={10}>
            <SocialMedia icon={<FaFacebookF size={23} color='#ffffff' />} />
            <SocialMedia icon={<RiInstagramFill size={23} color='#ffffff' />} />
            <SocialMedia
              icon={<FaSquareXTwitter size={23} color='#ffffff' />}
            />
            <SocialMedia icon={<FaLinkedinIn size={23} color='#ffffff' />} />
            <SocialMedia icon={<FaYoutube size={23} color='#ffffff' />} />
          </Flex>
        </Flex>
        <Flex w={"100%"} direction={"column"}></Flex>
        <Flex w={"100%"} direction={"column"} gap={14}>
          <Text c={"#ffffff"} fz={24} fw={400}>
            Contact Info
          </Text>

          <List spacing='xs' size='md' c='#ffffff' center>
            <List.Item icon={<FaMapLocationDot size={30} color='#ffffff' />}>
              No 16 ademola adetukunbo crescent wuse, Abuja.
            </List.Item>
            <List.Item icon={<MdEmail size={30} color='#ffffff' />}>
              geekon@technology.info
            </List.Item>
            <List.Item icon={<FaPhoneVolume size={30} color='#ffffff' />}>
              +2348180852320, +2348136695064
            </List.Item>
          </List>
        </Flex>
      </SimpleGrid>
    </Flex>
  );
};

export default Footer;
