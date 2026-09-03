import React from "react";
import "./style.css";
import Images from "../../../../assests/images";
import { LazyLoadImage } from "react-lazy-load-image-component";
const SuitableTender = () => {
  return (
    <div className="suitable-tender-wrapper marginSpaceTop">
      <div className="content-wrapper">
        <p className="sale-title">Strategic</p>
        <p className="sales-heading-sales">Shift and   </p>
        <p className="sales-type">job overview</p>
        <p className="sales-description-sales">
        View all shifts and plan jobs for your team in one<br/> screen. 
        Easily assess workloads and optimise<br/> shifts and contractor assignments 
        to ensure <br/>efficiency and balance across your projects.
        </p>
      </div>
      <div className="suitable-table-image-wrapper">
        <LazyLoadImage
          alt="Aussie job system for SMEs"
          src={Images.jobOverview}
          effect="blur" 
          type="image/svg+xml"
          />
      </div>
    </div>
  );
};

export default SuitableTender;
