import React from "react";
import "./style.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
const CalculatorProcessOptimiation = () => {
  return (
    <div className="sales-management-wrapper-dataF">
      <div className="content-wrapperF">
        <p className="sale-titleF">Seamless</p>
        <p className="sales-heading-salesF">Pre-Set Departments</p>
        <p className="sales-typeF">& Sub-Departments</p>
        <p className="sales-description-salesF">
        Structure your calculator around your business<br/> with predefined departments and sub-<br/>departments for better clarity and organisation.
        </p>
      </div>
      <div className="sales-imageF">
        <LazyLoadImage
            alt="location-based job management"
            src="https://memate-website.s3.ap-southeast-2.amazonaws.com/custombusiness04-min.png"
            effect="blur" 
            type="image/svg+xml"
            className="geolocation"
            />
      </div>
    </div>
  );
};

export default CalculatorProcessOptimiation;
