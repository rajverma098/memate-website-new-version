import React, { useState } from 'react';
import './TwoWaysEarn.css';
import DarkMemateBlackBut from "@/layout/hover-button/DarkMemateBlackBut";
import FormMemateBlackBut from "@/layout/hover-button/FormMemateBlackBut";
import BecomeAnAffiliate from "./BecomeAnAffiliate";

const TwoWaysEarn = () => {
    const [visible, setVisible] = useState(false);
  return (
    <section className="twoWaysWrap">
      <div className="tw-container">
        <div className="tw-card tw-card-left">
          <h3 className="tw-card-title">
            Already use meMate? Refer from inside your account
          </h3>
          <p className="tw-card-text">
            Your personal referral link is waiting in <strong>Settings → Refer & Earn</strong>. Copy it, share it by email, SMS, WhatsApp or LinkedIn, and track every referral and payment from the same screen.
          </p>
          <DarkMemateBlackBut
      link1="https://app.memate.com.au/login"
      target="_blank"
      buttonTextdark="Log in to get your link"
      showButton1={true}
    />

        </div>
        <div className="tw-center">
          <h2 className="tw-title">
            <div className="tw-lineSmall"></div>
           <div className="tw-gradientText"> 
            <span className="tw-title-blue smokeyGradient">two</span>
            <span className="tw-title-green smokeyGradient">ways to</span>
            <span className="tw-title-gold smokeyGradient">earn</span>
            </div>
            <div className="tw-lineSmall"></div>
          </h2>
        </div>
        <div className="tw-card tw-card-right">
          <h3 className="tw-card-title">
            Work with small businesses? Become a meMate Affiliate
          </h3>
          <p className="tw-card-text">
            Accountants, bookkeepers, consultants, associations, creators: apply once and we'll set you up with your own affiliate page and link to share with your clients and audience.
          </p>
          {/* <BecomeAnAffiliate buttonText="Become a Partner" headingText="Affiliate Enquiry Form" />   */}
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
        </div>
      </div>
      
    </section>
  );
};

export default TwoWaysEarn;