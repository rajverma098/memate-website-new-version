import React from "react";
import "./style.css";
import Images from "../../../../assests/images";
import { LazyLoadImage } from "react-lazy-load-image-component";
const SalesManagement = () => {
  return (
    <div className="sales-management-wrapper-dataF flextMobile" >
       <div className="sales-imageF">
        <LazyLoadImage
          alt="manage contractors online"
          src={Images.ContractorManagement}
          effect="blur" 
          type="image/svg+xml"
          />
      </div>
      <div className="content-wrapperF">
        <p className="sale-titleF">Effective</p>
        <p className="sales-heading-salesF">Contractor</p>
        <p className="sales-typeF">Management </p>
        <p className="sales-description-salesF">
        Designed for companies with multiple <br />
        subcontractors working regularly, MeMate’s <br />
        Contractor Management feature enables you to <br />
        assign, track, and manage jobs efficiently. This <br />
        tool keeps project coordination straightforward <br />
        and organized for companies working closely with <br />
        external legalvisions.
       </p>
      </div>
    </div>
  );
};

export default SalesManagement;
