import React from "react";
import "./style.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
const SuitableTender = () => {
  return (
    <div className="sales-management-wrapper-dataF">
      <div className="content-wrapperF">
        <p className="sale-titleF">Seamless</p>
        <p className="sales-heading-salesF">Simple &</p>
        <p className="sales-typeF">Super User-Friendly</p>
        <p className="sales-description-salesF">
        Designed for real teams, not tech experts. Clean<br/> layout, intuitive design, and easy navigation make<br/> planning a breeze.
        </p>
      </div>
      <div className="sales-imageF">
        <LazyLoadImage
          alt="branch management software"
          src="https://memate-website.s3.ap-southeast-2.amazonaws.com/companycalender06-min.png"
          effect="blur" 
          type="image/svg+xml"
          />
      </div>
    </div>
  );
};

export default SuitableTender;
