import React from "react";
import "./style.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
const ChatProcessOptimiation = () => {
  return (
    <div className="sales-management-wrapper-dataF">
      <div className="content-wrapperF">
        <p className="sale-titleF">Fast</p>
        <p className="sales-heading-salesF">Mobile App Chat Access </p>
        <p className="sales-typeF">for Contractors</p>
        <p className="sales-description-salesF">
        Your contractors can stay in the loop and respond<br/> on the go through the memate mobile app—easy,<br/> direct communication wherever they are.
        </p>
      </div>
      <div className="sales-imageF imageResizeHeight">
        <LazyLoadImage
            alt="location-based job management"
            src="https://memate-website.s3.ap-southeast-2.amazonaws.com/internalchat04-min.png"
            effect="blur" 
            type="image/svg+xml"
            className="geolocation"
            />
      </div>
    </div>
  );
};

export default ChatProcessOptimiation;
