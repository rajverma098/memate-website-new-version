import React from "react";
import "./style.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
const AgilePipeLineManagement = () => {
  return (
    <div className="sales-management-wrapper-dataF flextMobile" >
      <div className="sales-imageF">
        <LazyLoadImage
            alt="small business time tracking app"
            src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/time-traker-workhours.svg"
            effect="blur" 
            type="image/svg+xml"
            />
      </div>
      <div className="content-wrapperF">
        <p className="sale-titleF">Advanced</p>
        <p className="sales-heading-salesF">Monitor Employee</p>
        <p className="sales-typeF">Work Hours</p>
        <p className="sales-description-salesF">
        Track your employees’ work hours both in the <br/>office and on-site with meMate. 
        Using dedicated<br/> applications for employees and contractors, 
        you <br/>can monitor time with ease while providing a <br/>convenient and user-friendly experience for your <br/>team.
        </p>
      </div>
    </div>
  );
};

export default AgilePipeLineManagement;
