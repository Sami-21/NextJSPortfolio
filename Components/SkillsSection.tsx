import React from "react";
import CODTextEffect from "./CODTextEffect";
import style from "../styles/SkillsSection.module.css";
import HTMLLogo from "../assets/html_logo.svg";
import CSSLogo from "../assets/css_logo.svg";
import TailwindCSSLogo from "../assets/tailwind-css_logo.svg";
import JSLogo from "../assets/js_logo.svg";
import TSLogo from "../assets/ts_logo.svg";
import ReactLogo from "../assets/react_logo.svg";
import VueLogo from "../assets/vue_logo.svg";
import NodeJSLogo from "../assets/nodejs_logo.svg";
import ExpressJSLogo from "../assets/expressjs_logo.svg";
import MongoDBLogo from "../assets/mongodb_logo.svg";
import PHPLogo from "../assets/php_logo.svg";
import LaravelLogo from "../assets/laravel_logo.svg";
import Image from "next/image";

interface skill {
  imageAlt: string;
  image: string;
}
interface expertise {
  title: string;
  skills: skill[];
}

const SkillsSection: React.FC = () => {
  const Transition1 = "Qortav";
  const Transition2 = "Wpolmg";
  const Transition3 = "Skills";

  const skillSet: expertise[] = [
    {
      title: "Front-end",
      skills: [
        {
          imageAlt: "Tailwind",
          image: TailwindCSSLogo,
        },
        {
          imageAlt: "JavaScript",
          image: JSLogo,
        },
        {
          imageAlt: "TypeScript",
          image: TSLogo,
        },
        {
          imageAlt: "React JS",
          image: ReactLogo,
        },
        {
          imageAlt: "Vue JS",
          image: VueLogo,
        },
      ],
    },
    {
      title: "Back-end",
      skills: [
        {
          imageAlt: "Node JS",
          image: NodeJSLogo,
        },
        {
          imageAlt: "Express Js",
          image: ExpressJSLogo,
        },
        {
          imageAlt: "MongoDB",
          image: MongoDBLogo,
        },
        {
          imageAlt: "PHP",
          image: PHPLogo,
        },
        {
          imageAlt: "Laravel",
          image: LaravelLogo,
        },
      ],
    },
  ];

  return (
    <div className={style.SkillsContainer} id="Skills">
      <CODTextEffect
        transition1={Transition1}
        transition2={Transition2}
        transition3={Transition3}
      ></CODTextEffect>
      {skillSet.map((expertise: expertise, index: number) => (
        <div key={index}>
          <h3 className={style.SkillHeader}>{expertise.title}</h3>
          <div className={style.CategoryContainer}>
            {expertise.skills.map((skill: skill, index: number) => (
              <div className={style.ToolContainer} key={index}>
                <Image src={skill.image} alt={skill.imageAlt} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsSection;
