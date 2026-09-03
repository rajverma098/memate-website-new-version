import React from "react";
import "./style.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
const SuitableTender = () => {
  return (
    <div className="sales-management-wrapper-dataF">
      <div className="content-wrapperF">
        <p className="sale-titleF">Convenient</p>
        <p className="sales-heading-salesF">Pre-Set Product</p>
        <p className="sales-typeF">& Service <br/>Descriptions</p>
        <p className="sales-description-salesF">
        Save time with ready-to-use descriptions for all<br/> your offerings—just select and go, no typing<br/> required.
        </p>
      </div>
      <div className="sales-imageF">
        <LazyLoadImage
          alt="branch management software"
          src="https://memate-website.s3.ap-southeast-2.amazonaws.com/custombusiness06-min.png"
          effect="blur" 
          type="image/svg+xml"
          />
      </div>
    </div>
  );
};

export default SuitableTender;
