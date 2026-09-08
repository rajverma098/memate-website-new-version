"use client";

import React from "react";
import "./style.css";
import { motion } from "framer-motion";
import DarkMemateBlackBut from "@/layout/hover-button/DarkMemateBlackBut";


const MeMateFeatureStreamline = () => {
  return (
    <div className="feature-section-container request-btn-update">
      <div className="features-section">
        <div
          className="all-in-one">
          <div className="stream-line">
            <div className="main-operation shadowRightline shadowLeftline">
              <div className="operation-left">
                <p className="all-text">No Onboarding Fees</p>
                <div className="smallH2Heading">Implementation</div>
                <div className="mediumHeadText">and Training</div>

                <div className="operation-desp">
                  <ul>
                    <li>Subscription includes 1-to-1 onboarding, email support, and help guides.</li>
                    <li>Go-live within 1-3 days, with a 14-day free trial available to evaluate the platform before committing.</li>
                  </ul>
                </div>
             
             
                   <DarkMemateBlackBut
                    link2="https://app.memate.com.au/requestdemo"
                    className="alignLeft"
                    target="_blank"
                    buttonTextlight="Book a Demo"
                    showButton2={true}
                  />
                </div>
            
              <div className="operation-right">
                <span className="gradientAnimenate gradiientColor smokeyGradient"> meMate </span>
                <div className="max-image">
            <motion.div
  className="downClickButton"
  animate={{
    x: [0, -30, 0], 
    opacity: [1],
  }}
  transition={{
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  style={{ display: "inline-block" }}
>
  <motion.img
    alt="MeMate Feature Girl Image"
    src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/slider/img-memate-feature-girl-min.png"
    style={{ cursor: "pointer" }}
    onClick={() => {
      document.getElementById("legalvision")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }}
  />
</motion.div>

                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeMateFeatureStreamline;
