import React from "react";
import FeatureCard from "../card";
import './style.css';
import { LazyLoadImage } from "react-lazy-load-image-component";
const MeMateWorkForce = () => {
  return (
    <div className="workforce-container mainOperationRight mainOperationspace">
      <div className="efficiency-section">
        <FeatureCard
          subHeading="In-depth"
          topHeading="Understand"
          mainHeading="your workforce"
          className="shadowRightline1 shadowLeftline1"
          description="Efficiently track employee and subcontractor hours with real-time updates on their progress. Our system also streamlines timesheet and invoice submissions."
          cardButton="See All Features "
          maxImage={
            <LazyLoadImage
                  alt="In-depth Understand your workforce"
                  src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/slider/img-understand-min.png"
                  effect="blur" 
                />
          }
        />
      </div>
    </div>
  );
};

export default MeMateWorkForce;
