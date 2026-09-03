import React from "react";
import "./style.css";
import FeatureCard from "../card";
import { LazyLoadImage } from "react-lazy-load-image-component";

const MemateFeatureBoastEfficiency = () => {
  return (
    <div
      className="efficiency-section-container mainOperationRight">
      <div className="efficiency-section">
        <FeatureCard
          subHeading="Dashboard"
          topHeading="Boost Profits"
          mainHeading="& efficiency"
          className="shadowRightline1 shadowLeftline1"
          description="See the real-time costs and time spent on each product or service, and adjust pricing by viewing operational profits in real time."
          cardButton="See All Features"
          maxImage={
            <LazyLoadImage
              alt="Boost Profits & efficiency"
              src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/slider/img-boost-profile-min.png"
              effect="blur"
            />
          }
        />
      </div>
    </div>
  );
};

export default MemateFeatureBoastEfficiency;
