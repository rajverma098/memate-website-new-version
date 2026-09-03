import React from "react";
import "./style.css";
import Images from "../../../../assests/images";
import { LazyLoadImage } from "react-lazy-load-image-component";
const SalesManagement = () => {
  return (
    <div className="sales-management-wrapper-dataF flextMobile">
       <div className="sales-imageF imageResizeHeight">
        <LazyLoadImage
          alt="staff management tools"
          src={Images.economicalMobile}
          effect="blur" 
          type="image/svg+xml"
          />
      </div>
      <div className="content-wrapperF">
        <p className="sale-titleF">Economical </p>
        <p className="sales-heading-salesF">Clock-In</p>
        <p className="sales-typeF">Clock-Out Solution</p>
        <p className="sales-description-salesF">
        MeMate’s integrated time management feature<br></br> allows employees to use the MeMate mobile 
        <br></br>application as a time-tracking device. 
        They can<br></br> easily clock in and clock out via their mobile<br></br> devices,
         with timesheets automatically submitted<br></br> for approval the following week.
        </p>
      </div>
    </div>
  );
};

export default SalesManagement;
