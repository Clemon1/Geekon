import { Flex, Image } from "@mantine/core";
import Logo from "../assets/gt.png";
const Navbar = () => {
  return (
    <Flex
      w={"100%"}
      h={"16vh"}
      bg={"#ffffff"}
      align={"center"}
      px={45}
      justify={"space-between"}>
      <Image src={Logo} w={{ base: "40%", md: "30%", lg: "22%" }} h={"100%"} />
    </Flex>
  );
};

export default Navbar;
