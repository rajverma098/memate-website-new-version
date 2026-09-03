import React from "react";
import style from './efficient.module.scss';
import DarkMemateBlackBut from "@/layout/hover-button/DarkMemateBlackBut";
const AutomotiveEfficient = () => {
  return (
<>
<div className={`${style.flexboxWrap} ${style.bgContentWrap}`}>
<div className={style.flexImageBox}>
  <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/accurate-quoting.svg" alt="accurate-quoting"/>
  <img className={style.last} src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/accurate-quoting01.svg" alt="accurate-quoting01"/>
</div>
<div className={`${style.flexContentWrap} ${style.spacingRight}`}>
<h4>Efficient</h4>
<h3>Fast and</h3>
<h2>Accurate Quoting</h2>
    <p>Quote your customers in seconds using preset products and services, ensuring accuracy and eliminating the risk of underquoting.</p>
     <div className="spaceButtonGap">
       <DarkMemateBlackBut
      link2="/features/sales-management-tools"
      className="alignLeft"
      buttonTextlight="Sales Pipeline"
      showButton2={true}
    />
     </div>
</div>
</div>
</>


  
  );
};

export default AutomotiveEfficient;
