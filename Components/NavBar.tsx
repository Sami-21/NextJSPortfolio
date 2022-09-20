import React, { useEffect, useState } from "react";
import style from "../styles/NavBar.module.css";

interface showCompDelayProps {
  showCompDelay: number;
}

const NavBar: React.FC<showCompDelayProps> = ({ showCompDelay }) => {
  const [isActive, setIsActive] = useState([false, false, false, false, false]);
  const [isShown, setIsShown] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const toggleMenu = (): any => {
    setIsMenuOpen(!isMenuOpen);
    console.log(isMenuOpen);
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
      <ul
        className={
          isMenuOpen
            ? `${style.NavBarItemsContainer} ${style.shown}`
            : `${style.NavBarItemsContainer}`
        }
      >
        {NavBarItems.map((el: string[], i: number) => {
          return (
            <li
              className="cursor-pointer relative"
              onClick={() => {
                NavBarHandler(i);
                setTimeout(() => {
                  toggleMenu();
                }, 250);
              }}
              key={i}
            >
              {el.map((item: string, index: number) => (
                <span
                  key={index}
                  className={
                    isActive[i]
                      ? `${style.ActiveItem} ${style.NavBarItem}`
                      : `${style.NavBarItem}`
                  }
                  data-before={item.toUpperCase()}
                >
                  <span className={style.item}>{item.toUpperCase()}</span>
                </span>
              ))}
            </li>
          );
        })}
      </ul>
      <div
        onClick={toggleMenu}
        className={
          isMenuOpen
            ? `${style.burgerMenu} ${style.close}`
            : `${style.burgerMenu}`
        }
      >
        <span className={style.line}></span>
        <span className={style.line}></span>
        <span className={style.line}></span>
      </div>
    </nav>
  ) : null;
};

export default NavBar;
