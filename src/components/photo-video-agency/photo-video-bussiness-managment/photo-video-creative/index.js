import React from "react";
import style from './creative.module.scss';
import DarkMemateBlackBut from "@/layout/hover-button/DarkMemateBlackBut";
const PhotoCreative = () => {
  return (
<>

<div className={`${style.flexboxWrap} ${style.dubleimages} ${style.flexboxWrapstyle} ${style.bgContentWrap} ${style.sectionTopSpace}`}>
<div className={`${style.spacingLeft} ${style.flexContentWrap}`}>
<h4>Intelligent</h4>
<h3>Creative</h3>
<h2>Calculators </h2>
    <p>Pre-set templates for all your services ensure you know exactly how much time to allocate for each job, allowing you to quote customers in seconds, not minutes. Plus, enjoy real-time profitability tracking to keep your projects on budget effortlessly.</p>
      <div className="spaceButtonGap">
       <DarkMemateBlackBut
      link2="/features/business-quote-calculator"
      className="alignLeft"
      buttonTextlight="Calculator"
      showButton2={true}
    />
     </div>

      
</div>
<div className={`${style.flexImageBox}`}>
  <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/industries-creative.svg" alt="Creative"/>

</div>
</div>
</> 
  );
};

export default PhotoCreative;

