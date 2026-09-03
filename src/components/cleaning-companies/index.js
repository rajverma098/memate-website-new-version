import CancelWheneverIcon from "../../svg/CancelWheneverIcon";
import FreeSetupIcon from "../../svg/FreeSetupIcon";
import MoveDataIcon from "../../svg/MoveDataIcon";
import DarkMemateBlackBut from "@/layout/hover-button/DarkMemateBlackBut";
import InfiniteImageScroll from "./InfiniteImageScroll";
import CleaningBusinessList from "./CleaningBusinessList";
import AutomotiveQuesitonAndAns from "./AutomotiveQuesitonAndAns";
import CaseStudiesHome from "../../components/casestudies-home";
import EnquiryProfit from "./EnquiryProfit";
import BusinessFeatures from "./BusinessFeatures";
import LayerAnimation from "./LayerAnimation";
import "./cleaning-business.css";
import LessBusyness from "@/page-components/landing-page/less-busyness";
import FindOneApplication from "../find-one-all";
import { useEffect } from "react";

const ORANGE_GRADIENT =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='371' height='674' viewBox='0 0 371 674' fill='none'%3E%3Cg filter='url(%23f0)'%3E%3Cellipse cx='216.899' cy='336.822' rx='47.1992' ry='167.122' fill='%23FFB259' fill-opacity='0.44'/%3E%3C/g%3E%3Cdefs%3E%3Cfilter id='f0' x='0' y='0' width='433.798' height='673.644' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0'/%3E%3CfeBlend in='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='84.85'/%3E%3C/filter%3E%3C/defs%3E%3C/svg%3E\")";

const SKYBLUE_GRADIENT =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='321' height='824' viewBox='0 0 321 824' fill='none'%3E%3Cg filter='url(%23f1)'%3E%3Cellipse cx='107.799' cy='411.973' rx='43.244' ry='242.273' fill='%231EB2DC' fill-opacity='0.33'/%3E%3C/g%3E%3Cdefs%3E%3Cfilter id='f1' x='-105.145' y='0' width='425.888' height='823.946' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0'/%3E%3CfeBlend in='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='84.85'/%3E%3C/filter%3E%3C/defs%3E%3C/svg%3E\")";


