/* eslint-disable react/prop-types */
import { Anchor, Flex } from "@mantine/core";

const SocialMedia = ({ href, icon }) => {
  return (
    <Anchor href={href} underline='never'>
      <Flex
        bg={"#004157"}
        p={8}
        align={"center"}
        justify={"center"}
        style={{
          borderRadius: 12,
        }}>
        {icon}
      </Flex>
    </Anchor>
  );
};

export default SocialMedia;
