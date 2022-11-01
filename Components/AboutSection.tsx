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
          <TextTypingEffect text="Hello, my name is Sami! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quibusdam in sapiente, dolore placeat aliquam minus temporibus quod, beatae voluptates possimus culpa? Optio exercitationem nisi explicabo magni ut mollitia minima quod, asperiores maiores ex voluptas." />
        </div>
        <div className={style.GIFContainer}>
          <div className={style.MyGIF}></div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
