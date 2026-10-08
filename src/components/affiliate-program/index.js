import "./programstyle.css";
import "./PartNerL.css";
import TickIconSVG from "../../svg/TickIcon";
import EmailNow from "../contact-us/emailnow";
import DarkMemateBlackBut from "@/layout/hover-button/DarkMemateBlackBut";
import EarnReward from "./EarnReward";
import BetterStart from "./BetterStart";
import TwoWaysEarn from "./TwoWaysEarn";
import HowToGetStarted from "./HowToGetStarted";
import AutomotiveQuesitonAndAns from "./AutomotiveQuesitonAndAns";
import FormMemateBlackBut from "@/layout/hover-button/FormMemateBlackBut";
import BecomeAnAffiliate from "./BecomeAnAffiliate";
import React, { useState } from 'react';

const ReferAndEarnComponent = () => {
    const [visible, setVisible] = useState(false);
  return (
    <div className="affiliateWrapper referAndEarnWrap">
    <div className="headWrap">
      <h1 className="smokeyGradient">Refer & Earn</h1>
      <h6>Earn $300 for every business <br></br> you refer to meMate</h6>
      <p>Know a business that's juggling spreadsheets, emails and five different apps? Introduce them to meMate. They get free migration and priority support, and you get $300.</p>
    <div className='topSpaceGap topSpaceGapFlex'>
      <BecomeAnAffiliate 
        buttonText="Become an Affiliate" 
        headingText="Affiliate application form" 
        visible={visible}
        setVisible={setVisible}
        className="btnFormNewDesign1"
      >
        <FormMemateBlackBut 
          className="alignLeft"
          target="_blank"
          buttonTextdark="Become an Affiliate"
          showButton1={true}
        />
      </BecomeAnAffiliate>
         <DarkMemateBlackBut
      link1=""
      link2="https://app.memate.com.au/onboarding"
      target="_blank"
      buttonTextlight="I'm a meMate customer"
      showButton2={true}
    />
    
       </div> 
    </div>
    <EarnReward />
    <BetterStart />
    <TwoWaysEarn />
    <div className="partNerEnquiryWrap">
      <span><em>If you work with</em> <b>small business owners</b> — as an</span>
       <div className="partNerGridWrap">
       <div className="partNerGridItem">
        <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/partner01-img.jpg"  alt="partner01" />
         <p>Business Advisors & Consultants</p>
       </div>
       <div className="partNerGridItem">
        <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/partner02-img.jpg"  alt="partner01" />
         <p>Accountants & Bookkeepers</p>
       </div>
       <div className="partNerGridItem">
        <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/partner03-img.jpg"  alt="partner01" />
         <p>Industry Associations & Trade Networks</p>
       </div>
       <div className="partNerGridItem">
        <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/partner04-img.jpg"  alt="partner01" />
         <p>Software Setup & Tech Support Providers</p>
       </div>
       <div className="partNerGridItem">
        <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/partner05-img.jpg"  alt="partner01" />
         <p>Influencers & Content Creators</p>
       </div>
       <div className="partNerGridItem">
        <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/partner06-img.jpg"  alt="partner01" />
         <p>Local “Biz Hubs” & Co-Working Spaces</p>
       </div>
       <div className="partNerGridItem">
        <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/partner07-img.jpg"  alt="partner01" />
         <p>Training Providers</p>
       </div>
       <div className="partNerGridItem addMorePartner">
      
      <div className="affiliateBtnProps affiliateBtnPropsC">
         <EmailNow buttonText="Become a Partner" headingText="Affiliate Enquiry Form" /> 
    </div> 
       </div>
       </div>
        <span>— the <b>meMate Partner Program</b> is built for you</span>
    </div>
    <div className="tw-bottomTextGradient">
        <h5 className="smokeyGradient">meMate is growing rapidly, with new businesses joining every day</h5>
        <p>If you have reach, influence or a trusted voice in the small-business community, you can turn it into predictable, transparent income, while helping businesses change the way they run.</p>
      </div>
      <HowToGetStarted />
       <div className="AustralianBusinessesWrap">
        <AutomotiveQuesitonAndAns />
        </div>
       <div className="groToGetherPartner">
      <h6 className="smokeyGradient">let’s grow together</h6>
      <p>Help Australian businesses work smarter, faster and more efficiently, and earn $300 for every one you bring on board.</p>
        <div className='topSpaceGap topSpaceGapFlex'>
      <BecomeAnAffiliate 
        buttonText="Become an Affiliate" 
        headingText="Affiliate application form" 
        visible={visible}
        setVisible={setVisible}
        className="btnFormNewDesign1"
      >
        <FormMemateBlackBut 
          className="alignLeft"
          target="_blank"
          buttonTextdark="Become an Affiliate"
          showButton1={true}
        />
      </BecomeAnAffiliate>
         <DarkMemateBlackBut
      link1=""
      link2="https://app.memate.com.au/login"
      target="_blank"
      buttonTextlight="Log in to get your link"
      showButton2={true}
    />
    
       </div> 
    </div>
    
    <div className="tw-longParagraph">
  <p>Rewards of $300 (incl. GST) per eligible new business account, paid in two instalments: $100 after 35 days and $200 after 100 days of continuous paid subscription. Trial periods do not count. Referral must be made through your unique link or code at signup (or linked by meMate within 30 days of signup). Self-referrals, existing or previous meMate accounts and additional users on existing accounts are not eligible. Free data migration covers standard data types as described in the full terms. meMate may review referrals and withhold rewards that don't meet these terms.</p>
      </div>
    </div>
  );
};

export default ReferAndEarnComponent;
