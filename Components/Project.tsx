import React from "react";
import { useInView } from "react-intersection-observer";
import style from "../styles/Project.module.css";

interface ProjectProps {
  name: string;
  description: string;
  links: link[];
}
interface link {
  text: string;
  url: string;
}

const Project: React.FC<ProjectProps> = ({ name, description, links }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  return (
    <div
      ref={ref}
      className={` ${style.ProjectContainer} ${
        inView ? style.ProjectFadeIn : style.ProjectFadeOut
      }`}
    >
      <h2
        data-text={name}
        className={`${style.ProjectTitle} ${
          inView ? style.ProjectContentVisible : style.ProjectContentHidden
        }`}
      >
        {name}
      </h2>
      <p
        className={`${style.ProjectDescription} ${
          inView ? style.ProjectContentVisible : style.ProjectContentHidden
        }`}
      >
        {description}
      </p>
      {links.map((link: link, index: number) => (
        <a
          key={index}
          rel="noreferrer"
          href={link.url}
          target="_blank"
          data-text={link.text}
          className={`${style.ProjectLinks} ${
            inView ? style.ProjectContentVisible : style.ProjectContentHidden
          }`}
        >
          {"> " + link.text}
        </a>
      ))}
    </div>
  );
};

export default Project;
