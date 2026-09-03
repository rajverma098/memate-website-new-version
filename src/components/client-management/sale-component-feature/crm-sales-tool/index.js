import React from "react";
import "./style.css";
import Images from "../../../../assests/images";
import { LazyLoadImage } from "react-lazy-load-image-component";

const CMIntuitive = () => {
  
  return (
    <div className="sales-management-wrapper-dataF" 
    >
      <div className="content-wrapperF">
        <p className="sale-titleF">Intuitive</p>
        <p className="sales-heading-salesF">Client relationship</p>
        <p className="sales-typeF">management <br></br> database</p>
        <p className="sales-description-salesF">
        The structured database of clients is of great value to the business and helps with business 
        growth. meMate is designed with firm CRM capabilities to help your management keep the database clean, safe, 
        and accessible. It also allows them to upload new clients quickly and easily.
        </p>
      </div>
        <div className="sales-imageF">
          <LazyLoadImage
                    alt="client management software"
                    src={Images.ClientRelationship}
                    effect="blur" 
                    type="image/svg+xml"
                  />

        </div>
    </div>
  );
};

export default CMIntuitive;
