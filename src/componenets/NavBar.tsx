import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/linkedin-square-icon.png";
import { ColorModeButton, useColorMode } from "@/components/ui/color-mode";

const NavBar = () => {
  const { colorMode } = useColorMode();

  return (
    <HStack justifyContent={"space-between"} padding="10px">
      <Image src={logo} boxSize="60px" />
      <HStack>
        <ColorModeButton />
        <Text>{colorMode === "dark" ? "Dark Mode" : "Light Mode"}</Text>
      </HStack>
    </HStack>
  );
};

export default NavBar;
