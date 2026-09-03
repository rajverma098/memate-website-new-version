import React from "react";
import "./style.css";
import Images from "../../../../assests/images";
import { LazyLoadImage } from "react-lazy-load-image-component";


const CMWise = () => {

  return (
    <div className="sales-management-wrapper-dataF " 
    >
      <div className="content-wrapperF">
        <p className="sale-titleF">Wise</p>
        <p className="sales-heading-salesF">Complete</p>
        <p className="sales-typeF">optimisation <br></br> software</p>
        <p className="sales-description-salesF">
        A CRM where you can see all your client requests,complete projects, and ongoing projects with 
        just a few clicks. That’s what we call smart and simple software for client database management.
        </p>
      </div>
       <div className="sales-imageF">
        <LazyLoadImage
                  className="section2 sales-process-optimization-image"
                  alt="business client database"
                  src={Images.ClientHistory}
                  effect="blur" 
                  type="image/svg+xml"
                />
      </div>
    </div>
  );
};

export default CMWise;
