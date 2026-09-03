import React from "react";
import "./style.css";
import Images from "../../../../assests/images";
import { LazyLoadImage } from "react-lazy-load-image-component";
const SuitableTender = () => {
  return (
    <div className="sales-management-wrapper-dataF">
      <div className="content-wrapperF">
        <p className="sale-titleF">Agile</p>
        <p className="sales-heading-salesF">Task Allocation &</p>
        <p className="sales-typeF">Team Collaboration</p>
        <p className="sales-description-salesF">
        The platform allows you to allocate tasks directly <br></br>from the project to each of your team members<br></br> via the mobile application.
         Team members can <br></br>add notes and discuss the project in group chats,<br></br> ensuring smooth collaboration.
        </p>
      </div>
      <div className="sales-imageF">
        <LazyLoadImage
          alt="workforce management software for SMEs"
          src={Images.employeeAgile}
          effect="blur" 
          type="image/svg+xml"
          />
      </div>
    </div>
  );
};

export default SuitableTender;
