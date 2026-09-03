import React from "react";
import "./style.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
const CRMSalesTool = () => {
  return (
    <div className="sales-management-wrapper-dataF">
      <div className="content-wrapperF">
        <p className="sale-titleF">Proactive </p>
        <p className="sales-heading-salesF">Control</p>
        <p className="sales-typeF">Contractor Time</p>
        <p className="sales-description-salesF">
        Easily monitor and track your contractors’ time<br/> through a single,
        integrated dashboard. meMate<br/> provides real-time updates, giving you complete <br/>control over contractor time management and <br/>performance.
        </p>
      </div>
      <div className="sales-imageF">
        <LazyLoadImage
            alt="track hours worked"
            src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/contractor-time-img.svg"
            effect="blur" 
            type="image/svg+xml"
            />
      </div>
    </div>
  );
};

export default CRMSalesTool;
