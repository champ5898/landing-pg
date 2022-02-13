import React from "react";
import {
  Flex,
  IconButton,
  Spacer,
  useColorMode,
  VStack,
} from "@chakra-ui/react";

import {
  FaSun,
  FaMoon,
  FaDiscord,
  FaGithub,
  FaTwitter,
  FaTelegram,
} from "react-icons/fa";

const twitter = () => {
  window.location.href = "https://twitter.com/Quilt_chat";
};
const discord = () => {
  window.location.href = "https://discord.gg/k9f8hZPA";
};
export default function Icons() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <VStack p={5}>
      <Flex w="100%">
        <Spacer></Spacer>
        <IconButton
          ml={8}
          icon={<FaTwitter />}
          isRound="true"
          onClick={twitter}
        ></IconButton>
        <IconButton
          ml={8}
          icon={<FaDiscord />}
          isRound="true"
          onClick={discord}
        ></IconButton>
        <IconButton
          ml={8}
          icon={<FaTelegram />}
          isRound="true"
          // onClick={}
        ></IconButton>
        <IconButton
          ml={8}
          icon={<FaGithub />}
          isRound="true"
          // onClick={}
        ></IconButton>
        <IconButton
          ml={8}
          icon={isDark ? <FaSun /> : <FaMoon />}
          isRound="true"
          onClick={toggleColorMode}
        ></IconButton>
      </Flex>
    </VStack>
  );
}
