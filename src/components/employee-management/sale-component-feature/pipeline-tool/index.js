import React from "react";
import "./style.css";
import Images from "../../../../assests/images";
import { LazyLoadImage } from "react-lazy-load-image-component";
const PipeLineTool = () => {
  return (
    <div className="sales-management-wrapper-dataF flextMobile">
      <div className="sales-imageF">
        <LazyLoadImage
          alt="manage staff online"
          src={Images.ClientStrategic}
          effect="blur" 
          type="image/svg+xml"
          />
      </div>
      <div className="content-wrapperF">
        <p className="sale-titleF">Strategic</p>
        <p className="sales-heading-salesF">Allocate</p>
        <p className="sales-typeF">Shifts</p>
        <p className="sales-description-salesF">
        Easily allocate shifts for your team <br></br>and allow them to submit sick leave and holiday 
        requests. All of <br></br>this can be managed and viewed within the all-in-<br></br>one team management dashboard.
        </p>
      </div>
    </div>
  );
};

export default PipeLineTool;
