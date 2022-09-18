import type { NextPage } from "next";
import AboutSection from "../Components/AboutSection";
import IntroText from "../Components/IntroText";
import NavBar from "../Components/NavBar";
import Noisebackground from "../Components/Noisebackground";
import WorkSection from "../Components/WorkSection";

import Intro from "../Components/Intro";
import LoadingWidget from "../Components/LoadingWidget";

const Home: NextPage = () => {
  return (
    <div className=" min-h-screen w-screen">
      <Intro destroyDelay={500} />
      <LoadingWidget />
      <Noisebackground showCompDelay={500} />
      <NavBar />
      {/* <IntroText />
      <AboutSection />
      <WorkSection /> */}
    </div>
  );
};

export default Home;
