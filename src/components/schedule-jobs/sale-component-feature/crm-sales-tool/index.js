import React from "react";
import "./style.css";
import Images from "../../../../assests/images";
import { LazyLoadImage } from "react-lazy-load-image-component";
const CRMSalesTool = () => {
  return (
    <div className="sales-management-wrapper-dataF">
      <div className="content-wrapperF">
        <p className="sale-titleF">Proactive </p>
        <p className="sales-heading-salesF">Shift Management  </p>
        <p className="sales-typeF">app for employees</p>
        <p className="sales-description-salesF">
        meMate offers employee rostering with complete <br/>control. Employees can 
        use the meMate<br/> application to easily view all their assigned shifts<br/> and 
        track their work time efficiently.
        </p>
      </div>
       <div className="sales-imageF">
        <LazyLoadImage
          alt="job scheduling software"
          src={Images.jobProactive}
          effect="blur" 
          type="image/svg+xml"
          />
      </div>
    </div>
  );
};

export default CRMSalesTool;