const features = [
  {
    icon: <CancelWheneverIcon />,
    text: (
      <>
        Cancel whenever, no
        <br />
        lock-in contracts
      </>
    ),
  },
  {
    icon: <FreeSetupIcon />,
    text: (
      <>
        Free setup, we do
        <br />
        that for you
      </>
    ),
  },
  {
    icon: <MoveDataIcon />,
    text: (
      <>
        Bring your existing
        <br />
        client data, we move
        <br />
        it at no cost
      </>
    ),
  },
];
const CleaningBusinessComponent = () => {
    useEffect(() => {
      const wrappers = document.querySelectorAll(".bgshadowwrapper");
      const salesFeatureWrapper = document.querySelector(".salesFeatureBg");
      if (!salesFeatureWrapper) return;
  
      wrappers.forEach((wrapper, index) => {
        const isEven = index % 2 === 0;
  
        wrapper.style.backgroundImage = isEven || !isEven
          ? `${SKYBLUE_GRADIENT}, ${ORANGE_GRADIENT}`
          : `${SKYBLUE_GRADIENT}, ${ ORANGE_GRADIENT}`;
  
        wrapper.style.backgroundRepeat = "no-repeat, no-repeat";
        wrapper.style.backgroundPosition = isEven
          ? "left center, right center"
          : "left center, right center";
  
        wrapper.style.backgroundSize = "auto, auto";
        wrapper.style.zIndex = "999";
        // wrapper.style.transform = "translateY(200px)";
        // wrapper.style.animation = "gradientAnimation 10s ease-in-out infinite";
        const yPositions = ["0%", "25%", "50%", "75%", "100%"]; 
  
      const images = [
        ...yPositions.map(() => SKYBLUE_GRADIENT), 
        ...yPositions.map(() => ORANGE_GRADIENT), 
      ].join(", ");
  
      const positions = [
        ...yPositions.map((y) => `left ${y}`),
        ...yPositions.map((y) => `right ${y}`),
      ].join(", ");
  
      salesFeatureWrapper.style.backgroundImage = images;
      salesFeatureWrapper.style.backgroundRepeat = "no-repeat";
      salesFeatureWrapper.style.backgroundPosition = positions;
      salesFeatureWrapper.style.backgroundSize = "auto";
      salesFeatureWrapper.style.zIndex = "999";
      });
    }, []);
  return (
<>
      <div className="cleaningBusinessWrap salesFeatureBg">
      <div className="cleaningContainer">
      <div className="cleaningFlex">
      <div className="leftLayoutLayers">
        <div className="cleaninTop">
          <span><em></em>Software for Cleaning Business</span>
          <h1>Your competitors are still<br></br> texting. <b>That's your <br></br>advantage.</b></h1>
          <h5>Enquiries, quotes, jobs, internal chats and invoices.</h5>
          <p>meMate tracks it all properly, so nothing gets lost in<br></br> unread messages or forgotten.</p>
        </div>
     
         <div className="advantage-features">
            {features.map((feature, index) => (
              <div className="advantage-feature" key={index}>
                <div className="feature-icon">
                  {feature.icon}
                </div>

                <div className="feature-text">
                  {feature.text}
                </div>
              </div>
            ))}
          </div>
  <div className='topSpaceGap'>
         <DarkMemateBlackBut
      link1="https://app.memate.com.au/onboarding"
      link2="https://app.memate.com.au/requestdemo"
      className="alignLeft"
      target="_blank"
      buttonTextdark="Start Free Trial"
      buttonTextlight="Request a Demo"
      showButton1={true}
      showButton2={true}
    />
       </div>
       </div>
      <div className="rightLayoutLayers ">
       <LayerAnimation />
        {/* <div className="topLeftLayers">
         <div className="demo-bubble positionValue">
            <strong>Let us show you</strong>
            <span><em>▶</em> 10 Min Demo →</span>
          </div>
              <div className="enquiries-card positionValue">
            <div className="card-small-icon"><EnquiryFunnerlIcon /></div>
            <div>
              <span className="card-label">Enquiries</span>
              <div className="enquiry-value">
                <strong>15</strong>
                <small>↗ 10%</small>
              </div>
            </div>
          </div>
        </div>
        <div className="middleLayoutLayers">
                   <Image
                    alt="Your competitors are still texting. That's your advantage."
                    src="https://memate-website.s3.ap-southeast-2.amazonaws.com/cleaningBusinessGirl-img1.png"                          
                    priority                      
                    placeholder="empty"         
                    width={538} height={474}
                  />
                  </div>
                   <div className="bottomRightLayers">
        <div className="positionValue paymentCardWrap">
             <Image
                    alt="Your competitors are still texting. That's your advantage."
                    src="https://memate-website.s3.ap-southeast-2.amazonaws.com/dolor-img.png"                          
                    priority                      
                    placeholder="empty"         
                    width={65} height={46}
                  />
             <div className="payment-card">
            <div className="payment-icon"><PaymentReceivedIcon /></div>
            <div>
              <span className="payment-label">
                Payment Received
              </span>
              <strong>$1,385</strong>
            </div>
          </div>
          </div>
          <div className="job-completed positionValue">
            <span className="check-icon"><CleaningTechIcon /></span>
            Job Complete
          </div>
         </div>*/}
       </div> 

       </div>
  </div>

     <div className="trustedByCleningWrapper">
     <div className="trustedByCleningWrap">
        <div className="trustedByHead">
           <h2>Trusted by cleaning<br></br> businesses <span>across Australia</span> 
             <img src='https://memate-website.s3.ap-southeast-2.amazonaws.com/%F0%9F%87%A6%F0%9F%87%BA-flag-img.png' alt="Australia Flag" />
           </h2>
       </div>
    </div>
    </div>
   <InfiniteImageScroll />
   <div className="EnquiryProfitWrap">
   <EnquiryProfit />
   </div>

      </div>
      <LessBusyness /> 
        <FindOneApplication /> 
      <div className="BusinessFeaturesWrap">
          <BusinessFeatures /> 
        </div>
        <CleaningBusinessList />
      <div className="AustralianBusinessesWrap">
         <CaseStudiesHome />   
           <div className='topSpaceGap'>
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
        </div>
      <div className="AustralianBusinessesWrap">
        <AutomotiveQuesitonAndAns />
        </div>
        <section className="business-hero">
        <div className="business-hero__image">
          <div className="business-hero__content">
            <h1 className="business-hero__title">
              More Business - Less Busyness
            </h1>
            <p className="business-hero__subtitle ">
              <span className="smokeyGradient1">Smarter</span>
              <b className="smokeyGradient1"> · </b>
              <span className="smokeyGradient1">Faster</span>
              <b className="smokeyGradient1"> · </b>
              <span className="smokeyGradient1">Digital</span>
            </p>
             <div className='topSpaceGap'>
         <DarkMemateBlackBut
      link1="https://app.memate.com.au/requestdemo"
      link2="https://app.memate.com.au/onboarding"
      target="_blank"
      buttonTextdark="Show Me How It Works"
      buttonTextlight="Start Free Trial"
      showButton1={true}
      showButton2={true}
    />
       </div>
          </div>
        </div>
    </section>
      


</>
  );
};

export default CleaningBusinessComponent;
