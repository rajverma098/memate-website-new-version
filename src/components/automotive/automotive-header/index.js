import React from "react";
import "./style.css";
import DarkMemateBlackBut from "@/layout/hover-button/DarkMemateBlackBut";
const AutomotiveHeader = () => {
  return (
    <>
      <div className="NextHeaderWrap">
        <h1>Business Management Software for the Automotive Industry</h1>
        <h2>software for auto detailing shops</h2>
        <p>
        Here’s the solution for car wrapping and detailing businesses. We’ve designed and tested <br/>meMate specifically for you—robust, simple to use, and proven in the field.        </p>
      </div>
      <div className="NextHeaderWrapper NextHeaderAutoBox">
        <div className="industryNewHead">
          <div className="LeftSide">
            <span className='leftSpan'>Business Management Software for the Automotive Industry</span>
            <h4>For Car Wrapping & Detailing  </h4>
            <p>
            meMate streamlines operations for car wrapping and detailing services, managing workflows, contractors, and customer communication—all in one easy-to-use platform.            </p>
           
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
              src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/automotive-industry-img.png"
              width="100%"
              alt="mechanic shop CRM"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AutomotiveHeader;
