import React from "react";
import { InView, useInView } from "react-intersection-observer";
import style from "../styles/ContactSection.module.css";
import CODTextEffect from "./CODTextEffect";

const ContactSection: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <form
      ref={ref}
      className={`${style.ContactContainer} ${
        inView ? style.FadeIn : style.FadeOut
      }`}
      action=""
      id="Contact"
    >
      <CODTextEffect
        transition1="Qntmbv"
        transition2="Pndmuw"
        transition3="Contact"
      />
      <div className={style.InputContainer}>
        <input
          className={style.InputField}
          type="text"
          name="fullName"
          id="fullName"
          placeholder="FullName"
        />
        <input
          className={style.InputField}
          type="email"
          name="email"
          id="email"
          placeholder="Email"
        />
      </div>
      <div>
        <input
          className={style.InputField}
          type="text"
          name="subject"
          id="subject"
          placeholder="Subject"
        />
      </div>
      <div>
        <textarea
          className={`${style.InputField} ${style.MessageField}`}
          name="message"
          id="message"
          placeholder="Your Message here..."
        ></textarea>
      </div>
    </form>
  );
};

export default ContactSection;
