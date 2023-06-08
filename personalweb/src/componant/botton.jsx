import React from "react";
import { chakra, Box, Stack, Flex, Link } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
export default function App() {
    const navigate = useNavigate();
  return (
    <Flex
      bg="#ffff"
      _dark={{ bg: "#ffff" }}
      w="full"
      alignItems="center"
      justifyContent="center">
      <Flex justify="center" bg="white" _dark={{ bg: "gray.800" }} w="full">
        <Box
          w={{ base: "full", md: "75%", lg: "50%" }}
          px={6}
          py={30}
          textAlign={{ base: "left", md: "center" }}>
          <Stack
            justifyContent={{ base: "left", md: "center" }}
            direction={{ base: "column", sm: "row" }}
            spacing={6}
            mt={6}>
            <Box display="inline-flex" rounded="md" shadow="md">
              <Link
                w="full"
                display="inline-flex"
                alignItems="center"
                justifyContent="center"
                px={5}
                py={3}
                border="solid transparent"
                fontWeight="bold"
                rounded="md"
                _light={{
                  color: "white",
                }}
                bg="pink.100"
                _dark={{ bg: "pink.100" }}
                _hover={{
                  bg: "pink.200",
                  _dark: { bg: "pink.200" },
                }}
                onClick={() => navigate("/WhoisArwa!")}>
              ?!🤔 Who is Arwa
               </Link>
            </Box>
          </Stack>
        </Box>
      </Flex>
    </Flex>
  );
}
