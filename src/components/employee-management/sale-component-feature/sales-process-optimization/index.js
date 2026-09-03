import React from "react";
import "./style.css";
import Images from "../../../../assests/images";
import { LazyLoadImage } from "react-lazy-load-image-component";
const SalesProcessOptimiation = () => {
  return (
    <div className="sales-management-wrapper-dataF">
      <div className="content-wrapperF">
        <p className="sale-titleF">Powerful</p>
        <p className="sales-heading-salesF">Accountable </p>
        <p className="sales-typeF">Time Tracking </p>
        <p className="sales-description-salesF">
        Make the time spent by your team accountable.<br></br> Based on individual rates and submitted hours, <br></br>
        meMate provides real-time visibility of your<br></br> operating costs, ensuring accurate<br></br> financial tracking.
        </p>
      </div>
      <div className="sales-imageF">
        <LazyLoadImage
          alt="employee tracking system"
          src={Images.PowerfulEmployee}
          effect="blur" 
          type="image/svg+xml"
          className="sales-process-optimization-image"
          />
      </div>
    </div>
  );
};

export default SalesProcessOptimiation;
