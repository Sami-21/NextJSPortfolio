import React from "react";
import { useInView } from "react-intersection-observer";
import style from "../styles/Project.module.css";


interface ProjectProps {
  name: string;
  description: string;
  url: string;
}


const Project: React.FC<ProjectProps> = ({ name, description, url }) => {

  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  return <div ref={ref} className={inView ? ` ${style.ProjectContainer} ${style.ProjectFadeIn}` : `${style.ProjectContainer} ${style.ProjectFadeOut}`}>
    <h3 className={inView ? `${style.ProjectContent} ${style.ProjectContentVisible}` : ` ${style.ProjectContent} ${style.ProjectContentHidden}`}> {name}</h3>
    <p className={inView ? `${style.ProjectContent} ${style.ProjectContentVisible}` : ` ${style.ProjectContent} ${style.ProjectContentHidden}`}> {description}</p>
    <a href={url} target="_blank" className={inView ? `${style.ProjectContent} ${style.ProjectContentVisible}` : ` ${style.ProjectContent} ${style.ProjectContentHidden}`}>visit</a>
  </div>;
};

export default Project;
