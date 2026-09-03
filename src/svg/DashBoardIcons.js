const DashBoardIcons = ({ width = 20, height = 20, color = "#60A5FA" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_7906_6119"
        style={{ maskType: "luminance" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="20"
        height="20"
      >
        <path
          d="M19.25 19.25V0.75H0.75V19.25H19.25Z"
          fill="white"
          stroke="white"
          strokeWidth="1.5"
        />
      </mask>

      <g mask="url(#mask0_7906_6119)">
        <path
          d="M2.79077 8.34277L7.36494 3.76861L10.7934 7.19711L17.2091 0.781429"
          stroke={color}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M17.2091 4.67432V0.781359H13.3161"
          stroke={color}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M4.80034 19.2188H0.78125V14.6094H4.80034V19.2188ZM12.0095 19.2188H7.99041V11.6378H12.0095V19.2188ZM19.2187 19.2188H15.1996V8.66616H19.2187V19.2188Z"
          stroke={color}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default DashBoardIcons;