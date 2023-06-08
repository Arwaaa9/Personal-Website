import * as React from "react";
import {
  chakra,
  Container,
  Stack,
  Text,
  Box,
 
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";


const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Stack direction={{ base: "column", md: "row" }} justifyContent="center">
        <Stack
          direction="column"
          spacing={6}
          justifyContent="center"
          alignItems="center"
          maxW="600px">
         
          <Box
            className="bg-grid"
            w={"0 "}
            h={"200px"}
            bg={"transparent"}
            position={"absolute"}></Box>
          <chakra.h1
            position={"relative"}
            fontSize="5xl"
            fontWeight="bold"
            textAlign="right"
            lineHeight={1.9}>
            <chakra.span color="blue.500" position={"absolute"} top={"-50px"}>
            </chakra.span>
         <br></br> Arwa Al-Harbi
            <chakra.span color="blue.500"></chakra.span>
          </chakra.h1>
          <Text
            fontSize="1.3rem"
            textAlign="right"
            lineHeight="1.375"
            fontWeight="400"
            color="gray.500">
           
          </Text>
        </Stack>
        <Box ml={{ base: 0, md: 5 }} pos="relative">
          <DottedBox w="200px" h="100%" />
         
        </Box>
      </Stack>
    </Container>
  );
};

function DottedBox() {
  return (
    <Box
      position="absolute"
      left="-45px"
      top="-30px"
      height="full"
      maxW="700px"
      zIndex={-1}>
  
    </Box>
  );
}

export default HeroSection;
