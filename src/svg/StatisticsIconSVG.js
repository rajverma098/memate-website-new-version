import * as React from "react";

const StatisticsIconSVG = (props) => (
  <svg 
    width="20" 
    height="20" 
    viewBox="0 0 20 20" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path 
      d="M2 14L7 9L11 12.5L18 5.5M2 17.5H18M2 2.5V17.5" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

export default StatisticsIconSVG;