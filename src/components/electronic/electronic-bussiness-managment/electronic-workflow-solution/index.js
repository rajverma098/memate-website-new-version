import React from "react";
import style from './workflow.module.scss';
import DarkMemateBlackBut from "@/layout/hover-button/DarkMemateBlackBut";
const ElectronicWorkFlowSolution = () => {
  return (
<>

<div className={`${style.flexboxWrap} ${style.dubleimages} ${style.flexboxWrapstyle} ${style.bgContentWrap} ${style.sectionTopSpace}`}>
<div className={`${style.spacingLeft} ${style.flexContentWrap}`}>
<h4>Unique</h4>
<h3>Scalable</h3>
<h2>Workflow Management</h2>
    <p>meMate offers a scalable workflow system where managers can assign repairs to multiple specialists and track their performance. This feature helps streamline the repair process, ensuring 
      tasks are efficiently delegated and progress is monitored in real-time, optimising team productivity.</p>
      <div className="spaceButtonGap">
       <DarkMemateBlackBut
      link2="/features/calendar-timeline-management-software"
      className="alignLeft"
      buttonTextlight="Calendar"
      showButton2={true}
    />
     </div>

      
</div>
<div className={`${style.flexImageBox}`}>
  <img className={style.marginSpaceLeft} src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/industries-scalable01.svg" alt="scalable01"/>
  <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/industries-scalable02.svg" alt="scalable02"/>

</div>
</div>
</> 
  );
};

export default ElectronicWorkFlowSolution;

