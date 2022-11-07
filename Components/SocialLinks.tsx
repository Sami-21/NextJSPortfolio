import React from "react";
import style from "../styles/SocialLinks.module.css";
import GithubIcon from "../assets/github_icon.svg";
import FacebookIcon from "../assets/facebook_icon.svg";
import LinkedInIcon from "../assets/linkedin_icon.svg";
import InstagramIcon from "../assets/instagram_icon.svg";
import Image from "next/image";
interface SocialLink {
  imageAlt: string;
  URL: string;
  icon: string;
}

const SocialLinks: React.FC = () => {
  const socialIcons: SocialLink[] = [
    {
      imageAlt: "Github",
      URL: "https://github.com/Sami-21",
      icon: GithubIcon,
    },
    {
      imageAlt: "Facebook",
      URL: "https://www.facebook.com/SamiMaachi21/",
      icon: FacebookIcon,
    },
    {
      imageAlt: "LinkedIn",
      URL: "https://www.linkedin.com/in/sami-maachi-161925198/?fbclid=IwAR0FzanpsJZ7rDcLkVV-WmUwoNGZwsarxBFcHwNC9I7DF05AwNV9PL0S9Qg",
      icon: LinkedInIcon,
    },
    {
      imageAlt: "Instagram",
      URL: "https://www.instagram.com/samovitch99",
      icon: InstagramIcon,
    },
  ];
  return (
    <div className={style.SocialLinksContainer}>
      {socialIcons.map((socialLink: SocialLink, index: number) => (
        <a href={socialLink.URL} key={index} target="_blank" rel="noreferrer">
          <Image
            className={style.Icon}
            src={socialLink.icon}
            att-before={socialLink.icon}
            alt={socialLink.imageAlt}
          />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
