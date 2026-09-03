import React from "react";
import "./style.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
const AgilePipeLineManagement = () => {
  return (
    <div className="sales-management-wrapper-dataF flextMobile">
      <div className="sales-imageF">
        <LazyLoadImage
          alt="Aussie multi-location tools"
          src="https://memate-website.s3.ap-southeast-2.amazonaws.com/custombusiness05-min.png"
          effect="blur" 
          type="image/svg+xml"
          />
      </div>
      <div className="content-wrapperF">
        <p className="sale-titleF">Essential</p>
        <p className="sales-heading-salesF">Instantly View</p>
        <p className="sales-typeF">Operational<br/> Profitability</p>
        <p className="sales-description-salesF">
        Get a real-time view of your quote’s profitability—<br/>see what you’re really making before you send<br/> the proposal.
        </p>
      </div>
    </div>
  );
};

export default AgilePipeLineManagement;
