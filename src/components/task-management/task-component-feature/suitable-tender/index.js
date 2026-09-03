import React from "react";
import "./style.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
const SuitableTender = () => {
  return (
    <div className="sales-management-wrapper-dataF">
      <div className="content-wrapperF">
        <p className="sale-titleF">Organised</p>
        <p className="sales-heading-salesF">Send Tasks to</p>
        <p className="sales-typeF">Contractors Too</p>
        <p className="sales-description-salesF">
        Need help from outside? Easily assign tasks to<br/> your contractors and keep them in sync with your<br/> internal workflow.
        </p>
      </div>
      <div className="sales-imageF">
        <LazyLoadImage
          alt="branch management software"
          src="https://memate-website.s3.ap-southeast-2.amazonaws.com/todolist06-min.png"
          effect="blur" 
          type="image/svg+xml"
          />
      </div>
    </div>
  );
};

export default SuitableTender;
