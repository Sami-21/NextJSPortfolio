import React from "react";
import style from "../styles/TransitionScreen.module.css";

const TransitionScreen: React.FC = () => {
  return (
    <div className={style.transition_container}>
      {/* <div>
        {Array(50)
          .fill(0)
          .map((num:number, index:number) => (
            <div className={style.digit} key={index}>
              {Math.floor(Math.random() * 2)}
            </div>
          ))}
      </div> */}
      <div>
        <div className={style.digit}>1</div>
      </div>
      <div>
        <div className={style.digit}>1</div>
      </div>
      <div>
        <div className={style.digit}>1</div>
      </div>
      <div>
        <div className={style.digit}>1</div>
      </div>
      <div>
        <div className={style.digit}>1</div>
      </div>
      <div>
        <div className={style.digit}>1</div>
      </div>
      <div>
        <div className={style.digit}>1</div>
      </div>
      <div>
        <div className={style.digit}>1</div>
      </div>
      <div>
        <div className={style.digit}>1</div>
      </div>
    </div>
  );
};

export default TransitionScreen;
