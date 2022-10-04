import React from "react";
import style from "../styles/AboutSection.module.css";
import CODTextEffect from "./CODTextEffect";

const AboutSection: React.FC = () => {
  const Transition1: string = "Mhdqp vq";
  const Transition2: string = "Kjrsw th";
  const Transition3: string = "About me";
  const AboutText: string =
    "Hello, my name is Sami! I'm a web developer with extensive UI/UX design expertise. In a word, I develop websites that assist businesses in addressing business difficulties and meeting their needs. Everything from website navigation and layout to web hosting and security architecture is managed by myself. Front-end web apps are my specialty, and the major languages in my tech stack are JavaScript, React, and, of course, HTML/CSS. I'm a lifelong learner (now learning wordpress) that enjoys building, running, and pushing my body to new boundaries in my athletic adventure.";

  return (
    <div className={style.ContentContainer}>
      <CODTextEffect
        transition1={Transition1}
        transition2={Transition2}
        transition3={Transition3}
      ></CODTextEffect>
      <div className={style.TextContainer}>
        <p className={style.Text}>{AboutText} </p>
        <div className={style.MyGIF}></div>
      </div>
    </div>
  );
};

export default AboutSection;
