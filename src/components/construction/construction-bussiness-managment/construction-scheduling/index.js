import React from "react";
import style from "./scheduling.module.scss";
import DarkMemateBlackBut from "@/layout/hover-button/DarkMemateBlackBut";
const ConstructionScheduling = () => {
  return (
    <>
      <div
        className={`${style.flexboxWrap} ${style.bgContentWrap} ${style.sectionTopSpace}`}
      >
        <div className={style.flexImageBox}>
          <img
            src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/automative-robust.svg"
            alt="automative-robust"
          />
        </div>
        <div className={`${style.spacingRight} ${style.flexContentWrap}`}>
          <h4>Simplified</h4>
          {/* <h3>Expense & Cost<br/> Tracking</h3> */}
          <h2>
            Expense & Cost
            <br /> Tracking
          </h2>
          <p>
            Capture costs on-site—material purchases, labour hours, contractor
            invoices—and compare actuals vs. budgets in real time
          </p>
           <div className="spaceButtonGap">
       <DarkMemateBlackBut
      link2="/features/invoicing-software"
      className="alignLeft"
      buttonTextlight="Invoicing"
      showButton2={true}
    />
     </div>
        </div>
      </div>
    </>
  );
};

export default ConstructionScheduling;
