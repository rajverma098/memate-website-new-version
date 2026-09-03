import React from "react";
import style from "./contractor.module.scss";
import DarkMemateBlackBut from "@/layout/hover-button/DarkMemateBlackBut";
const ConstructionContractor = () => {
  return (
    <>
      <div
        className={`${style.flexboxWrap} ${style.bgContentWrap} ${style.sectionTopSpace}`}
      >
        <div className={`${style.spacingLeft} ${style.flexContentWrap}`}>
          <h4>Innovative</h4>
          {/* <h3>Contractor</h3> */}
          <h2>
            Workforce
            <br /> Management
          </h2>
          <p>
            Schedule crews, clock staff in/out via GPS,<br/> monitor remote teams,
            and forecast labour needs<br/> with built-in time and attendance tools
          </p>
           <div className="spaceButtonGap">
       <DarkMemateBlackBut
      link2="/features/supplier-management-software"
      className="alignLeft"
      buttonTextlight="Management"
      showButton2={true}
    />
     </div>
        </div>
        <div className={style.flexImageBox}>
          <img
            src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/automotive-contractor.svg"
            alt="automotive-contractor"
          />
        </div>
      </div>
    </>
  );
};

export default ConstructionContractor;
