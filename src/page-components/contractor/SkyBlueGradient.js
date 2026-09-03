import * as React from "react";
const SkyBlueGradient = (props) => (
  <svg
    width={321}
    height={824}
    viewBox="0 0 321 824"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#filter0_f_1_18598)">
      <ellipse
        cx={107.799}
        cy={411.973}
        rx={43.244}
        ry={242.273}
        fill="#1EB2DC"
        fillOpacity={0.33}
      />
    </g>
    <defs>
      <filter
        id="filter0_f_1_18598"
        x={-105.145}
        y={-0.0000457764}
        width={425.888}
        height={823.946}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation={84.85}
          result="effect1_foregroundBlur_1_18598"
        />
      </filter>
    </defs>
  </svg>
);
export default SkyBlueGradient;
