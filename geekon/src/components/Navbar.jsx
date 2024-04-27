import { Flex, Image } from "@mantine/core";
import Logo from "../assets/gt.png";
const Navbar = () => {
  return (
    <Flex
      w={"100%"}
      h={"16vh"}
      bg={"#ffffff"}
      align={"center"}
      px={{ base: 10, md: 40, lg: 45 }}
      justify={"space-between"}>
      <Image
        src={Logo}
        w={{ base: "100%", md: "30%", lg: "22%" }}
        h={{ base: "90%", md: "100%", lg: "100%" }}
      />
    </Flex>
  );
};

export default Navbar;
