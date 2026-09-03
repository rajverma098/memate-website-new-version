import React from "react";
import "./style.css";
import Images from "../../../../assests/images";
import { LazyLoadImage } from "react-lazy-load-image-component";
const SalesProcessOptimiation = () => {
  return (
    <div className="sales-management-wrapper-dataF">
      <div className="content-wrapperF">
        <p className="sale-titleF">Effective</p>
        <p className="sales-heading-salesF">Shift and</p>
        <p className="sales-typeF">job templates</p>
        <p className="sales-description-salesF">
        Create templates for shifts and jobs to streamline<br/> your weekly 
        scheduling and allocation process.<br/> Save time by reusing templates 
        for recurring <br/>tasks, ensuring quick and efficient job<br/> management.
        </p>
      </div>
      <div className="sales-imageF">
        <LazyLoadImage
          alt="field service job tracking"
          src={Images.jobEffective01}
          effect="blur" 
          className="sales-process-optimization-image"
          type="image/svg+xml"
          />
      </div>
    </div>
  );
};

export default SalesProcessOptimiation;
