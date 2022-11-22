import type { NextPage } from "next";
import React, { useState } from "react";
import style from "../styles/Terminal.module.css";
import Noisebackground from "../Components/Noisebackground";

const terminal: NextPage = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [input, setInput] = useState<String>("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [output, setOutput] = useState<String>("");
  const inputHandler = (e: any): void => {
    if (e.key === "Enter") {
      alert(input);
    }
  };
  return (
    <div className="min-h-screen w-screen p-20">
      <Noisebackground />
      <div className={style.input_container}>
        <label className={style.path} htmlFor="terminal-instructions">
          Sami-Maachi@Portfolio:
        </label>
        <input
          type="text"
          name="terminal-instructions"
          value={`${input}`}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => inputHandler(e)}
        />
      </div>
      <div className={style.output_container}>
        <input readOnly type="text" />
      </div>
    </div>
  );
};

export default terminal;
