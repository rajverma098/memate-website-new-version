import React from "react";
import "./style.css";
import Images from "../../../../assests/images";
import { LazyLoadImage } from "react-lazy-load-image-component";
const SuitableTender = () => {
  return (
    <div className="sales-management-wrapper-dataF">
      <div className="content-wrapperF">
        <p className="sale-titleF">Integrated</p>
        <p className="sales-heading-salesF">Accounting   </p>
        <p className="sales-typeF">Connectivity</p>
        <p className="sales-description-salesF">
        Easily link meMate to your accounting software<br></br> 
        like MYOB or Xero and send all paid invoices in one<br></br> go. This ensures your accounting system 
        stays<br></br> clean, organised, and under complete control.
        </p>
      </div>
      <div className="sales-imageF">
        <LazyLoadImage
          alt="invoIntegrated"
          src={Images.invoIntegrated}
          effect="blur" 
          type="image/svg+xml"
          />
      </div>
    </div>
  );
};

export default SuitableTender;
