import ChakraNextImage from "@/containers/ChakraNextImage";
import { Box, Flex, Heading, Text, useTheme } from "@chakra-ui/react";
import React from "react";
import food_truck from "../../assets/images/footer/food_truck.png";
import face_book from "../../assets/images/footer/face_book.png";
import twitter from "../../assets/images/footer/twitter.png";
import twitter2 from "../../assets/images/footer/twitter2.png";
import instagram from "../../assets/images/footer/instagram.png";
import { movingAnimation } from "../../styles/animation";
import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
  const theme = useTheme();
  const MotionBox = motion(ChakraNextImage);
  return (
    <Box
      bg={theme.colors.bg.contentBg}
      p={{ base: "52px 42px", md: "84px 6px 92px 6px" }}
      id="Footer"
    >
      <Flex
        maxW="1440px"
        mx={"auto"}
        px={{ base: "4px", md: "15px", xl: "104px" }}
        direction={{ base: "column", md: "row" }}
        justifyContent={"space-between"}
      >
        <MotionBox
          src={food_truck}
          alt={"food truck"}
          w={{ base: "75px", md: "161px" }}
          h={{ base: "58px", md: "125px" }}
          objectFit={"cover"}
          borderRadius={"50px"}
          alignSelf={"center"}
          animate={movingAnimation}
        />
        <Flex
          maxW={{ base: "300px", lg: "232px" }}
          mt={{ base: "42px", md: "0" }}
          direction={"column"}
          gap={{ base: "0", lg: "14px" }}
        >
          <Heading
            color={"font.head"}
            fontWeight={"600"}
            fontSize={{ base: "15.77px", md: "18.84px" }}
            lineHeight={{ base: "34.8px", md: "27.22px" }}
            letterSpacing={"3%"}
            fontFamily={"body"}
          >
            Contact Us
          </Heading>
          <Flex
            fontWeight={"400"}
            color={"font.detailsFoot"}
            fontSize={{ base: "8.76px", lg: "14.66px" }}
            lineHeight={{ base: "25.27px", lg: "23.03px" }}
            gap={{ base: "0px", lg: "15px" }}
            direction={"column"}
            fontFamily={"body"}
          >
            <Text lineHeight={{ base: "12.27px", lg: "23.03px" }}>
              Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM
              Market, XYZ-343434
            </Text>
            <Text>example2020@gmail.com</Text>
            <Text>(904) 443-0343</Text>
          </Flex>
        </Flex>
        <Flex
          gap={"14px"}
          mt={{ base: "29px", md: "0" }}
          direction={"column"}
          maxW={"153px"}
        >
          <Heading
            color={"font.head"}
            fontWeight={"600"}
            fontSize={{ base: "15.77px", md: "18.84px" }}
            lineHeight={{ base: "15.8px", md: "27.22px" }}
            letterSpacing={"3%"}
            fontFamily={"body"}
          >
            More
          </Heading>
          <Flex
            fontWeight={"400"}
            color={"font.detailsFoot"}
            fontSize={{ base: "8.76px", lg: "14.66px" }}
            lineHeight={{ base: "8.76px", lg: "23.03px" }}
            direction={"column"}
            gap={"17.5px"}
            alignContent={"center"}
            fontFamily={"body"}
          >
            <Text>About Us</Text>
            <Text>Products</Text>
            <Text>Career</Text>
            <Text>Contact Us</Text>
          </Flex>
        </Flex>
        <Flex
          maxW={"197px"}
          alignSelf={{ base: "center", md: "end" }}
          direction={"column"}
          gap={"14px"}
        >
          <Box maxW={"129px"} alignSelf={"end"}>
            <Heading
              color={"font.head"}
              fontWeight={"600"}
              fontFamily={"body"}
              fontSize={"19px"}
              lineHeight={"27.22px"}
              letterSpacing={"3%"}
              display={{ base: "none", md: "block" }}
              mb={"11px"}
            >
              Social Links
            </Heading>
            <Flex
              gap={"7px"}
              display={{ base: "none", md: "flex" }}
              justifyContent={"end"}
              mt={"-25px"}
              alignItems={"center"}
            >
              <Link href="#Hero">
                <ChakraNextImage
                  src={instagram}
                  alt={"instagram"}
                  w="21px"
                  h="21px"
                  objectFit={"cover"}
                  borderRadius={"2px"}
                />
              </Link>
              <Link href="#Hero">
                <ChakraNextImage
                  src={twitter}
                  alt={"twitter"}
                  w="69px"
                  h="69px"
                  objectFit={"cover"}
                  borderRadius={"2px"}
                />
              </Link>
              <Link href="#Hero">
                <ChakraNextImage
                  src={face_book}
                  alt={"facebook"}
                  ml={"5px"}
                  w="21px"
                  h="21px"
                  objectFit={"cover"}
                  borderRadius={"2px"}
                />
              </Link>
            </Flex>
          </Box>

          <Text
            fontWeight={{ base: "400", md: "400" }}
            color={"#828B9C"}
            fontSize={{ base: "8.76px", md: "14.66px" }}
            lineHeight={{ base: "8.13px", md: "25.12px" }}
            textAlign={"center"}
            mt={{ base: "30px", md: "65px" }}
            fontFamily={"mono"}
          >
            © 2022 Food Truck Example
          </Text>
          <Flex
            gap={"22px"}
            display={{ base: "flex", md: "none" }}
            justifyContent={{ base: "center", md: "end" }}
          >
            <Link href="#">
              <ChakraNextImage
                src={instagram}
                alt={"instagram"}
                w="12px"
                h="12px"
                objectFit={"cover"}
                borderRadius={"2px"}
              />
            </Link>
            <Link href="#">
              <ChakraNextImage
                src={twitter2}
                alt={"twitter2"}
                w="12px"
                h="12px"
                objectFit={"cover"}
                borderRadius={"2px"}
              />
            </Link>
            <Link href="#">
              <ChakraNextImage
                src={face_book}
                alt={"facebook"}
                w="12px"
                h="12px"
                objectFit={"cover"}
                borderRadius={"2px"}
              />
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
