import React from "react";
import "./style.css";
import DesignCheckGreen from "../../svg/DesignCheckGreen";
import DarkMemateBlackBut from "@/layout/hover-button/DarkMemateBlackBut";

const NextStep = (props) => {

  return (
    <div className="nextStepWrapper">
      <h3>Take the</h3>
      <div className="next-title">
        <div className="nextStepHeading">next step</div>
      </div>
      <div className="next-step-page-description">
        <p className="next-step-data">
        Increase your business value. <br></br>Start systemising today.
        </p>
        <span className="next-step-data-description">
         Strong systems, documented history and operational traceability increase buyer confidence and long-term valuation.
        </span>
      </div>
         <div className="nextSupport">
             <div className="nextSupport__container">
             <div className="nextSupportflex">
                 <span><DesignCheckGreen /></span>
                 <p>No long-term contracts</p>
              </div>
             <div className="nextSupportflex">
                 <span><DesignCheckGreen /></span>
                 <p>Easy onboarding</p>
              </div>
             <div className="nextSupportflex">
                 <span><DesignCheckGreen /></span>
                 <p>Local support</p>
              </div>  
      </div>
    </div>
       <DarkMemateBlackBut
      link1="https://app.memate.com.au/requestdemo"
      link2="https://app.memate.com.au/onboarding"
      target="_blank"
      buttonTextdark="Book a Demo"
      buttonTextlight="Start Free Trial"
      showButton1={true}
      showButton2={true}
    />
    </div>
  );
};

export default NextStep;
