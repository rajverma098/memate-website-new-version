import React from "react";
import style from "./intuitive.module.scss";
import DarkMemateBlackBut from "@/layout/hover-button/DarkMemateBlackBut";
const ConstructionIntuitive = () => {
  return (
    <>
      <div id="contractionSpaceBox"
        className={`${style.flexboxWrap} ${style.dubleimages} ${style.flexboxWrapstyle} ${style.bgContentWrap} ${style.sectionTopSpace} `}
      >
        <div className={`${style.spacingLeft} ${style.flexContentWrap}`}>
          <h4>Intuitive</h4>
          {/* <h3>Project <br/> Management &<br/> Job Scheduling</h3> */}
          <h2>Project <br/> Management &<br/> Job Scheduling</h2>
          <p>
          Plan entire job timelines with task assignments,<br/> project scheduling (Gantt chart), and<br/> change‑order tracking—all in one dashboard
          </p>
           <div className="spaceButtonGap">
       <DarkMemateBlackBut
      link2="/features/sales-management-tools"
      className="alignLeft"
      buttonTextlight="Sales"
      showButton2={true}
    />
     </div>
        </div>
        <div className={`${style.flexImageBox}`}>
          <img
            src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/automative-robust.svg"
            alt="intuitive-inovice"
          />
        </div>
      </div>
    </>
  );
};

export default ConstructionIntuitive;
