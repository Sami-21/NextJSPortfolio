import React from "react";
import useTextTyping from "../hooks/useTextTyping";
import style from "../styles/AboutSection.module.css";
import CODTextEffect from "./CODTextEffect";

const AboutSection: React.FC = () => {
  const Transition1: string = "Mhdqp vq";
  const Transition2: string = "Kjrsw th";
  const Transition3: string = "About me";
  const AboutText: string =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos dolorumfuga iure et? Exercitationem, molestiae magnam placeat laboriosameaque inventore deleniti provident similique excepturi cum laborumillo et explicabo nihil sequi delectus animi non voluptatem quo quibusdam! Eos, expedita sit!";
  //const AboutTextTyping = useTextTyping(AboutText, 10);

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
