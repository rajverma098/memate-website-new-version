import React from "react";
import "./style.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
const CRMCalculatorTools = () => {
  return (
    <div className="sales-management-wrapper-dataF">
      <div className="content-wrapperF">
        <p className="sale-titleF">Strategic</p>
        <p className="sales-heading-salesF">Use</p>
        <p className="sales-typeF">Fixed Markup Rules</p>
        <p className="sales-description-salesF">
        Lock in fixed markups across your products and<br/> services to ensure stability and simplicity in your<br/> quoting process.
        </p>
      </div>
      <div className="sales-imageF">
         <LazyLoadImage
            alt="multi-site business software"
            src="https://memate-website.s3.ap-southeast-2.amazonaws.com/custombusiness02-min.png"
            effect="blur" 
            type="image/svg+xml"
            />
      </div>
    </div>
  );
};

  export default CRMCalculatorTools;
