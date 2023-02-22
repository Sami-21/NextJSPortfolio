import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import style from "../styles/ContactSection.module.css";
import CODTextEffect from "./CODTextEffect";
import axios from "axios";

const ContactSection: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const sendEmail = async (e: any) => {
    e.preventDefault();

    try {
      const mail = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
          service_id: process.env.NEXT_PUBLIC_SERVICE_ID,
          template_id: process.env.NEXT_PUBLIC_TEMPLATE_ID,
          user_id: process.env.NEXT_PUBLIC_USER_ID,
          template_params: {
            fullName: fullName,
            email: email,
            subject: subject,
            message: message,
          },
        }
      );
      console.log(mail);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      ref={ref}
      className={style.ContactContainer}
      id="Contact"
      onSubmit={(e) => sendEmail(e)}
    >
      <CODTextEffect
        transition1="Qntmbv"
        transition2="Pndmuw"
        transition3="Contact"
      />
      <div className={style.InputContainer}>
        <input
          className={style.InputField}
          value={fullName}
          type="text"
          name="fullName"
          id="fullName"
          placeholder="FullName"
          onChange={(e) => setFullName(e.target.value)}
        />
        <input
          className={style.InputField}
          value={email}
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <input
          className={style.InputField}
          value={subject}
          type="text"
          name="subject"
          id="subject"
          placeholder="Subject"
          onChange={(e) => setSubject(e.target.value)}
        />
      </div>
      <div>
        <textarea
          className={`${style.InputField} ${style.MessageField}`}
          value={message}
          name="message"
          id="message"
          placeholder="Your Message here..."
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <input className={style.submit_btn} type="submit" value="send" />
      </div>
    </form>
  );
};

export default ContactSection;
