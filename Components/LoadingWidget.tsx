import React, { useEffect, useState } from "react";
import style from "../styles/LoadingWidget.module.css";

interface singleBit {
  style: string;
  value: number;
}

const LoadingWidget: React.FC = () => {
  const offBit: singleBit = { style: "bit_off", value: 0 };
  const onBit: singleBit = { style: "bit_on", value: 1 };
  let offBits: singleBit[] = new Array(8).fill(offBit);
  let onBits: singleBit[] = new Array(0);

  const [byte, setByte] = useState([...onBits, ...offBits]);
  const [isShown, setIsShown] = useState(true);

  useEffect(() => {
    return () => {
      let timer: NodeJS.Timer;
      for (let i: number = 1; i < 9; i++) {
        timer = setTimeout(() => {
          onBits.push(onBit);
          offBits.pop();
          setByte([...onBits, ...offBits]);
        }, i * 500);
        if (i === 8) {
          setTimeout(() => {
            setIsShown(false);
          }, i * 500 + 1000);
        }
      }
    };
  }, []);
  return isShown ? (
    <div className={style.component_container}>
      {/* eslint-disable-next-line react/no-unknown-property */}
      <style jsx>
        {`
          @media (min-width: 1200px) {
            .bit_off {
              font-size: 120px;
              color: gray;
            }
            .bit_on {
              position: relative;
              font-size: 120px;
              color: #1bff80 !important;
            }
            .bit_on::after {
              content: "1";
              position: absolute;
              top: 0;
              left: 0;
              color: #1bff80;
              filter: blur(10px);
              font-size: 120px;
            }
          }
          @media (max-width: 1199px) {
            .bit_off {
              font-size: 72px;
              color: gray;
            }
            .bit_on {
              position: relative;
              font-size: 72px;
              color: #1bff80 !important;
            }
            .bit_on::after {
              content: "1";
              position: absolute;
              top: 0;
              left: 0;
              color: #1bff80;
              filter: blur(10px);
              font-size: 72px;
            }
          }
          @media (max-width: 767px) {
            .bit_off {
              font-size: 42px;
              color: gray;
            }
            .bit_on {
              position: relative;
              font-size: 42px;
              color: #1bff80 !important;
            }
            .bit_on::after {
              content: "1";
              position: absolute;
              top: 0;
              left: 0;
              color: #1bff80;
              filter: blur(10px);
              font-size: 42px;
            }
          }
        `}
      </style>
      <div className={style.outer_rectangle}>
        {byte.map((bit: singleBit, index: number) => (
          <div className={style.inner_squares} key={index}>
            <span className={bit.style}>{bit.value}</span>
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
  ) : null;
};

export default LoadingWidget;
