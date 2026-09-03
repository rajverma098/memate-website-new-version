import React from "react";
import style from './electronic.module.scss';
import DarkMemateBlackBut from "@/layout/hover-button/DarkMemateBlackBut";
const ElectronicPowerfulStreamline = () => {
  return (
<>
<div className={`${style.flexboxWrap} ${style.bgContentWrap}`}>
<div className={style.flexImageBox}>
  <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/industries-organised01.svg" alt="industries-01"/>
  <img className={style.last} src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/industries-organised02.svg" alt="industries-01"/>
</div>
<div className={`${style.flexContentWrap} ${style.spacingRight}`}>
<h4>Productive</h4>
<h3>Organised</h3>
<h2>Management</h2>
    <p>meMate allows your shop to track every repair from start to finish. Easily add notes, keep detailed records, 
      and update clients on the repair status through email or SMS. This ensures seamless communication and keeps your 
      customers informed every step of the way.</p>
       <div className="spaceButtonGap">
       <DarkMemateBlackBut
      link2="/features/client-management-software"
      className="alignLeft"
      buttonTextlight="Management"
      showButton2={true}
    />
     </div>
</div>
</div>
</>


  
  );
};

export default ElectronicPowerfulStreamline;
