import React from "react";
import Images from "../../../../assests/images";
import "./style.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
const AgilePipeLineManagement = () => {
  return (
    <div className="sales-management-wrapper-dataF flextMobile">
       <div className="sales-imageF ">
        <LazyLoadImage
            alt="Aussie team collaboration software"
            src={Images.commOrganised}
            effect="blur" 
            type="image/svg+xml"
            />
      </div>
      <div className="content-wrapperF">
        <p className="sale-titleF">Organised</p>
        <p className="sales-heading-salesF">Internal</p>
        <p className="sales-typeF">To-Do list </p>
        <p className="sales-description-salesF">
        MeMate includes an internal to-do list for you and<br></br> your team. You can add 
        project segments and<br></br> assign them to different contractors, improving <br></br>
        communication and reducing mistakes.
        </p>
      </div>
    </div>
  );
};

export default AgilePipeLineManagement;
