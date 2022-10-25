import React from "react";
import { useInView } from "react-intersection-observer";
import useTextTyping from "../hooks/useTextTyping";
import style from "../styles/TextTypingEffect.module.css";
interface Props {
  text: string;
}

const TextTypingEffect: React.FC<Props> = ({ text }) => {
  const { ref, inView } = useInView({
    threshold: 0,
  });
  // const text = "Hello, my name is Sami! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quibusdam in sapiente, dolore placeat aliquam minus temporibus quod, beatae voluptates possimus culpa? Optio exercitationem nisi explicabo magni ut mollitia minima quod, asperiores maiores ex voluptas."

  const typedText: string = useTextTyping(text, 3, inView);

  return <div className={style.TextContainer}>
    <p className={style.TypedText} ref={ref}>{typedText}</p>
    <p className={style.Text}>{text}</p>
  </div>
};

export default TextTypingEffect;
