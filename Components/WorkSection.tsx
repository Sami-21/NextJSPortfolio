import React from "react";
import CODTextEffect from "./CODTextEffect";
import style from "../styles/WorkSection.module.css";
import Project from "./Project";

interface project {
  name: string;
  description: string;
  url: string;
}

const WorkSection: React.FC = () => {
  const Transition1: string = "Mnut";
  const Transition2: string = "Plwr";
  const Transition3: string = "Work";
  let projects: project[] = [
    {
      name: "project name",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      url: "",
    }
  ]
  return (
    <div className={style.ContentContainer}>
      <CODTextEffect
        transition1={Transition1}
        transition2={Transition2}
        transition3={Transition3}
      ></CODTextEffect>
      {projects.map((project: project, index: number) => (
        <div className={style.ProjectOuterContainer} key={index} >
          <Project name={project.name} description={project.description} url={project.url} key={index} />
        </div>
      ))}
    </div>
  );
};

export default WorkSection;
