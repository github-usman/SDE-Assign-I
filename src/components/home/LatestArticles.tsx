import {
  Box,
  Flex,
  Grid,
  Heading,
  Text
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { articlesItem } from "../../assets/constants/latest-articles";
import LatestArticlesItem from "./LatestArticlesItem";
import {variants} from "../../styles/animation";

const LatestArticles = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    setDirection(1);
    setTabIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrev = () => {
    setDirection(-1);
    setTabIndex((prevIndex) => prevIndex - 1);
  };

 
  return (
    <Box maxW="1440px" m="auto" overflow="hidden" px={{base:"4px",md:"15px",xl:"108px"}} >
      <Heading
        fontFamily={{base:"heading",md:"body"}}
        color="font.head"
        fontSize={{base:"28px",md:"56px"}}
        lineHeight={{base:"54px",md:"42px"}}
        fontWeight={"600"}
        letterSpacing={"2px"}
        mt={{base:"132px",md:"157px"}}
        mb={{base:"23px",md:"83px"}}
        textAlign={{base:"center",md:"left"}}
      >
        Latest Articles
      </Heading>

      <motion.div
        custom={direction}
        initial="enter"
        animate="center"
        exit="exit"
        variants={variants}
        key={tabIndex}
      >
        <Grid templateColumns={{base:"repeat(1, 1fr)",md:"repeat(2, minmax(0, 381px))", lg:"repeat(3, minmax(0, 381px))"}}  placeItems={{base:'center',md:"start"}} justifyContent={"space-between"} gap={{base:"61px",md:"41px"}}>
          {articlesItem.slice(tabIndex * 3, 3 * (tabIndex + 1)).map((item) => (
            <LatestArticlesItem 
            imageSrc={item.imageSrc} 
            title={item.title}     
            details={item.details} 
            key={item.id} />
          ))}
        </Grid>
      </motion.div>
      <Flex
        alignItems={"center"}
        gap={{base:"7px",md:"14px"}}
        my={{base:"52px",md:"65px"}}
        justifyContent={"center"}
      >
        <Flex
          as={"button"}
          alignItems={"center"}
          justifyContent={"center"}
          border={{base:`1px solid ${tabIndex === 0?'#AFAFAF':'#424961'}`,md:`2px solid ${tabIndex === 0?'#AFAFAF':'#424961b9'}`}}
          w={{base:"16px",md:"28px"}}
          h={{base:"16px",md:"28px"}}
          borderRadius={"5px"}
          onClick={handlePrev}
          disabled={tabIndex == 0}
          fontSize={{base:"12px",md:"20px"}}
          fontWeight={"600"}
        >
          <FaChevronLeft
            color={`${tabIndex === 0?'#AFAFAF':'#424961'}`}
          />
        </Flex>
        <Text
          fontFamily={"body"}
          textColor={"#424961"}
          fontWeight={"400"}
          fontSize={{base:"12px",md:"22px"}}
          lineHeight={"27.22px"}
        >
          {tabIndex + 1}/{2}
        </Text>
        <Flex
          as={"button"}
          alignItems={"center"}
          justifyContent={"center"}
          border={{base:`1px solid ${tabIndex === 0?'#AFAFAF':'#424961'}`,md:`2px solid ${tabIndex === 1?'#AFAFAF':'#424961b9'}`}}
          w={{base:"16px",md:"28px"}}
          h={{base:"16px",md:"28px"}}
          borderRadius={"5px"}
          onClick={handleNext}
          disabled={tabIndex == 1}
          fontSize={{base:"12px",md:"20px"}}
          fontWeight={"600"}
        >
          <FaChevronRight
            
            fontWeight={"100"}
            color={`${tabIndex === 1?'#AFAFAF':'#424961'}`}
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default LatestArticles;
