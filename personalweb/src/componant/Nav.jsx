import {
  Box,
  Flex,
  Avatar,
  HStack,
  Button,
  Text,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Stack,
  Icon,
  IconButton,
  useDisclosure,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose, AiTwotoneThunderbolt } from "react-icons/ai";
import { FiSun, FiMoon } from "react-icons/fi";
import logo from "../assets/img/hr.png";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  const menuProps = {
    color: useColorModeValue("pink.100", "pink.200"),
  };

  return (
    <Box
      px={4}
      boxShadow="md"
      bg={useColorModeValue("pink.100", "pink.200")}
      width="100%"
      position={"sticky"}
      top={0}
      zIndex={100}>
      <Flex
        h={16}
        alignItems="center"
        justifyContent="space-between"
        maxW={800}
        mx="auto">
        <IconButton
          size="md"
          icon={isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
          aria-label="Open Menu"
          display={["inherit", "inherit", "none"]}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems="center">
          <Avatar
            href="#"
            // https://www.linkedin.com/in/arwa-aiharbi%F0%9F%91%A9%F0%9F%8F%BB%E2%80%8D%F0%9F%92%BB-931a44253/
            as={Link}
            size="md"
            showBorder={true}
            borderColor="pink.100"
            rounded="full"
            src={logo}
          />
        </HStack>
        <IconButton
          aria-label="Color Switcher"
          icon={colorMode === "light" ? <FiMoon /> : <FiSun />}
          onClick={toggleColorMode}
        />
      </Flex>
    </Box>
  );
}

