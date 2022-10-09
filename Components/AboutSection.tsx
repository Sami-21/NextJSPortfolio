import React from "react";
import style from "../styles/AboutSection.module.css";
import CODTextEffect from "./CODTextEffect";
import TextTypingEffect from "./TextTypingEffect";

const AboutSection: React.FC = () => {
  const Transition1: string = "Mhdqp vq";
  const Transition2: string = "Kjrsw th";
  const Transition3: string = "About me";

  return (
    <div className={style.ContentContainer}>
      <CODTextEffect
        transition1={Transition1}
        transition2={Transition2}
        transition3={Transition3}
      ></CODTextEffect>
      <div className={style.TextContainer}>
        <div className={style.Text}>
          <TextTypingEffect text="Hello, my name is Sami! I'm a web developer with extensive UI/UX design expertise. Front-end web apps are my specialty, and the major languages in my tech stack are JavaScript,TypeScript ,Vue, React, and, of course, HTML/CSS. I'm a lifelong learner (now learning wordpress) that enjoys building, perfecting, and pushing myself to new boundaries in my software development adventure." />
        </div>
        <div className={style.MyGIF}></div>
      </div>
    </div>
  );
};

export default AboutSection;
