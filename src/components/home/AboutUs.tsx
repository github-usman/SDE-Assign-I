import React from "react";
import { Box, Button, Flex, Heading, Text, useTheme } from "@chakra-ui/react";
import about_us from "../../assets/images/about/about_us.png";
import ChakraNextImage from "@/containers/ChakraNextImage";
import Link from "next/link";

const AboutUs = () => {
  const theme = useTheme();
  return (
    <Box
      bg={{
        base: theme.colors.bg.aboutBg,
        md: "transparent",
      }}
      bgGradient={{
        md: "linear(90.07deg, rgba(30, 42, 93, 0.04) 30.91%, rgba(48, 62, 130, 0.04) 64.79%, rgba(60, 80, 157, 0.04) 91.94%)", // Gradient background on md and larger screens
      }}
    >
      <Flex
        justify={"space-between"}
        m={"auto"}
        mt={{ base: "0", xlg: "186px" }}
        alignItems={"center"}
        maxW={"1030px"}
        gap={"1rem"}
        p={{ base: "140px 10px", sm: "140px 50px", md: "0 4px" }}
        direction={{ base: "column", md: "row" }}
      >
        <ChakraNextImage
          src={about_us}
          alt={"Naturally made Healthcare Pizza"}
          maxW="384px"
          maxH="468px"
          objectFit={"cover"}
          display={{ base: "none", md: "block" }}
        />
        <Flex
          direction={"column"}
          alignItems={{ base: "center", md: "flex-start" }}
          textAlign={{ base: "center", md: "start" }}
          maxW={"447px"}
        >
          <Heading
            fontFamily="heading"
            color="font.head"
            fontSize={{ base: "26px", md: "45px" }}
            lineHeight={{ base: "35px", md: "27px" }}
            fontWeight={"600"}
          >
            About Us
          </Heading>
          <Text
            fontFamily="parag"
            fontSize={{ base: "11px", md: "15px" }}
            lineHeight={{ base: "21px", md: "27px" }}
            fontWeight={"400"}
            color={"font.details"}
            m={{ base: "21px 0", md: "27.41px 0px 21.59px 0px" }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&#39s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. t has survived not
            only five centuries.
          </Text>
          <Link href={"#"}>
            <Text
              fontFamily={"body"}
              as={"button"}
              borderRadius={{ base: "27px", md: "21px" }}
              maxW={"fit-content"}
              fontSize={{ base: "11", md: "16px" }}
              lineHeight={{ base: "20px", md: "36px" }}
              p={{ base: "4px 22px", md: "3px 26px" }}
              color={"font.white"}
              letterSpacing={"3%"}
              fontWeight={"600"}
              bg={theme.colors.bg.btnBg}
              _hover={{
                backgroundColor: "font.head",
              }}
            >
              Read More
            </Text>
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default AboutUs;
