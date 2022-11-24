import React from "react";
import style from "../styles/AboutSection.module.css";
import CODTextEffect from "./CODTextEffect";
import TextTypingEffect from "./TextTypingEffect";

const AboutSection: React.FC = () => {
  const Transition1: string = "Mhdqp vq";
  const Transition2: string = "Kjrsw th";
  const Transition3: string = "About me";

  return (
    <div className={style.ContentContainer} id="About">
      <CODTextEffect
        transition1={Transition1}
        transition2={Transition2}
        transition3={Transition3}
      ></CODTextEffect>
      <div className={style.TextContainer}>
        <div className={style.Text}>
          <TextTypingEffect text="Welcome! My name is Sami. a Full Stack Developer with one year of practical experience designing, creating, and implementing solutions utilizing a variety of technologies and coding languages. Seeking a challenging career as a Full-stack Developer where I can apply my vast development skills and hands-on technical abilities." />
        </div>
        <div className={style.GIFContainer}>
          <div className={style.MyGIF}></div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
