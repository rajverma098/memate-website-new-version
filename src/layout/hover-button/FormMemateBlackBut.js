

import React from 'react';
import './MemateButtonStyles.css';

const FormMemateBlackBut = ({className = "",buttonTextdark, showButton1 = false}) => {
  return (
  <>
<div className={`gridButtonStyle ${className}`}>
    <div className='tron-button'>
   <div className={`tron-button-in  ${showButton1 ? "" : "hide"}`}>
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
  </div>
</div>
  </div>
  </>
  );
};

export default FormMemateBlackBut;

