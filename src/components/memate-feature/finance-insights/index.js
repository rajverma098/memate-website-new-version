import React from "react";
import "./style.css";
import FeatureCard from "../card";
import { LazyLoadImage } from "react-lazy-load-image-component";
const MeMateFinanceInsights = () => {
  return (
    <div className="efficiency-section-wrapper mainOperationRight">
      <div className="efficiency-section">
        <FeatureCard
          subHeading="Finance"
          topHeading="Real-time financial"
          mainHeading="insights"
           className="shadowRightline2 shadowLeftline2"
          description="Oversee company performance by product or service type. Reward managers based on actual performance, and view transparent, easy-to-understand statistics."
          cardButton="See All Features "
          maxImage={
             <LazyLoadImage
                alt="Real-time financial insights"
                src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/slider/img-real-time-min.png"
                effect="blur" 
              />
          }
        />
      </div>
    </div>
  );
};

export default MeMateFinanceInsights;
