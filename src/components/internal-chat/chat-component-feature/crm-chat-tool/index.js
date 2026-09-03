import React from "react";
import "./style.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
const CRMChatTools = () => {
  return (
    <div className="sales-management-wrapper-dataF">
      <div className="content-wrapperF">
        <p className="sale-titleF">Secure</p>
        <p className="sales-heading-salesF">Project-Based</p>
        <p className="sales-typeF">Chat Separation</p>
        <p className="sales-description-salesF">
        Add team members to specific projects and keep<br/> conversations focused with dedicated chats for<br/> each—ensuring clarity and reducing cross-talk.
        </p>
      </div>
      <div className="sales-imageF">
         <LazyLoadImage
            alt="multi-site business software"
            src="https://memate-website.s3.ap-southeast-2.amazonaws.com/internalchat02-min.png"
            effect="blur" 
            type="image/svg+xml"
            />
      </div>
    </div>
  );
};

export default CRMChatTools;
