import ChakraNextImage from "@/containers/ChakraNextImage";
import { Box, Flex, Heading, Text, useTheme } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import Food_Truck_dicover from "../../assets/images/hero/Food_Truck_dicover.png";
import frame from "../../assets/images/hero/Frame_Discover_the_Best_Food_and_Drinks.png";
import pizza from "../../assets/images/hero/pizza_discover.png";
import { movingAnimation } from "../../styles/animation";
import { motion } from "framer-motion";

const Hero = () => {
  const theme = useTheme();
  const MotionBox = motion(Box);

  return (
    <Box
      maxWidth="1440px"
      margin="auto"
      px={{ base: "4px", md: "15px", xl: "100px" }}
      id="Hero"
    >
      <Box>
        <Link href={"#get-in-touch"}>
          <Text
            as={"button"}
            fontFamily="body"
            zIndex={3}
            border={"1px solid #fff"}
            borderRadius={"21px"}
            position={"absolute"}
            top={{ base: "18px", md: "32px" }}
            right={{ base: "18px", md: "41px" }}
            bg={theme.colors.bg.btnBg}
            color={"font.white"}
            padding={{ base: "4px 22px", md: "3px 16.5px" }}
            lineHeight={{ base: "26px", md: "36px" }}
            fontWeight={"600"}
            fontSize={{ base: "11px", md: "16px" }}
            letterSpacing={"0.2px"}
            _hover={{
              backgroundColor: "font.head",
            }}
          >
            Get In Touch
          </Text>
        </Link>
        <ChakraNextImage
          src={frame}
          alt="Naturally made Healthcare frame"
          maxW={{ base: "100%", md: "50%" }}
          maxHeight="839px"
          position={"absolute"}
          zIndex={2}
          right={0}
          top={{ base: "-2px", md: "-1px" }}
          priority
        />
        <ChakraNextImage
          src={pizza}
          alt="Naturally made Healthcare Pizza"
          maxW={{ base: "100%", md: "50%" }}
          maxHeight="804px"
          position={{ base: "static", md: "absolute" }}
          zIndex={1}
          right={0}
          top={"0px"}
          priority
        />
      </Box>
      <Flex
        direction={"column"}
        zIndex={4}
        alignItems={{ base: "center", md: "start" }}
        paddingX={{ base: "10px", sm: "63px", md: "4px" }}
        textAlign={{ base: "center", md: "start" }}
      >
       <MotionBox
          maxWidth="107px"
          maxH="83px"
          display={{ base: "none", md: "block" }}
          marginTop={"34px"}
          animate={movingAnimation}
        >
          <Image src={Food_Truck_dicover} alt="Food Truck" />
        </MotionBox>
        <Heading
          fontFamily="body"
          color="font.head"
          fontSize={{ base: "38px", md: "62px" }}
          marginTop={{ base: "75px", md: "111px" }}
          marginBottom={{ base: "21px", md: "26px" }}
          lineHeight={{ base: "46px", md: "69px" }}
          fontWeight={"700"}
          maxWidth={{ md: "373px" }}
        >
          Discover the{" "}
          <Text as="span" color={"bg.btnBg"}>
            Best
          </Text>{" "}
          Food and Drinks
        </Heading>
        <Text
          maxWidth={{ md: "373px" }}
          fontWeight={"400"}
          fontSize={{ base: "11px", md: "16.44px" }}
          lineHeight={{ base: "18px", md: "27.41px" }}
          color={"font.details"}
          fontFamily="parag"
        >
          Naturally made Healthcare Products for the better care & support of
          your body.
        </Text>
        <Link href={"#Footer"}>
          <Box
            as={"button"}
            fontFamily="parag"
            marginBottom={{ base: "63px", md: "185px" }}
            marginTop={{ base: "28px", md: "41px" }}
            borderRadius={{ base: "30px", md: "34px" }}
            maxWidth={"fit-content"}
            fontSize={{ base: "12.27px", md: "18px" }}
            padding={{ base: "12px 21px", md: "14px 34px" }}
            color={"font.white"}
            lineHeight={{ base: "16.54px", md: "36px" }}
            letterSpacing={"1%"}
            fontWeight={"700"}
            bg={theme.colors.bg.btnBg}
            _hover={{
              backgroundColor: "font.head",
            }}
          >
            Explore Now!
          </Box>
        </Link>
      </Flex>
    </Box>
  );
};

export default Hero;
