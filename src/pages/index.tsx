import AboutUs from "@/components/home/AboutUs";
import Hero from "@/components/home/Hero";
import LatestArticles from "@/components/home/LatestArticles";
import { Box } from "@chakra-ui/react";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          The Internet Folks | TIF Hiring Round 2 - Assignment Details
        </title>
        <meta
          name="description"
          content="new Multi-page form with the following tabs:Requisition detailsJob detailsInterview settingsEach form needs to submit"
        />
        <link rel="canonical" href="https://tif-sde-assign-one.netlify.app/" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:title"
          content="The Internet Folks | TIF Hiring Round 2 - Assignment Details"
        />
        <meta
          property="og:description"
          content="Multi-page form with the following tabs:Requisition detailsJob detailsInterview settingsEach form needs to submit successfully"
        />
      </Head>
      <Box>
        <Hero />
        <AboutUs />
        <LatestArticles />
      </Box>
    </>
  );
}
