import React from "react";
import FeatureCard from "../card";
import './style.css';
import { LazyLoadImage } from "react-lazy-load-image-component";
const MeMateFeatureAgile = () => {
  return (
    <div className="agile-container-section mainOperationRight">
      <div className="efficiency-section">
        <FeatureCard
          subHeading="Agile"
          topHeading="Total control"
          mainHeading="anywhere"
          className="shadowRightline2 shadowLeftline2"
          description="At any stage, view projects, work, linked expenses, employee time, and subcontractors. Gain a clear overview of what’s happening in your company at any time."
          cardButton="See All Features "
          maxImage={
             <LazyLoadImage
                  alt="Agile Total control anywhere"
                  src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/slider/img-total-control-min.png"
                  effect="blur" 
                />
          }
        />
      </div>
    </div>
  );
};

export default MeMateFeatureAgile;
