import React from "react";
import "./style.css";
import Link from "next/link";
import WhiteNormalButton from "../../../layout/hover-button/WhiteNormalButton";
import { LazyLoadImage } from "react-lazy-load-image-component";
import DarkMemateBlackBut from "@/layout/hover-button/DarkMemateBlackBut";
const MeMateFeatureMotivateTeam = () => {
  return (
    <div
      className="motivate-team-wrapper">
      <div className="efficiency-section">
        <div className="all-in-one ">
          <div className="strean-line ">
            <div className="boost-profits shadowRightline1 shadowLeftline1">
              <div className="operation-left">
                <p className="all-text">Powerful</p>
                <div className="smallH2Heading">Motivate</div>
                <div className="mediumHeadText">your team</div>
                <div className="operation-desp">
                  <p>
                    Motivate your team by showing real-time results and
                    potential rewards for achieving targets. Encourage your
                    employees and contractors to perform at their best.
                  </p>
                </div>
             
                   <DarkMemateBlackBut
                  link2="/features"
                  className="alignLeft"
                  buttonTextlight="See All Features"
                  showButton2={true}
                />
         
              </div>
              <div className="operation-right">
                <div className="motivate-image motivate-imagespace motivateImageSetter">
                  {
                    <LazyLoadImage
                alt="Motivate your team"
                src={'https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/slider/img-motivate-min.png'}
                effect="blur" 
              />
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeMateFeatureMotivateTeam;
