import React from "react";
import "./style.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
const CalendarProcessOptimiation = () => {
  return (
    <div className="sales-management-wrapper-dataF">
      <div className="content-wrapperF">
        <p className="sale-titleF">Effective</p>
        <p className="sales-heading-salesF">Track</p>
        <p className="sales-typeF">Holidays</p>
        <p className="sales-description-salesF">
        Automatically log public holidays or custom<br/> company leave to avoid scheduling conflicts and<br/> confusion.
        </p>
      </div>
      <div className="sales-imageF">
        <LazyLoadImage
            alt="location-based job management"
            src="https://memate-website.s3.ap-southeast-2.amazonaws.com/companycalender04-min.png"
            effect="blur" 
            type="image/svg+xml"
            className="geolocation"
            />
      </div>
    </div>
  );
};

export default CalendarProcessOptimiation;
