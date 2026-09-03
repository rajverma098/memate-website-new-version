import React from "react";
import "./style.css";
import Images from "../../../../assests/images";
import { LazyLoadImage } from "react-lazy-load-image-component";
const SalesManagement = () => {
  return (
    <div className="sales-management-wrapper-dataF flextMobile">
      <div className="sales-imageF">
        <LazyLoadImage
          alt="task and project tracking"
          src={Images.proUserFriendly}
          effect="blur" 
          type="image/svg+xml"
          />
      </div>
      <div className="content-wrapperF">
        <p className="sale-titleF">User-friendly </p>
        <p className="sales-heading-salesF">Project<br></br>Project Management</p>
        <p className="sales-typeF"> timeline </p>
        <p className="sales-description-salesF">
        We provide a complete dashboard to help you<br></br> manage your ongoing projects. Easily subdivide <br></br>
        projects into tasks and 
        maintain a comprehensive<br></br> project card with all the related information in one <br></br>place.
        </p>
      </div>
    </div>
  );
};

export default SalesManagement;
