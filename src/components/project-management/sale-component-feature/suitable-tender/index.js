import React from "react";
import "./style.css";
import Images from "../../../../assests/images";
import { LazyLoadImage } from "react-lazy-load-image-component";
const SuitableTender = () => {
  return (
    <div className="sales-management-wrapper-dataF">
      <div className="content-wrapperF">
        <p className="sale-titleF">Organised</p>
        <p className="sales-heading-salesF">Business </p>
        <p className="sales-typeF">Dashboard</p>
        <p className="sales-description-salesF">
        The Management Tab is designed to give you a <br></br>real-time overview of all 
        your ongoing projects,<br></br> allowing you to track progress, 
        performance, <br></br>efficiency, and budgeting. We’ve made sure this is<br></br> the main screen for your everyday use.
        </p>
      </div>
       <div className="sales-imageF">
        <LazyLoadImage
            alt="project software for small business Australia"
            src={Images.proOrganised}
            effect="blur" 
            type="image/svg+xml"
            />
      </div>
    </div>
  );
};

export default SuitableTender;
