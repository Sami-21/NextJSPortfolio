import React from "react";
import { useInView } from "react-intersection-observer";
import useTextTyping from "../hooks/useTextTyping";
import style from "../styles/TextTypingEffect.module.css";

interface Props {
  text: string;
}

const CODTextEffect: React.FC<Props> = ({ text }) => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  const typedText: string = useTextTyping(text, 3, inView);

  return <div className={style.TextContainer}>
    <p className={style.TypedText} ref={ref}>{typedText}</p>
    <p className={style.Text}>{text}</p>
  </div>
};

export default CODTextEffect;
