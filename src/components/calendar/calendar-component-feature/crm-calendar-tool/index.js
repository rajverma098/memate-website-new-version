import React from "react";
import "./style.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
const CRMCalendarTools = () => {
  return (
    <div className="sales-management-wrapper-dataF">
      <div className="content-wrapperF">
        <p className="sale-titleF">Customisable</p>
        <p className="sales-heading-salesF">Manage Employee</p>
        <p className="sales-typeF">Shifts Effortlessly</p>
        <p className="sales-description-salesF">
        Plan, adjust, and view your team’s shifts in a snap<br/>—no more back-and-forth or messy spreadsheets.
        </p>
      </div>
      <div className="sales-imageF">
         <LazyLoadImage
            alt="multi-site business software"
            src="https://memate-website.s3.ap-southeast-2.amazonaws.com/companycalender02-min.png"
            effect="blur" 
            type="image/svg+xml"
            />
      </div>
    </div>
  );
};

export default CRMCalendarTools;
