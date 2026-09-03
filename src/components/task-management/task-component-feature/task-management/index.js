import React from "react";
import "./style.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
const TaskManagement = () => {
  return (
    <div className="sales-management-wrapper-dataF flextMobile">
      <div className="sales-imageF">
        <LazyLoadImage
          alt="manage multiple business locations"
          src="https://memate-website.s3.ap-southeast-2.amazonaws.com/tolist01-min.png"
          effect="blur" 
          type="image/svg+xml"
          />
      </div>
      <div className="content-wrapperF">
        <p className="sale-titleF">Essential</p>
        <p className="sales-heading-salesF">Add Tasks Directly</p>
        <p className="sales-typeF">to the Project Timeline</p>
        <p className="sales-description-salesF">
        Seamlessly place tasks within the project timeline<br/> so everything stays aligned—from deadlines to<br/> deliverables.
       </p>
      </div>
    </div>
  );
};

export default TaskManagement;
