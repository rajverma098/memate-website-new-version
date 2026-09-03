import React from "react";
import "./style.css";
import Images from "../../../../assests/images";
import { LazyLoadImage } from "react-lazy-load-image-component";
const CRMSalesTool = () => {
  return (
    <div className="sales-management-wrapper-dataF">
      <div className="content-wrapperF">
        <p className="sale-titleF">Streamlined </p>
        <p className="sales-heading-salesF">Navigation &   </p>
        <p className="sales-typeF">Control  </p>
        <p className="sales-description-salesF">
        Assign jobs to your contractors, shifts to your<br></br> employees,
         and track project-related expenses—<br></br> all with just one click of a button.
        </p>
      </div>
       <div className="sales-imageF">
        <LazyLoadImage
          alt="job scheduling software"
          src={Images.proStreamlined}
          effect="blur" 
          type="image/svg+xml"
          />
        </div>
    
    </div>
  );
};

export default CRMSalesTool;
