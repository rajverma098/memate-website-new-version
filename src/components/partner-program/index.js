import DarkMemateBlackBut from "@/layout/hover-button/DarkMemateBlackBut";
import Image from "next/image";
import HowItWorks from "./HowItWorks";
import OurPartners from "./OurPartners";
import {ArrowRight} from "lucide-react";
import ServicesProviderIcon from "../../svg/ServicesProviderIcon";
import "./partner-program-page-new.css";
import { motion } from "framer-motion";

const PartnerProgramComponentNew = () => {
  return (
<>
      <div className="partnerProgramWrapper">
      <div className="partnerContainer">
         <div className="headWrap">
          <h1 className="smokeyGradient">Grow with the businesses already using meMate</h1>
          <p>The meMate Partner Program puts your business in front of thousands of Australian small and medium business owners — directly inside the app they use to run their company every day.</p>
              <DarkMemateBlackBut
              link1="https://app.memate.com.au/requestdemo"
              target="_blank"
              buttonTextdark="Request a Demo"
              showButton1={true}/>
       </div>
       </div>
       <div className="sectionFlexBoxWrapper">
       <div className="sectionFlexBoxWrap">
       <div className="flexBoxImage">
         <Image
                    alt="Free_MacBook_Pr"
                    src="https://memate-website.s3.ap-southeast-2.amazonaws.com/Free_MacBook_Pro_img.png"                          
                    priority                      
                    placeholder="empty"         
                    width={620} height={426}
                  />
            
        </div>
       <div className="flexBoxText">
            <h4>Listed inside the meMate app. One click away from every user.</h4>
            <p>meMate is a desktop business management platform used by small and medium businesses across Australia. </p>
            <p>As a meMate Partner, your business is featured directly inside the app — in a dedicated Partners section where our users can read about you and reach out in seconds, without leaving the platform.</p>
        </div>
        </div>
        </div>
       <div className="sectionFlexBoxWrapper">
       <div className="sectionFlexBoxWrap containerBgColor">
       <div className="flexBoxText">
            <h4>Service providers who work with small and medium business</h4>
            <p>If your clients are small to medium business owners — and you're good at what you do — we want to hear from you. We're looking for operators across Australia who are ready to take on new clients and treat them well. </p>
            <p><strong>We're currently looking for Partners in: Legal & commercial law · Accounting & tax · Bookkeeping · Marketing · HR & employment · Insurance · Financial advisory · IT & tech support · Business coaching</strong></p>
            <p>Each category has one Partner. If yours is taken, it's taken. If it's not — apply. Don't see your category listed? We're open to it. Apply and we'll consider it.</p>
        </div>
          <div className="flexBoxImage">
         <Image
                    alt="Services Provider"
                    className="noSpaceImage"
                    src="https://memate-website.s3.ap-southeast-2.amazonaws.com/services-provider-img.png"                          
                    priority                      
                    placeholder="empty"         
                    width={446} height={604}
                  />
            
        </div>
        </div>
        </div>
         <div className="sectionFlexBoxWrapper">
       <div className="sectionFlexBoxWrap">
       <div className="flexBoxImage boxWidthImage">
         <Image
                    alt="Free_MacBook_Pr"
                    src="https://memate-website.s3.ap-southeast-2.amazonaws.com/direct-enquiry-business.png"                          
                    priority                      
                    placeholder="empty"         
                    width={380} height={525}
                  />
            
        </div>
       <div className="flexBoxText">
            <h4>Direct enquiries from real business owners. No middleman.</h4>
            <p>Your listing inside the meMate platform puts you in front of business owners at the moment they need what you offer.</p>
            <p>Every enquiry comes straight to you — meMate is not involved in the conversation, the service, or the outcome. The client is yours from the first message.</p>
            <p><strong>No listing fee. No commission. Just warm, direct leads from verified Australian businesses.</strong></p>
        </div>
        </div>
        </div>
 <div className="sectionFlexBoxWrapper">
       <div className="sectionFlexBoxWrap">
       <div className="flexBoxText">
            <h4>One thing: an exclusive deal for meMate users.</h4>
            <p>We don't charge to be listed. In return, we ask that you offer meMate users something they can't get elsewhere — a set discount, a reduced first engagement, or a preferential rate. You decide the offer; we agree on it together before you go live.</p>
            <p><strong>It's what makes the partnership real for our users, and worth their while to reach out.</strong></p>
        </div>
          <div className="flexBoxImage boxWidthImage">
            <motion.div
    className="demo-bubble positionValue"
    animate={{
      y: [0, -12, 0, 10, 0],
      x: [0, 4, 0, -4, 0],
      rotate: [0, 1, 0, -1, 0],
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />

  {/* User Tags Overlay */}
  <motion.div
    className="tagImageOverly"
    animate={{
      y: [0, -6, 0, 6, 0],
      x: [0, 3, 0, -3, 0],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    <img
      src="https://memate-website.s3.ap-southeast-2.amazonaws.com/memate-user-tags.png"
      alt="user-tags"
    />
  </motion.div>
              
         <Image
                    alt="Services Provider"
                    src="https://memate-website.s3.ap-southeast-2.amazonaws.com/memate-user-things-img.png"                          
                    priority                      
                    placeholder="empty"         
                    width={500} height={400}
                  />
            
        </div>
        </div>
        </div>
<HowItWorks />
<div className="gradient-line"></div>




    </div>
    <OurPartners />

   <div className="realyPatnerWrapper">
    <b>Become a Partner</b>
    <h4 className="smokeyGradient">Ready to be listed?</h4>
       <DarkMemateBlackBut
      link1="https://app.memate.com.au/requestdemo"
      target="_blank"
      buttonTextdark="Apply to Become a meMate Partner"
      showButton1={true}
    />
    <div className="servicesProviderWrap">
    <div className="leftItemIcon">
    <ServicesProviderIcon />
    </div>
    <div className="rightItemText">
     <b>Not a service provider?</b>
     <p>If you'd like to earn a commission by referring businesses to meMate, that's our Affiliate Program — and it works differently.</p>
     <a href="#">Learn about the Affiliate Program <ArrowRight size={16} strokeWidth={1.6} /></a>
    </div>
    </div>
   </div>
</>
  );
};

export default PartnerProgramComponentNew;
