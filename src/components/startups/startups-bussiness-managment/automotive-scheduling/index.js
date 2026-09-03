import React from "react";
import style from './scheduling.module.scss';
import DarkMemateBlackBut from "@/layout/hover-button/DarkMemateBlackBut";
const AutomotiveScheduling = () => {
  return (
<>
<div className={`${style.flexboxWrap} ${style.bgContentWrap} ${style.sectionTopSpace}`}>
<div className={style.flexImageBox}>
<img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/seamless-inovice.svg" alt="seamless-inovice" />

</div>
<div className={`${style.spacingRight} ${style.flexContentWrap}`}>
<h4>Simplified</h4>
<h3>Seamless Quote-to-Project</h3>
<h2>Conversion</h2>
    <p>Let customers accept quotes with a click, instantly turning them into projects. From there, you can schedule tasks, notify customers, 
      collaborate with employees or contractors, add expenses, and much more—all within meMate.</p>
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

export default AutomotiveScheduling;

