import React from "react";
import CODTextEffect from "./CODTextEffect";
import style from "../styles/SkillsSection.module.css";
import GlitchedText from "./GlitchedText";
import HTMLLogo from "../assets/html_logo.svg";
import CSSLogo from "../assets/css_logo.svg";
import JSLogo from "../assets/js_logo.svg";
import ReactLogo from "../assets/react_logo.svg";
import VueLogo from "../assets/vue_logo.svg";
import NodeJSLogo from "../assets/nodejs_logo.svg";
import ExprssJSLogo from "../assets/expressjs_logo.svg";
import MongoDBLogo from "../assets/mongodb_logo.svg";
import PHPLogo from "../assets/php_logo.svg";
import LaravelLogo from "../assets/laravel_logo.svg";
import Image from "next/image";

const SkillsSection: React.FC = () => {
  const Transition1 = "Qortav";
  const Transition2 = "Wpolmg";
  const Transition3 = "Skills";

  return (
    <div className={style.SkillsContainer} id="Skills">
      <CODTextEffect
        transition1={Transition1}
        transition2={Transition2}
        transition3={Transition3}
      ></CODTextEffect>
      <h3 className={style.SkillHeader}>Front-end</h3>
      <div className={style.CategoryContainer}>
        <div className={style.ToolContainer}>
          <Image src={HTMLLogo} alt="HTML" />
        </div>
        <div className={style.ToolContainer}>
          <Image src={CSSLogo} alt="CSS" />
        </div>
        <div className={style.ToolContainer}>
          <Image src={JSLogo} alt="JavaScript" />
        </div>
        <div className={style.ToolContainer}>
          <Image src={ReactLogo} alt="React JS" />
        </div>
        <div className={style.ToolContainer}>
          <Image src={VueLogo} alt="Vue JS" />
        </div>
      </div>
      <h3 className={style.SkillHeader}>Back-end</h3>
      <div className={style.CategoryContainer}>
        <div className={style.ToolContainer}>
          <Image src={NodeJSLogo} alt="Node JS" />
        </div>
        <div className={style.ToolContainer}>
          <Image src={ExprssJSLogo} alt="Express JS" />
        </div>
        <div className={style.ToolContainer}>
          <Image src={MongoDBLogo} alt="MongoDB" />
        </div>
        <div className={style.ToolContainer}>
          <Image src={PHPLogo} alt="PHP" />
        </div>
        <div className={style.ToolContainer}>
          <Image src={LaravelLogo} alt="Laravel" />
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
