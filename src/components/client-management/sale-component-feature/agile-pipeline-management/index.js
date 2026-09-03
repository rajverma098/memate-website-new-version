import React from "react";
import Images from "../../../../assests/images";
import "./style.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

const CMDynamic = () => {

  return (
    <div className="sales-management-wrapper-dataF flextMobile" 
    >
      <div className="sales-imageF">
        <LazyLoadImage
            className=""
            alt="Australian CRM system"
            src={Images.ClientInformation}
            effect="blur" 
            type="image/svg+xml"
          />
      </div>
      <div className="content-wrapperF ">
        <p className="sale-titleF">Dynamic</p>
        <p className="sales-heading-salesF">Detailed</p>
        <p className="sales-typeF">client information </p>
        <p className="sales-description-salesF">
        You can add multiple client locations, including detailed company descriptions, 
        key personnel, and addresses formatted to Australian standards. We’ve thought of everything.
        </p>
      </div>
    </div>
  );
};

export default CMDynamic;
