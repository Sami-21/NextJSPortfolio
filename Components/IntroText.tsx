import React from "react";
import useTextTyping from "../hooks/useTextTyping";
import style from "../styles/IntroText.module.css";
import { useInView } from "react-intersection-observer";

const IntroText: React.FC = () => {
  let Transition1: string = "Ps: A wx Mvqk$ BctrKzsgf Huljhezsw";
  let Transition2: string = "Ma! Q fd Xifv_ UnrsZlomz Pvftkqabk";
  let Transition3: string = `Hi, I am Sami, FullStack Developer`;

  const { ref, inView } = useInView({
    threshold: 0,
  });
  const TextState1: string = useTextTyping(Transition1, 60, inView);
  const TextState2: string = useTextTyping(Transition2, 60, inView);
  const TextState3: string = useTextTyping(Transition3, 60, inView);

  return (
    <div ref={ref} className={style.TextContainer}>
      <h1 id="introText" className={`${style.IntroText} md:text-base `}>
        {/* First State */}
        <span className={`${style.FirstTextTransition}`}>
          {TextState1.split("")
            .slice(0, 3)
            .map((char: string, index: number) => {
              return (
                <span key={index} className={style.Disappeared1}>
                  {char}
                </span>
              );
            })}
          <br />
          {TextState1.split("")
            .slice(3, 14)
            .map((char: string, index: number) => {
              return (
                <span key={index} className={style.Disappeared1}>
                  {char}
                </span>
              );
            })}
          <br />
          {TextState1.split("")
            .slice(14)
            .map((char: string, index: number) => {
              return (
                <span key={index} className={style.Disappeared1}>
                  {char}
                </span>
              );
            })}
        </span>

        {/* Second State */}
        <span className={`${style.SecondTextTransition}  `}>
          {TextState2.split("")
            .slice(0, 3)
            .map((char: string, index: number) => (
              <span key={index} className={` ${style.Disappeared2}`}>
                {char}
              </span>
            ))}
          <br />
          {TextState2.split("")
            .slice(3, 14)
            .map((char: string, index: number) => (
              <span key={index} className={` ${style.Disappeared2}`}>
                {char}
              </span>
            ))}
          <br />
          {TextState2.split("")
            .slice(14)
            .map((char: string, index: number) => (
              <span key={index} className={` ${style.Disappeared2}`}>
                {char}
              </span>
            ))}
        </span>

        {/* Third State */}
        <span className={style.ThirdTextTransition}>
          {TextState3.split("")
            .slice(0, 3)
            .map((char: string, index: number) => (
              <span className={`${style.Showed}  `} key={index}>
                {char}
              </span>
            ))}
          <br />
          {TextState3.split("")
            .slice(3, 14)
            .map((char: string, index: number) => (
              <span className={`${style.Showed}  `} key={index}>
                {char}
              </span>
            ))}
          <br />
          {TextState3.split("")
            .slice(14)
            .map((char: string, index: number) => (
              <span className={`${style.Showed}  `} key={index}>
                {char}
              </span>
            ))}
        </span>
        <span className={style.IntroTextBlur}>
          {TextState3.split("")
            .slice(0, 3)
            .map((char: string, index: number) => (
              <span className={`${style.Showed}`} key={index}>
                {char}
              </span>
            ))}
          <br />
          {TextState3.split("")
            .slice(3, 14)
            .map((char: string, index: number) => (
              <span className={`${style.Showed}`} key={index}>
                {char}
              </span>
            ))}
          <br />
          {TextState3.split("")
            .slice(14)
            .map((char: string, index: number) => (
              <span className={`${style.Showed}`} key={index}>
                {char}
              </span>
            ))}
        </span>
      </h1>
    </div>
  );
};

export default IntroText;
