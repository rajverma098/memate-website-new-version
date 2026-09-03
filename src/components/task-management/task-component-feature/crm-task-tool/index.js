import React from "react";
import "./style.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
const CRMTaskTools = () => {
  return (
    <div className="sales-management-wrapper-dataF">
      <div className="content-wrapperF">
        <p className="sale-titleF">Modern</p>
        <p className="sales-heading-salesF">Turn Tasks into</p>
        <p className="sales-typeF">Key Project <br/>Notifications</p>
        <p className="sales-description-salesF">
        Highlight key milestones and keep your team on<br/> track by using tasks as notifications for important<br/> events.
        </p>
      </div>
      <div className="sales-imageF">
         <LazyLoadImage
            alt="multi-site business software"
            src="https://memate-website.s3.ap-southeast-2.amazonaws.com/todolist02-min.png"
            effect="blur" 
            type="image/svg+xml"
            />
      </div>
    </div>
  );
};

export default CRMTaskTools;
