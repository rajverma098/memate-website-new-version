import React from "react";
import style from "./workshop.module.scss";
import DarkMemateBlackBut from "@/layout/hover-button/DarkMemateBlackBut";
const ConstructionWorkshop = () => {
  return (
    <>
      <div
        className={`${style.flexboxWrap} ${style.bgContentWrap} ${style.sectionTopSpace}`}
      >
        <div className={`${style.flexImageBox} ${style.spacingLeft}`}>
          <img
            src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/automative-workshop-control.svg"
            alt="automative workshop"
          />
        </div>
        <div className={`${style.spacingRight} ${style.flexContentWrap}`}>
          <h4>Essential</h4>
          {/* <h3>Complete </h3> */}
          <h2>
          Internal Chat & Team Communication
          </h2>
          <p>
          Keep your team on the same page—send updates,<br/> job briefs, photos, and checklists via internal chat<br/> built into meMate. No need for scattered<br/> messaging tools 
          </p>
           <div className="spaceButtonGap">
       <DarkMemateBlackBut
      link2="/features/business-reporting-tools"
      className="alignLeft"
      buttonTextlight="Reports"
      showButton2={true}
    />
     </div>
        </div>
      </div>
    </>
  );
};

export default ConstructionWorkshop;
