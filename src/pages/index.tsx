import AboutUs from "@/components/home/AboutUs";
import Hero from "@/components/home/Hero";
import LatestArticles from "@/components/home/LatestArticles";
import { Box} from "@chakra-ui/react";

export default function Home() {
  return (
    <Box>
      <Hero/>
       <AboutUs/>
      <LatestArticles/> 
    </Box>
  );
}
