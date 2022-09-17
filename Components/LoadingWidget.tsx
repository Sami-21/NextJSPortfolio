import React, { useEffect, useState } from "react";
import style from "../styles/LoadingWidget.module.css";

const LoadingWidget: React.FC = () => {
  interface singleBit {
    style: string;
    value: number;
  }
  let offBit: singleBit = { style: "bit", value: 0 };
  let onBit: singleBit = { style: "bit_on", value: 1 };
  const [bits, setBits] = useState([
    onBit,
    onBit,
    onBit,
    onBit,
    onBit,
    onBit,
    onBit,
    onBit,
  ]);

  useEffect(() => {
    return () => {
      LoadingAnimation();
      console.log(bits);
    };
  }, [bits]);

  const LoadingAnimation = (): void => {
    // setBits((previousBits): number[] => {
    //   let newBits: number[] = previousBits;
    //   if (newBits.includes(0)) {
    //     for (let i: number = 0; i < newBits.length; i++) {
    //       if (newBits[i].value === 0) {
    //         newBits[i] = 1;
    //         setTimeout(() => {}, 1000);
    //       }
    //     }
    //   }
    //   return newBits;
    // });
  };
  return (
    <div className={style.component_container}>
      <div className={style.outer_rectangle}>
        {bits.map((bit, index) => (
          <div className={style.inner_squares} key={index}>
            <span className={`${bit.style}`}>{bit.value}</span>
          </div>
        ))}
      </div>
      <div className={style.loading_label}>
        <span>
          Wait a Byte
          <span className={style.loading_dots}>.</span>
          <span className={style.loading_dots}>.</span>
          <span className={style.loading_dots}>.</span>
        </span>
      </div>
    </div>
  );
};

export default LoadingWidget;
