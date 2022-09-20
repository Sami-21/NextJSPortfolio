import type { NextPage } from "next";
import Head from "next/head";

import AboutSection from "../Components/AboutSection";
import IntroText from "../Components/IntroText";
import NavBar from "../Components/NavBar";
import Noisebackground from "../Components/Noisebackground";
import WorkSection from "../Components/WorkSection";

import Intro from "../Components/Intro";
import LoadingWidget from "../Components/LoadingWidget";
// import TypingTextEffect from "../Components/TypingTextEffect";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Maachi Sami</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="Software developer portfolio" />
        <meta
          name="keywords"
          content="Web development, Software engineering , full stack development"
        />
        <meta name="author" content="Sami Maachi" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className=" min-h-screen max-w-screen">
        <Intro destroyDelay={500} />
        <LoadingWidget />
        <Noisebackground showCompDelay={500} />
        <NavBar showCompDelay={5000} />
        {/* <TypingTextEffect /> */}
        {/* <IntroText />
      <AboutSection />
      <WorkSection /> */}
      </div>
    </>
  );
};

export default Home;
