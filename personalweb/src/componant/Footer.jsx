import {
  Stack,
  HStack,
  Link,
  Divider,
  Image,
  IconButton,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import logo from "../assets/img/hr.png";

const links = [];
const accounts = [
  {
    url: "https://github.com/Arwaaa9",
    label: "Github Account",
    type: "gray",
    icon: <FaGithub />,
  },
  {
    url: "https://www.linkedin.com/in/arwa-aiharbi%F0%9F%91%A9%F0%9F%8F%BB%E2%80%8D%F0%9F%92%BB-931a44253/",
    label: "LinkedIn Account",
    type: "linkedin",
    icon: <FaLinkedin />,
  },
];

const Footer = () => {
  return (
    <Stack
      maxW="5xl"
      marginInline="auto"
      p={8}
      spacing={{ base: 8, md: 0 }}
      justifyContent="space-between"
      alignItems="center"
      direction={{ base: "column", md: "row" }}>
      <Link href="https://www.linkedin.com/in/arwa-aiharbi%F0%9F%91%A9%F0%9F%8F%BB%E2%80%8D%F0%9F%92%BB-931a44253/" isExternal>
        <Image
          w="70px"
          src={logo}
          alt="TemplatesKart"
        />
      </Link>
      <HStack spacing={4} alignItems="center" d={{ base: "none", md: "flex" }}>
        {links.map((link, index) => (
          <CustomLink key={index}>{link}</CustomLink>
        ))}
      </HStack>
      <Stack
        direction="row"
        spacing={5}
        pt={{ base: 4, md: 0 }}
        alignItems="center">
        {accounts.map((sc, index) => (
          <IconButton
            key={index}
            as={Link}
            isExternal
            href={sc.url}
            aria-label={sc.label}
            bg={"Pink"}
            _hover={{ bg: "pink.200" }}
            icon={sc.icon}
            rounded="md"
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default Footer;
