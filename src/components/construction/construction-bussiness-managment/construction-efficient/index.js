import React from "react";
import style from "./efficient.module.scss";
import DarkMemateBlackBut from "@/layout/hover-button/DarkMemateBlackBut";
const ConstructionEfficient = () => {
  return (
    <>
      <div className={`${style.flexboxWrap} ${style.bgContentWrap} contractionSpaceBox`}>
        <div className={style.flexImageBox}>
          {/* <img
            src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/accurate-quoting.svg"
            alt="accurate-quoting"
          />
          <img
            className={style.last}
            src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/accurate-quoting01.svg"
            alt="accurate-quoting01"
          /> */}
          <img src={'https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/intuitive-inovice.svg'}/>
        </div>
        <div className={`${style.flexContentWrap} ${style.spacingRight}`}>
          <h4>Simple</h4>
          {/* <h3>Quoting &</h3> */}
          <h2>Quoting &<br/> Estimating</h2>
          <p>
            Create accurate estimates fast—using pre-built
            <br /> templates and real-time cost databases—so you
            <br /> can send quotes in minutes instead of hours 
          </p>
           <div className="spaceButtonGap">
       <DarkMemateBlackBut
      link2="/features/business-quote-calculator"
      className="alignLeft"
      buttonTextlight="Calculators"
      showButton2={true}
    />
     </div>
        </div>
      </div>
    </>
  );
};

export default ConstructionEfficient;
