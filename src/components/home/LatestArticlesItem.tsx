import ChakraNextImage from "@/containers/ChakraNextImage";
import { Box, Flex, Heading, Text, useBreakpointValue } from "@chakra-ui/react";
import React, { useEffect, useMemo, useState } from "react";
import { StaticImageData } from "next/image";

interface ILatestArticleItemProps {
  imageSrc?: string | StaticImageData;
  title?: string;
  details?: string;
}

const LatestArticlesItem: React.FC<ILatestArticleItemProps> = ({
  imageSrc = '"../../assets/images/latest-articles/Broccoli_Cheese_Soup.jpeg',
  title = "latest item",
  details = "details of the item",
}) => {
  const sliceValue = useBreakpointValue({ base: 191, sm: 120 }); 
  const [seeMore, setSeeMore] = useState(sliceValue); 
  const detailsLength = useMemo(() => details.length, [details]);

  useEffect(() => {
    setSeeMore(sliceValue);
  }, [sliceValue]);

  const handleSeeMore = () => {
    setSeeMore((prev) => (prev === sliceValue ? detailsLength : sliceValue));
  };

  return (
    <Flex
      direction={"column"}
      placeItems={"center"}
      padding={{ base: "40px 16px", md: "27px" }}
      border={{ base: "0.88px solid #373737", md: "1.37px solid #93A2D361" }}
      boxShadow={"0px 0px 1px 1px #93A2D361"}
      borderRadius={{ base: "26.77px", md: "20.94px" }}
      w={"100%"}
      maxW={{ base: "271px", md: "inherit" }}

    >
      <ChakraNextImage
        src={imageSrc}
        alt={title}
        style={{ objectPosition: "bottom" }}
        width={{ base: "204px", md: "326px" }}
        height={{ base: "166px", md: "257px" }}
        objectFit={"cover"}
        borderRadius={{ base: "27px", md: "21px" }}
      />
      <Flex direction={'column'} alignItems={{base:"center",md:'start'}} marginTop={{ base: "39px", md: "35.51px" }}  maxWidth={"295px"}>
        <Heading
          as="h6"
          marginBottom={{base:"10px",md:"14px"}}
          fontFamily="heading"
          fontSize={{ base: "16px", md: "21px" }}
          lineHeight={{ base: "35px", md: "27px" }}
          letterSpacing={{base:"1px",md:"0px"}}
          color={"font.head"}
          fontWeight={"700"}
        >
          {title}
        </Heading>
        <Text
          fontFamily="parag"
          fontSize={{ base: "12px", md: "15px" }}
          lineHeight={{ base: "22px", md: "27px" }}
          fontWeight={"400"}
          color={"font.details"}
          maxW={{base:"213px",md:"295px"}}
          letterSpacing={{base:"-0.7px",md:"-0.2px"}}
        >
          {details.slice(0, seeMore)}
          <Text as={"span"} display={seeMore !== sliceValue ? "none" : "inline"}>
            ...
          </Text>
        </Text>
        <Box
          as="button"
          fontFamily="body"
          borderRadius={{ base: "27px", md: "21px" }}
          maxWidth={"fit-content"}
          fontSize={{ base: "11px", md: "16.44px" }}
          lineHeight={{ base: "16.44px", md: "35.59px" }}
          padding={{ base: "4px 33px", md: "3px 26px" }}
          backgroundColor={"transparent"}
          border={{ base: "2px solid #424961", md: "1px solid #424961" }}
          boxShadow={"0px 0px 1px 0.1px #424961"}
          color={"#424961"}
          letterSpacing={"0.2px"}
          fontWeight={"600"}
          marginTop={{ base: "26px", md: "30px" }}
          marginBottom={{ base: "0px", md: "14px" }}
          _hover={{
            backgroundColor: "font.head",
            color: "font.white",
          }}
          onClick={handleSeeMore}
        >
          {seeMore === sliceValue ? "Read More" : "Hide"}
        </Box>
      </Flex>
    </Flex>
  );
};

export default LatestArticlesItem;
