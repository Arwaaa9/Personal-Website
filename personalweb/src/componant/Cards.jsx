import {
  chakra,
  Box,
  Stack,
  Text,
  Image,
  Container,
  Button,
  useColorModeValue,
  SimpleGrid,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import ReactImg from "../assets/img/koromi.jpg";
import NativeImg from "../assets/img/hhh.jpg";
// import { useEffect } from "react";
// import { Navigate } from "react-router-dom";

const Index = () => {
  return (
    <Container p={{ base: 5, md: 10 }} w="100%" maxW="6xl">
      <Text
        fontSize="3xl"
        fontWeight="bold"
        textAlign={"center"}
        pb={10}
        color={"#3182ce"}>

      </Text>
      <SimpleGrid spacing={10} columns={{ base: 1, md: 2 }}>
        <Box
          borderWidth="1px"
          _hover={{ shadow: "lg" }}
          rounded="md"
          textAlign={"right"}
          overflow="hidden"
          bg={useColorModeValue("white", "gray.800")}>
          <Image src={ReactImg} objectFit="cover" w="100%" />
          <Box p={{ base: 3, sm: 5 }}>
            <Box mb={6}>
              <chakra.h3
                fontSize={{ base: "lg", sm: "2xl" }}
                fontWeight="bold"
                textAlign={"right"}
                lineHeight="1.2"
                mb={2}>
                Kuromi
              </chakra.h3>
              <Text fontSize={{ base: "md", sm: "lg" }} noOfLines={2}>
              Kuromi is a Sanrio character introduced in 2005, from the My Melody universe as the self-proclaimed rival of My Melody, she is one of the main characters in the Japanese anime franchise Kuromi (TV Series). Kuromi was also introduced in 2005 and spun-off sub-series and related media....
              </Text>
            </Box>
            <Stack
              justify="space-between"
              direction={{ base: "column", sm: "row" }}
              spacing={{ base: 2, sm: 1 }}>
              <CustomAccordion></CustomAccordion>
            </Stack>
          </Box>
        </Box>

        <Box
          borderWidth="1px"
          _hover={{ shadow: "lg" }}
          rounded="md"
          overflow="hidden"
          bg={useColorModeValue("white", "gray.800")}>
          <Image
            src={NativeImg}
            objectFit="fill"
            w={"100%"}
            maxH={"67%"}
            />
          <Box p={{ base: 3, sm: 5 }}>
            <Box mb={6}>
              <chakra.h3
                fontSize={{ base: "lg", sm: "2xl" }}
                fontWeight="bold"
                lineHeight="1.2"
                mb={2}>
               Hellokitty     
              </chakra.h3>
              <Text fontSize={{ base: "md", sm: "lg" }} noOfLines={2}>
              She is portrayed as a bright and kind-hearted girl, very close... 
              </Text>
            </Box>
            <Stack
              justify="space-between"
              direction={{ base: "column", sm: "row" }}
              spacing={{ base: 2, sm: 0 }}>
              <CustomAccordion></CustomAccordion>
            </Stack>
          </Box>
        </Box>
      </SimpleGrid>
    </Container>
  );
};

const CustomButton = ({ children, ...props }) => {
  return (
    <Button
      textTransform="uppercase"
      lineHeight="inherit"
      rounded="md"
      {...props}>
      {children}
    </Button>
  );
};
const CustomAccordion = ({ children, ...props }) => {
  return (
    <Accordion defaultIndex={[]} allowMultiple w={"100%"}>
      <AccordionItem>
        <h2>
          <AccordionButton bg={"pink.100"} _hover={{ bg: "pink.200" }}>
            <Box as="span" flex="2" textAlign="left">
           ! Read more
            </Box>
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
        to her twin sister Mimmy. She is good at baking cookies and loves her mama's homemade apple pie. She likes to play the piano and collect cute things, and her favorite subjects in school are English, music, and art
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default Index;
