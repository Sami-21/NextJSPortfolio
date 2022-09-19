import React, { useEffect, useState } from "react";
import style from "../styles/NavBar.module.css";

interface showCompDelayProps {
  showCompDelay: number;
}

const NavBar: React.FC<showCompDelayProps> = ({ showCompDelay }) => {
  const [isActive, setIsActive] = useState([false, false, false, false, false]);
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    const timer: NodeJS.Timer = setTimeout(() => {
      setIsShown(true);
    }, showCompDelay);
    return () => {
      clearTimeout(timer);
    };
  }, [showCompDelay, isShown]);

  let navigationState: boolean[] = [false, false, false, false, false];
  const logoItems: string[] = ["9", "M", "S"];
  const NavBarItems: string[][] = [
    ["99999", "codmw", "About"],
    ["9999", "rekt", "Work"],
    ["999999", "bf2042", "Skills"],
    ["9999999", "madness", "Contact"],
    ["9999", "doom", "Blog"],
  ];

  const NavBarHandler = (index: number) => {
    let previousActiveIndex = navigationState.findIndex((el) => {
      return el === true;
    });
    navigationState[previousActiveIndex] = false;
    navigationState[index] = true;
    setIsActive(navigationState);
  };

  return isShown ? (
    <nav className={style.NavBar}>
      <div
        onClick={() => setIsActive([false, false, false, false, false])}
        className={style.logo}
      >
        {logoItems.map((char: string, index: number) => (
          <span className={style.text} data-before={char} key={index}>
            {char}
          </span>
        ))}
      </div>
      <ul className={style.NavBarItemsContainer}>
        {NavBarItems.map((el: string[], index: number) => {
          return (
            <li
              className="cursor-pointer"
              onClick={() => NavBarHandler(index)}
              key={index}
            >
              <span
                className={
                  isActive[index]
                    ? `${style.ActiveItem} ${style.NavBarItem}`
                    : `${style.NavBarItem}`
                }
                data-before={el[3].toUpperCase()}
              >
                {el[3].toUpperCase()}
              </span>
            </li>
          );
        })}
      </ul>
      <div className={style.burgerMenu}>
        <span className={style.line}></span>
        <span className={style.line}></span>
        <span className={style.line}></span>
      </div>
    </nav>
  ) : null;
};

export default NavBar;
