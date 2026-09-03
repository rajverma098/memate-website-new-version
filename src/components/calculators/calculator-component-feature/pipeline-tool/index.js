import React from "react";
import "./style.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
const PipeLineTool = () => {
  return (
    <div className="sales-management-wrapper-dataF flextMobile">
      <div className="sales-imageF">
        <LazyLoadImage
            alt="staff and job tracking by location"
            src="https://memate-website.s3.ap-southeast-2.amazonaws.com/custombusiness03-min.png"
            effect="blur" 
            type="image/svg+xml"
            className="Collaborative"
            />
      </div>
      <div className="content-wrapperF">
        <p className="sale-titleF">Collaborative</p>
        <p className="sales-heading-salesF">Add Margin or</p>
        <p className="sales-typeF">Markup in Seconds</p>
        <p className="sales-description-salesF">
        Easily apply margins or markups to your<br/> calculations to keep your pricing consistent and<br/> profitable.
        </p>
      </div>
    </div>
  );
};

export default PipeLineTool;
