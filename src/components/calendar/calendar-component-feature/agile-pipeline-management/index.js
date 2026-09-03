import React from "react";
import "./style.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
const AgilePipeLineManagement = () => {
  return (
    <div className="sales-management-wrapper-dataF flextMobile">
      <div className="sales-imageF">
        <LazyLoadImage
          alt="Aussie multi-location tools"
          src="https://memate-website.s3.ap-southeast-2.amazonaws.com/companycalender05-min.png"
          effect="blur" 
          type="image/svg+xml"
          />
      </div>
      <div className="content-wrapperF">
        <p className="sale-titleF">Modern</p>
        <p className="sales-heading-salesF">Sync Tasks</p>
        <p className="sales-typeF">with the Calendar</p>
        <p className="sales-description-salesF">
        Link project tasks directly to the calendar so you<br/> can see what’s due and when—right alongside<br/> team schedules.
        </p>
      </div>
    </div>
  );
};

export default AgilePipeLineManagement;
