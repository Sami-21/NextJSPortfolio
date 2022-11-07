import React from "react";
import CODTextEffect from "./CODTextEffect";
import style from "../styles/WorkSection.module.css";
import Project from "./Project";

interface project {
  name: string;
  description: string;
  links: link[];
}
interface link {
  text: string;
  url: string;
}
const WorkSection: React.FC = () => {
  const Transition1: string = "Mnut";
  const Transition2: string = "Plwr";
  const Transition3: string = "Work";
  const projects: project[] = [
    {
      name: "Software Developer at Originova",
      description:
        "Originova help businesses elevate their value through custom software development, captivating graphic design, Audiovisual in its finest quality, reliable network and security systems.",
      links: [{ text: "visit website", url: "https://www.originova.net" }],
    },
  ];
  return (
    <div className={style.ContentContainer} id="Work">
      <CODTextEffect
        transition1={Transition1}
        transition2={Transition2}
        transition3={Transition3}
      ></CODTextEffect>
      {projects.map((project: project, index: number) => (
        <div className={style.ProjectOuterContainer} key={index}>
          <Project
            name={project.name}
            description={project.description}
            links={project.links}
            key={index}
          />
        </div>
      ))}
    </div>
  );
};

export default WorkSection;
