import * as React from "react";

const RequestIconSVG = (props) => (
  <svg 
    width="20" 
    height="20" 
    viewBox="0 0 20 20" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path 
      d="M16.6667 5.83333V14.1667C16.6667 15.9125 15.246 17.3333 13.5 17.3333H6.5C4.75417 17.3333 3.33334 15.9125 3.33334 14.1667V5.83333C3.33334 4.0875 4.75417 2.66667 6.5 2.66667H13.5C15.246 2.66667 16.6667 4.0875 16.6667 5.83333Z" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M6.66666 5.83333H13.3333M6.66666 9.16667H13.3333M6.66666 12.5H10" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

export default RequestIconSVG;