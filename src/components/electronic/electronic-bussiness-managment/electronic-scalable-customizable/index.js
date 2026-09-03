import React from "react";
import style from './scalable.module.scss';
import DarkMemateBlackBut from "@/layout/hover-button/DarkMemateBlackBut";
const ScalableCustomizable = () => {
  return (
<>
<div className={`${style.flexboxWrap} ${style.bgContentWrap} ${style.sectionTopSpace}`}>
<div className={`${style.spacingLeft} ${style.flexContentWrap}`}>
<h4>Simplify</h4>
<h3>Multi-Location</h3>
<h2>Management</h2>
    <p>With meMate’s multi-location feature, you can manage multiple shops seamlessly. View and control all 
      your locations from one system, ensuring efficient oversight and coordination across your entire business.</p>
       <div className="spaceButtonGap">
       <DarkMemateBlackBut
      link2="/features/multi-location-management"
      className="alignLeft"
      buttonTextlight="Multi Locations"
      showButton2={true}
    />
     </div>

      
</div>
<div className={style.flexImageBox}>
  <img  className={style.spaceImgTop} src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/industries-multi-location.svg" alt="multi-location"/>
</div>
</div>
</> 
  );
};

export default ScalableCustomizable;

