import React from "react";
import Images from "../../../../assests/images";
import "./style.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
const AgilePipeLineManagement = () => {
  return (
    <div className="sales-management-wrapper-dataF flextMobile">
      <div className="sales-imageF">
        <LazyLoadImage
            alt="job costing and budgeting"
            src={Images.budEssential}
            effect="blur" 
            type="image/svg+xml"
            />
      </div>
      <div className="content-wrapperF">
        <p className="sale-titleF">Essential</p>
        <p className="sales-heading-salesF">Data  </p>
        <p className="sales-typeF">at every step</p>
        <p className="sales-description-salesF">
        meMate displays only the essential data to help <br></br>you navigate through the 
        numbers with ease, <br></br>without needing a full-time operations person.<br></br> 
        Our system is designed to simplify without <br></br>compromising on depth and detail.
        </p>
      </div>
    </div>
  );
};

export default AgilePipeLineManagement;
