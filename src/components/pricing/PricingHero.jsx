import React from 'react';
import './PricingHero.css'; 
import DarkMemateBlackBut from "@/layout/hover-button/DarkMemateBlackBut";
const PricingHero = () => {
  return (
    <section className="pricing-hero">
      <div className="container">
        <div className="title-wrapper">
          <h1 className="smokeyGradient">pricing</h1>
          <img
            className="hero-image"
            srcSet={`https://memate-website.s3.ap-southeast-2.amazonaws.com/media/pricing3x.png 600w, https://memate-website.s3.ap-southeast-2.amazonaws.com/media/pricing2x.png 1200w, https://memate-website.s3.ap-southeast-2.amazonaws.com/media/pricing1x.png 1800w`}
            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 25vw"
            src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/pricing3x.png"
            alt="Woman using phone"
          />
        </div>
        <h2 className="hero-subtitle">
          Start with what you need.<br />
          Add to it as you grow
        </h2>
        <p className="hero-description">
          meMate Business starts at $99.85 a month. Add field teams, enquiries, assets, 
          locations and users when you need them, and change your set-up from your 
          account any month. Try it free for 14 days, with no lock-in.
        </p>
        <div className='topSpaceGap'>
         <DarkMemateBlackBut
      link1=""
      link2="https://app.memate.com.au/onboarding"
      target="_blank"
      buttonTextdark="Start free trial"
      buttonTextlight="Book a demo"
      showButton1={true}
      showButton2={true}
    />
       </div>
        <p className="hero-disclaimer">
          All prices in AUD, including GST.
        </p>
      </div>
    </section>
  );
};

export default PricingHero;