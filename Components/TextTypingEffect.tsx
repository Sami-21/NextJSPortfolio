import React from "react";
import { useInView } from "react-intersection-observer";
import useTextTyping from "../hooks/useTextTyping";
import style from "../styles/IntroText.module.css";

const TextTypingEffect: React.FC<any> = (text) => {
  const { ref, inView } = useInView({
    threshold: 0,
  });
  const typedText: string = useTextTyping(text, 1, inView);

  return <p ref={ref}>{typedText}</p>;
};

export default TextTypingEffect;
