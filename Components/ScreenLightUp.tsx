import React, { useEffect, useState } from "react";
import intro from "../styles/Intro.module.css";

interface destroyDelayProps {
  destroyDelay: number;
}
const ScreenLightUp: React.FC<destroyDelayProps> = ({ destroyDelay }) => {
  const [isShown, setIsShown] = useState(true);
  useEffect(() => {
    const timer: NodeJS.Timer = setTimeout(() => {
      setIsShown(false);
    }, destroyDelay);
    return () => {
      clearTimeout(timer);
    };
  }, [destroyDelay, isShown]);

  return isShown ? (
    <div className={intro.Pre_Start_Screen}>
      <span className={intro.spark}></span>
      <span className={intro.flash}></span>
    </div>
  ) : null;
};

export default ScreenLightUp;
