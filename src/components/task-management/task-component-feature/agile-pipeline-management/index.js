import React from "react";
import "./style.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
const AgilePipeLineManagement = () => {
  return (
    <div className="sales-management-wrapper-dataF flextMobile">
      <div className="sales-imageF">
        <LazyLoadImage
          alt="Aussie multi-location tools"
          src="https://memate-website.s3.ap-southeast-2.amazonaws.com/todolist05-min.png"
          effect="blur" 
          type="image/svg+xml"
          />
      </div>
      <div className="content-wrapperF">
        <p className="sale-titleF">Convenient</p>
        <p className="sales-heading-salesF">Assign Tasks to</p>
        <p className="sales-typeF">Team Members with<br/> Ease</p>
        <p className="sales-description-salesF">
        Quickly delegate work to your internal team with<br/> just a few clicks—clear, fast, and fully visible.
        </p>
      </div>
    </div>
  );
};

export default AgilePipeLineManagement;
