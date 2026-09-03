import React from "react";
import "./style.css";
import Images from "../../../../assests/images";
import { LazyLoadImage } from "react-lazy-load-image-component";
const SuitableTender = () => {
  return (
    <div className="sales-management-wrapper-dataF">
      <div className="content-wrapperF">
        <p className="sale-titleF">Centralised</p>
        <p className="sales-heading-salesF">software</p>
        <p className="sales-typeF">for your business</p>
        <p className="sales-description-salesF">
        Create tasks, assign them to individual <br/>contractors,
         monitor progress in real time,<br/> approve upon completion, 
         and communicate all <br/>within one platform.
        </p>
      </div>
      <div className="sales-imageF">
        <LazyLoadImage
            alt="workforce contractor software"
            src={Images.ContractorBusiness}
            effect="blur" 
            type="image/svg+xml"
            />
      </div>
    </div>
  );
};

export default SuitableTender;
