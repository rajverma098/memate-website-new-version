import * as React from "react";
const AboutGradientBg = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={796}
    height={1044}
    viewBox="0 0 796 1044"
    {...props}
  >
    <defs>
      <linearGradient
        id="gradient"
        x1={0}
        y1={0}
        x2={796}
        y2={1044}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0%" stopColor="#0CB3FF" />
        <stop offset="100%" stopColor="#FAB25C" />
      </linearGradient>
    </defs>
    <rect
      x={0}
      y={0}
      width={796}
      height={1044}
      rx={105}
      ry={105}
      fill="url(#gradient)"
    />
  </svg>
);
export default AboutGradientBg;
