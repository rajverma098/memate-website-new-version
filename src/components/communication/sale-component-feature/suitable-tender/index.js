import React from "react";
import "./style.css";
import Images from "../../../../assests/images";
import { LazyLoadImage } from "react-lazy-load-image-component";
const SuitableTender = () => {
  return (
    <div className="sales-management-wrapper-dataF">
      <div className="content-wrapperF">
        <p className="sale-titleF">Seamless</p>
        <p className="sales-heading-salesF">Accessible </p>
        <p className="sales-typeF">Data history </p>
        <p className="sales-description-salesF">
        We’ve designed everything for you to easily store <br></br>information related to your business 
        projects. With <br></br>just two clicks, you can retrieve the complete<br></br> project history.
        </p>
      </div>
      <div className="sales-imageF">
        <LazyLoadImage
            alt="employee chat system"
            src={Images.commSeamless}
            effect="blur" 
            type="image/svg+xml"
            />
      </div>
    </div>
  );
};

export default SuitableTender;
