import "./style.css";
import PricingTableDemo from "./PricingTableDemo";
import DarkMemateBlackBut from "@/layout/hover-button/DarkMemateBlackBut";


const PricingModelCommon = () => {
  return (
    <div className="smart-investment-wrapper">
       <div className="pricingHeadWrapF">
        <p className="smart-investment-headingF">Smart investment</p>
        <span className="smart-investment-bannerF gradientAnimenate">
          pricing
        </span>
        <div className="smart-investment-descriptionF">
          <span>
            Plus, we provide a 14-day free trial because we believe our
            software will become<br/> indispensable to your business.
          </span>
        </div>
      </div>
   
      <div className="dflexbannerbtn dflexbannerbtnFT dflexbannerbtnp">
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
     <PricingTableDemo />
    </div>
  );
};

export default PricingModelCommon;
