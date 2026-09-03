import React from "react";
import style from './contractor.module.scss';
import DarkMemateBlackBut from "@/layout/hover-button/DarkMemateBlackBut";
const AutomotiveContractor = () => {
  return (
<>
<div className={`${style.flexboxWrap} ${style.bgContentWrap} ${style.sectionTopSpace}`}>
<div className={`${style.spacingLeft} ${style.flexContentWrap}`}>
<h4>Robust</h4>
<h3>Contractor</h3>
<h2>Management</h2>
    <p>Manage contractors effortlessly by presetting time or amounts, assigning tasks, and approving work upon completion. Receive weekly 
      invoices from contractors through a simple, user-friendly system that works for everyone.</p>
       <div className="spaceButtonGap">
       <DarkMemateBlackBut
      link2="/features/contractor-management-software"
      className="alignLeft"
      buttonTextlight="Contractor Management"
      showButton2={true}
    />
     </div>
      
</div>
<div className={style.flexImageBox}>
  <img  src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/automotive-contractor.svg" alt="automotive-contractor"/>
</div>
</div>
</> 
  );
};

export default AutomotiveContractor;

