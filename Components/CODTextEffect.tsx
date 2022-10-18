import React from "react";
import { useInView } from "react-intersection-observer";
import useTextTyping from "../hooks/useTextTyping";
import style from "../styles/IntroText.module.css";

interface Props {
  transition1: string;
  transition2: string;
  transition3: string;
}

const CODTextEffect: React.FC<Props> = ({
  transition1,
  transition2,
  transition3,
}) => {
  const { ref, inView } = useInView({
    threshold: 0.8,
  });

  const TextState1: string = useTextTyping(transition1, 60, inView);
  const TextState2: string = useTextTyping(transition2, 60, inView);
  const TextState3: string = useTextTyping(transition3, 60, inView);
  return (
    <h1 ref={ref} className={style.IntroText}>
      <span className={`${style.FirstTextTransition}`}>
        {TextState1.split("").map((char, index) => {
          return (
            <span key={index} className={style.Disappeared1}>
              {char}
            </span>
          );
        })}
      </span>
      <span className={`${style.SecondTextTransition}  `}>
        {TextState2.split("").map((char, index) => (
          <span key={index} className={` ${style.Disappeared2}`}>
            {char}
          </span>
        ))}
      </span>
      <span className={style.ThirdTextTransition}>
        {TextState3.split("").map((char, index) => (
          <span className={`${style.Showed}  `} key={index}>
            {char}
          </span>
        ))}
      </span>
      <span className={style.IntroTextBlur}>
        {TextState3.split("").map((char, index) => (
          <span className={`${style.Showed}`} key={index}>
            {char}
          </span>
        ))}
      </span>
    </h1>
  );
};

export default CODTextEffect;
