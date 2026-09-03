import React from "react";
import "./style.css";
import Images from "../../../../assests/images";
import { LazyLoadImage } from "react-lazy-load-image-component";
const CRMSalesTool = () => {
  return (
    <div className="sales-management-wrapper-dataF">
      <div className="content-wrapperF">
        <p className="sale-titleF">Comprehensive </p>
        <p className="sales-heading-salesF">Project Updates & </p>
        <p className="sales-typeF">Notifications</p>
        <p className="sales-description-salesF">
        We’ve developed multiple features that allow you <br></br>to update clients via email or 
        SMS directly from <br></br>the project card, keeping 
        them informed about<br></br> current progress. You can also view the entire<br></br> communication 
        history in one place.
        </p>
      </div>
      <div className="sales-imageF">
        <LazyLoadImage
          alt="internal communication software"
          src={Images.commComprehensive}
          effect="blur" 
          type="image/svg+xml"
          />
        </div>
      </div>
  );
};

export default CRMSalesTool;
