

import React from 'react';
import './MemateButtonStyles.css';

const DarkMemateBlackBut = ({ link1, link2,className = "",buttonTextdark,buttonTextlight ,target, showButton1 = false,
  showButton2 = false,alignItem }) => {
  return (
  <>
<div className={`gridButtonStyle ${className}`}>
<a href={link1} target={target} className={`tron-button ${showButton1 ? "" : "hide"}`}>
   <button className="tron-button-in">

    <svg
      className="tron-border"
      viewBox="0 0 218 52"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >

      <defs>

        <linearGradient
          id="tron-gradient-dark"
          className="gradient-animation-dark"

          x1="0"
          y1="26"
          x2="218"
          y2="26"

          gradientUnits="userSpaceOnUse"
        >
          <stop
            offset="33.15%"
            stopColor="#1ab2ff"
          />

          <stop
            offset="62%"
            stopColor="#ffb258"
          />

        </linearGradient>

      </defs>


      <rect
        x="2"
        y="2"
        width="214"
        height="48"
        rx="24"
        ry="24"
      />

    </svg>


    <span>
     {buttonTextdark}
    </span>

  </button>
</a>

  <a href={link2} target={target} className={`tron-button-light ${!showButton2 ? "hide" : ""}`}>
  <button className="tron-button-light-in">

    <svg
      className="tron-border-light"
      viewBox="0 0 218 52"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >

      <defs>

        <linearGradient
          id="tron-gradient-light"
          className="gradient-animation-light"

          x1="0"
          y1="26"
          x2="218"
          y2="26"

          gradientUnits="userSpaceOnUse"
        >

         <stop
            offset="33.15%"
            stopColor="#1ab2ff"
          />

          <stop
            offset="62%"
            stopColor="#ffb258"
          />

        </linearGradient>

      </defs>


      <rect
        x="2"
        y="2"
        width="214"
        height="48"
        rx="24"
        ry="24"
      />

    </svg>


    <span>
      {buttonTextlight}
    </span>

  </button>
  </a>

  </div>
  </>
  );
};

export default DarkMemateBlackBut;

