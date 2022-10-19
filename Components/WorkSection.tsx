import React from "react";
import CODTextEffect from "./CODTextEffect";
import style from "../styles/WorkSection.module.css";

const WorkSection: React.FC = () => {
  const Transition1: string = "Mnut";
  const Transition2: string = "Plwr";
  const Transition3: string = "Work";

  return (
    <div className={style.ContentContainer}>
      <CODTextEffect
        transition1={Transition1}
        transition2={Transition2}
        transition3={Transition3}
      ></CODTextEffect>
    </div>
  );
};

export default WorkSection;
