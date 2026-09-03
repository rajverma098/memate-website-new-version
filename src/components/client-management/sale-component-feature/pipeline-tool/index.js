import React from "react";
import "./style.css";
import Images from "../../../../assests/images";
import { LazyLoadImage } from "react-lazy-load-image-component";

const CMSmart = () => {

  return (
    <div className="sales-management-wrapper-dataF flextMobile" 
    >
      <div className="sales-imageF">
        <LazyLoadImage
          className="filter-pipelineimage"
          alt="	manage clients online"
          src={Images.ClientBusiness}
          effect="blur" 
          type="image/svg+xml"
        />  
      </div>
      <div className="content-wrapperF">
        <p className="sale-titleF">Smart</p>
        <p className="sales-heading-salesF">Tool for Small </p>
        <p className="sales-typeF">business  </p>
        <p className="sales-description-salesF">
        In meMate, we display all necessary information for every client automatically, 
        including total  turnover, average income per day, total amount of  orders, and order frequency. 
        This helps you navigate your marketing
        activities in the best  client management CRM in Australia.
        </p>
      </div>
    </div>
  );
};

export default CMSmart;
