import "./style.css";
import React, { useState } from 'react';
import 'react-phone-number-input/style.css';
import CallbackNow from "./callbacknow";
import EmailNow from "./emailnow";  
import ChatButton from "./ChatButton";  
import DarkMemateBlackBut from "@/layout/hover-button/DarkMemateBlackBut";


const ContactUsComponent = () => {

  return (
    <div id="contactUsPage">
      <div className="main-section contact-section" data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="600"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
        <div className="main-heading" >contact us</div>
        <div className="main-image">
          {/* <img src={ContactUsMainImage} alt="contact us main image" width={400} height={400}/> */}
          <img
              // className="dog-img"
            srcSet={`${'https://memate-website.s3.ap-southeast-2.amazonaws.com/media/ContactUs3x.png'} 600w, ${'https://memate-website.s3.ap-southeast-2.amazonaws.com/media/ContactUs2x.png'} 1200w, ${'https://memate-website.s3.ap-southeast-2.amazonaws.com/media/ContactUs1x.png'} 1800w`}
            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 25vw"
            src={'https://memate-website.s3.ap-southeast-2.amazonaws.com/media/ContactUs3x.png'}
            alt="contact us main image"
            width={400} height={400}
          />
          </div>
        <div className="mid-headingc">
          <h1 className="h1tags">Get in Touch with meMate – Support, Demos & Enquiries</h1>
          {/* <p>a friendly memate specialist is ready to help.</p> */}
        </div>
        <div className="small-headingc">
          <p className="contactParagraph">Made for Small to Medium Businesses for Simplicity and Order</p>
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
      <div className='query-section query-sectionc' data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
        <div className='query-cards'>
          <div className='query-card query-1 '>
            <div className='query-main '>
              <div className='query-main-heading'>
                <p className="contactText">Contact</p>
                <p className="contactText">by phone</p>
              </div>
              <div className='query-small-heading'>
                <p className="ContactSubText">Request a callback.</p>
              </div>
            </div>
                <CallbackNow />
          </div>
          <div className='query-card query-2 '>
            <div className='query-main'>
              <div className='query-main-heading'>
                <p className="contactText">Chat with</p>
                <p className="contactText">our experts</p>
              </div>
              <div className='query-small-heading'>
                <p className="ContactSubText">Chat to us live anytime between:</p>
                <p className="ContactSubText">8am-6pm (AEST), Monday to Friday</p>
              </div>
            </div>
            <div className='query-button'>
                {/* <button>Chat now</button> */}
                <ChatButton />
            </div>
          </div>
          <div className='query-card query-3 '>
            <div className='query-main'>
              <div className='query-main-heading query-color'>
                <p className="contactText">Email</p>
                <p className="contactText">our experts</p>
              </div>
              <div className='query-small-heading query-color'>
                <p className="ContactSubText">Message us anytime.</p>
                
              </div>
            </div>
              <EmailNow buttonText="Email now" headingText="Email now" />
          </div>
        </div>
        <div className="small-heading">
          <p className="ContactSubText">Our goal is to provide affordable digital management solutions for  </p>
          <p className="ContactSubText">Australian business owners — to improve efficiency, reduce unprofitability, </p>
          <p className="ContactSubText">and make running a business easier.</p>
        </div>
      </div>
    </div>
  )
}

export default ContactUsComponent;
