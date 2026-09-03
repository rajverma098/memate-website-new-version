import React from "react";
import "./style.css";
import Images from "../../../../assests/images";
import { LazyLoadImage } from "react-lazy-load-image-component";

const CMIntelligent = () => {

  return (
    <div className="sales-management-wrapper-dataF flextMobile" 
    >
      <div className="sales-imageF">
         <LazyLoadImage
         className="section1"
          alt="customer management system"
          src={Images.ClientTable}
          effect="blur" 
          type="image/svg+xml"
        />
        </div>
      <div className="content-wrapperF ">
        <p className="sale-titleF">Intelligent </p>
        <p className="sales-heading-salesF">Clients</p>
        <p className="sales-typeF">management</p>
        <p className="sales-description-salesF">
        Keep all your existing clients or manage your prospective clients in one place. One of the most important CRM tools for small businesses is to keep your client database organised, secure, and well-structured. Easily accessible for marketing and statistics.
        </p>
      </div>
    </div>
  );
};

export default CMIntelligent;
