import React from "react";
import {
  chakra,
  Box,
  Heading,
  Link,
  Image,
  Skeleton,
  Text,
  Divider,
  HStack,
  Stack,
  Tag,
  Wrap,
  WrapItem,
  useColorModeValue,
  Container,
  VStack,
  Icon,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import "../app.css";
import { useParams } from "react-router-dom";

const ArticleList = () => {
  const pa = useParams();
  console.log();

  return (
    <Container maxW={"7xl"} p="125px">
      <Stack direction={{ base: "column", md: "row" }} justifyContent="center">
        <Stack
          direction="column"
          spacing={6}
          justifyContent="center"
          alignItems="center"
          maxW="600px">
          <Text
            fontSize="1.3rem"
            textAlign="right"
            lineHeight="1.375"
            fontWeight="400"
            color="gray.500">
          </Text>
        </Stack>
      </Stack>
      <Heading as="h2" marginTop="5">
           أروى إنسانه مكافحه تطمح ان تصبح أقوى و أكبر مبرمجه و هكر على مستوى العالم وستصبح قريبا بإذن الله
      </Heading>
      <Divider marginTop="5" />
      <Wrap spacing="30px" marginTop="5">
        
        <WrapItem width={{ base: "100%" }}>
          <Box w="100%">
            <Text
              as="p"
              fontSize="lg"
              marginTop="2"
              marginBottom={"6"}
              lineHeight={"2"}>
{/*           
<br></br>
<hr></hr>   */}
<br></br>
  

 أنا أروى الحربي من المملكه العربيه السعوديه أعيش بالرياض عمري 20 سنه تخرجت من الكليه التقنيه الرقمية دبلوم برمجيات حاسب بمرتبة الشرف الثانيه مهتمه بتطوير المواقع و الأمن السيبراني واكتشاف الثغرات
اود بالمستقبل اكمال دراستي  بتخصص أمن سيبراني وأتمنى ان اكمل الدراسات العليا ماجستير العلوم في الجرائم السيبرانية والتحقيق الجنائي الرقمي بجامعة الأمير نايف للعلوم الامنية , انا شخص شغوف بالبحث والتحري اعشق البحث عن الحقيقه وايجادها اينما كانت 

<hr>
</hr> <br></br>
حقيقةً أنا الآن على قيد التعرف على نفسي الصوره ضبابيه الى الآن لست متاكدة اين مكاني ومجالي المصنوع من أجلي من مجالات الحاسب ولهذا السبب احيانا اشتت نفسي و أجرب جميع المجالات بوقت واحد لانني اريد ان اعرف كل شي😔 , لكن أرى انني سأصبح بالمستقبل شخص ذو منصب وصيت عالي ان شاءالله

            </Text>
            <hr></hr>
         
          </Box>
        </WrapItem>
      </Wrap>
    </Container>
  );
};

export default ArticleList;
