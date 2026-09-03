import React from "react";
import "./style.css";
import DarkMemateBlackBut from "@/layout/hover-button/DarkMemateBlackBut";
const ConstructionHeader = () => {
  return (
    <>
      <div className="NextHeaderWrap">
        <h1>Business Software for the Construction Industry</h1>
        <h2>software for construction companies</h2>
        <p>
        All-in-one business software for Australian construction companies. Manage jobs, quotes,<br/> contractors, scheduling, invoicing, and site teams — all in one place        
        </p>
      </div>
      <div className="NextHeaderWrapper NextHeaderAutoBox">
        <div className="industryNewHead">
          <div className="LeftSide">
            <span className='leftSpan'>Management Software for</span>
            <h4>Builders, Trades & Construction Teams</h4>
            <p>
            Run your construction business the smart way — with everything in one dashboard. From job quotes to on-site contractor coordination, meMate <br/>handles it all.           </p>
         <div className='topSpaceGap'>
         <DarkMemateBlackBut
      link1="https://app.memate.com.au/requestdemo"
      link2="https://app.memate.com.au/onboarding"
      className="alignLeft"
      target="_blank"
      buttonTextdark="Book a Demo"
      buttonTextlight="Start Free Trial"
      showButton1={true}
      showButton2={true}
    />
       </div>
          </div>
          <div className="RightSide">
            <img
              src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/construction-industry-img.png"
              width="100%"
              alt="construction-specific software solutions"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ConstructionHeader;
