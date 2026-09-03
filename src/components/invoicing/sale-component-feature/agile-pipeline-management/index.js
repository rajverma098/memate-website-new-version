import React from "react";
import Images from "../../../../assests/images";
import "./style.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
const AgilePipeLineManagement = () => {
  return (
    <div className="sales-management-wrapper-dataF flextMobile">
      <div className="sales-imageF">
        <LazyLoadImage
          alt="Aussie invoice system"
          src={Images.invOrganised}
          effect="blur" 
          type="image/svg+xml"
          />
      </div>
      <div className="content-wrapperF">
        <p className="sale-titleF">Organised</p>
        <p className="sales-heading-salesF">Client </p>
        <p className="sales-typeF">statements</p>
        <p className="sales-description-salesF">
        Send your clients a complete statement of <br></br> outstanding invoices to keep them informed. 
        You<br></br>  can also print out the invoices that need your<br></br>  team’s attention for easy follow-up.
        </p>
      </div>
    </div>
  );
};

export default AgilePipeLineManagement;
