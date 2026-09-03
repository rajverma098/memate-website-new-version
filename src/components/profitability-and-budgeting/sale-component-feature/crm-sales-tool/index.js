import React from "react";
import "./style.css";
import Images from "../../../../assests/images";
import { LazyLoadImage } from "react-lazy-load-image-component";
const CRMSalesTool = () => {
  return (
    <div className="sales-management-wrapper-dataF">
      <div className="content-wrapperF">
        <p className="sale-titleF">Economical </p>
        <p className="sales-heading-salesF">smart  </p>
        <p className="sales-typeF">approach </p>
        <p className="sales-description-salesF">
        Preset calculators in meMate allow you to set budgets for products 
        and services, which managers can easily select during the quotation process. This reduces the chances of mistakes, 
        ensures reliable pricing, and speeds up the time it takes to generate quotes.
        </p>
      </div>
      <div className="sales-imageF">
        <LazyLoadImage
            alt="budgeting software for business"
            src={Images.budEconomical}
            effect="blur" 
            type="image/svg+xml"
            />
        </div>
    </div>
  );
};

export default CRMSalesTool;
