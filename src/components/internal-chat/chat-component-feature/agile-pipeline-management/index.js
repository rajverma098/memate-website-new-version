import React from "react";
import "./style.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
const AgilePipeLineManagement = () => {
  return (
    <div className="sales-management-wrapper-dataF flextMobile">
      <div className="sales-imageF imageResizeHeight">
        <LazyLoadImage
          alt="Aussie multi-location tools"
          src="https://memate-website.s3.ap-southeast-2.amazonaws.com/internalchat05-min.png"
          effect="blur" 
          type="image/svg+xml"
          />
      </div>
      <div className="content-wrapperF">
        <p className="sale-titleF">Convenient</p>
        <p className="sales-heading-salesF">Private & Secure </p>
        <p className="sales-typeF">Communication</p>
        <p className="sales-description-salesF">
        All chats stay within your organisation—fully <br/>private, secure, and accessible only to the people<br/> involved in each project.
        </p>
      </div>
    </div>
  );
};

export default AgilePipeLineManagement;
