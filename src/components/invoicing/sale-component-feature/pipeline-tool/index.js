import React from "react";
import "./style.css";
import Images from "../../../../assests/images";
import { LazyLoadImage } from "react-lazy-load-image-component";
const PipeLineTool = () => {
  return (
    <div className="sales-management-wrapper-dataF flextMobile">
       <div className="sales-imageF">
        <LazyLoadImage
          alt="	invoicing software for tradies"
          src={Images.invoConvenient}
          effect="blur" 
          type="image/svg+xml"
          className="filter-pipelineimage"
          />
      </div>
      <div className="content-wrapperF">
        <p className="sale-titleF">Convenient</p>
        <p className="sales-heading-salesF">online </p>
        <p className="sales-typeF">payments    </p>
        <p className="sales-description-salesF">
        Allow your clients to pay invoices online, making<br></br> the payment process 
        quick and easy. This <br></br> convenience ensures a smoother experience for <br></br> every one of your clients.
        </p>
      </div>
    </div>
  );
};

export default PipeLineTool;
