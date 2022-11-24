import type { NextPage } from "next";
import React, { useState } from "react";
import style from "../styles/Terminal.module.css";
import Noisebackground from "../Components/Noisebackground";
import { ReactTerminal } from "react-terminal";

const Terminal: NextPage = () => {
  const homeDirectory: string = "Sami/Portfolio";
  const [path, setPath] = useState(homeDirectory);
  const changePath = (destinationPath: string): void => {
    if (destinationPath != "")
      setPath((currentPath) => `${currentPath}/${destinationPath}`);
    else setPath(homeDirectory);
  };
  const commands: object = {
    whoami: "jackharper",
    hadouken: "shoryuken",
    cd: (directory: string) => changePath(directory),
  };

  const errorMessage = (command: string): string => {
    return `${command} not found`;
  };

  return (
    <div className=" w-screen p-20 ">
      <Noisebackground />
      <ReactTerminal
        className={style.terminal_container}
        prompt={`${path}:`}
        showControlBar={false}
        commands={commands}
        errorMessage={errorMessage}
        themes={{
          custom_theme: {
            themeBGColor: "#0000",
            themeToolbarColor: "#00000000",
            themeColor: "#00ff41",
            themePromptColor: "#00ff41",
          },
        }}
        theme="custom_theme"
      />
    </div>
  );
};

export default Terminal;
