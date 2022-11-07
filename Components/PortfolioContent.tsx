import React, { useEffect, useState } from "react";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import GlitchedText from "./GlitchedText";
import IntroText from "./IntroText";
import NavBar from "./NavBar";
import Noisebackground from "./Noisebackground";
import SkillsSection from "./SkillsSection";
import SocialLinks from "./SocialLinks";
import WorkSection from "./WorkSection";

interface Props {
  showCompDelay: number;
}

const PortfolioContent: React.FC<Props> = ({ showCompDelay }) => {
  const [isShown, setIsShown] = useState(false);
  useEffect(() => {
    const timer: NodeJS.Timer = setTimeout(() => {
      setIsShown(true);
    }, showCompDelay);
    return () => {
      clearTimeout(timer);
    };
  }, [isShown, showCompDelay]);
  return isShown ? (
    <>
      <Noisebackground />
      <NavBar />
      <IntroText />
      <AboutSection />
      <WorkSection />
      <SkillsSection />
      <ContactSection />
      <SocialLinks />
    </>
  ) : null;
};

export default PortfolioContent;
